"use client";

import { createContext, use, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  tickets as initialTickets,
  tenantRequests as initialRequests,
  ownerMessages as initialOwnerMessages,
  tenantMessages as initialTenantMessages,
  activity as initialActivity,
  documents as initialDocuments,
} from "../_data/propertyos";

export type Ticket = typeof initialTickets[number];

export type TenantRequest = typeof initialRequests[number] & { id: string };

export type Message = {
  id: string;
  from: string;
  subject: string;
  time: string;
  unread: boolean;
  kind: "owner" | "tenant";
};

export type Doc = {
  name: string;
  target: string;
  type: string;
  updated: string;
};

type DemoState = {
  tickets: Ticket[];
  tenantRequests: TenantRequest[];
  messages: Message[];
  activity: string[];
  documents: Doc[];
  toast: string | null;
  unreadOwnerCount: number;
  unreadTenantCount: number;

  showToast: (msg: string) => void;
  addTenantRequest: (title: string, description: string, priority: string) => void;
  advanceTicket: (id: string) => void;
  toggleOwnerVisibility: (id: string) => void;
  markMessageRead: (id: string) => void;
  addActivity: (entry: string) => void;
  addDocument: (name: string, target: string, type: string) => void;
  assignContractor: (ticketId: string, contractorName: string) => void;
};

const DemoContext = createContext<DemoState | null>(null);

const statusOrder = ["New", "Assigned", "In Progress", "Waiting", "Resolved"];

function buildInitialMessages(): Message[] {
  let id = 0;
  const owner = initialOwnerMessages.map((m) => ({ ...m, id: `om-${id++}`, kind: "owner" as const }));
  const tenant = initialTenantMessages.map((m) => ({ ...m, id: `tm-${id++}`, kind: "tenant" as const }));
  return [...owner, ...tenant];
}

function buildInitialRequests(): TenantRequest[] {
  return initialRequests.map((r, i) => ({ ...r, id: `req-${i}` }));
}

export function DemoProvider({ children }: { children: ReactNode }) {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [tenantRequests, setTenantRequests] = useState<TenantRequest[]>(buildInitialRequests);
  const [messages, setMessages] = useState<Message[]>(buildInitialMessages);
  const [activity, setActivity] = useState<string[]>(initialActivity);
  const [documents, setDocuments] = useState<Doc[]>(initialDocuments);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(msg);
    toastTimer.current = setTimeout(() => setToast(null), 2500);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const unreadOwnerCount = useMemo(() => messages.filter((m) => m.kind === "owner" && m.unread).length, [messages]);
  const unreadTenantCount = useMemo(() => messages.filter((m) => m.kind === "tenant" && m.unread).length, [messages]);

  const addTenantRequest = useCallback((title: string, _description: string, priority: string) => {
    setTenantRequests((prev) => [
      { id: `req-${Date.now()}`, title, status: "Manager triage", priority, time: "Just now" },
      ...prev,
    ]);
    setActivity((prev) => [`Tenant submitted new request: ${title}.`, ...prev]);
  }, []);

  const advanceTicket = useCallback((id: string) => {
    setTickets((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        const currentIdx = statusOrder.indexOf(t.status);
        if (currentIdx === -1 || currentIdx >= statusOrder.length - 1) return t;
        const nextStatus = statusOrder[currentIdx + 1];
        const labels: Record<string, string> = {
          Assigned: "Ticket assigned.",
          "In Progress": "Work started on ticket.",
          Waiting: "Ticket waiting on parts or owner.",
          Resolved: "Ticket marked resolved.",
        };
        const activityMsg = labels[nextStatus] || `Ticket ${id} moved to ${nextStatus}.`;
        setActivity((prev) => [activityMsg, ...prev]);
        return { ...t, status: nextStatus, age: nextStatus === "Resolved" ? "Closed" : t.age };
      }),
    );
  }, []);

  const toggleOwnerVisibility = useCallback((id: string) => {
    setTickets((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        const msg = t.ownerVisible
          ? `Ticket ${id} hidden from owner portal.`
          : `Ticket ${id} is now visible to owner.`;
        setActivity((prev) => [msg, ...prev]);
        return { ...t, ownerVisible: !t.ownerVisible };
      }),
    );
  }, []);

  const markMessageRead = useCallback((id: string) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, unread: false } : m)));
  }, []);

  const addActivity = useCallback((entry: string) => {
    setActivity((prev) => [entry, ...prev]);
  }, []);

  const addDocument = useCallback((name: string, target: string, type: string) => {
    setDocuments((prev) => [
      { name, target, type, updated: "Just now" },
      ...prev,
    ]);
  }, []);

  const assignContractor = useCallback((ticketId: string, contractorName: string) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === ticketId
          ? { ...t, contractor: contractorName, status: t.status === "New" ? "Assigned" : t.status }
          : t,
      ),
    );
    setActivity((prev) => [`${contractorName} assigned to ticket ${ticketId}.`, ...prev]);
  }, []);

  const value = useMemo<DemoState>(
    () => ({
      tickets,
      tenantRequests,
      messages,
      activity,
      documents,
      toast,
      unreadOwnerCount,
      unreadTenantCount,
      showToast,
      addTenantRequest,
      advanceTicket,
      toggleOwnerVisibility,
      markMessageRead,
      addActivity,
      addDocument,
      assignContractor,
    }),
    [tickets, tenantRequests, messages, activity, documents, toast, unreadOwnerCount, unreadTenantCount, showToast, addTenantRequest, advanceTicket, toggleOwnerVisibility, markMessageRead, addActivity, addDocument, assignContractor],
  );

  return <DemoContext value={value}>{children}</DemoContext>;
}

export function useDemo(): DemoState {
  const ctx = use(DemoContext);
  if (!ctx) throw new Error("useDemo must be used within DemoProvider");
  return ctx;
}
