"use client";

import { createContext, use, useCallback, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { tickets as initialTickets, tenantRequests as initialRequests, ownerMessages as initialOwnerMessages, tenantMessages as initialTenantMessages, activity as initialActivity } from "../_data/propertyos";

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

type DemoState = {
  tickets: Ticket[];
  tenantRequests: TenantRequest[];
  messages: Message[];
  activity: string[];
  unreadOwnerCount: number;
  unreadTenantCount: number;

  addTenantRequest: (title: string, description: string, priority: string) => void;
  advanceTicket: (id: string) => void;
  toggleOwnerVisibility: (id: string) => void;
  markMessageRead: (id: string) => void;
  addActivity: (entry: string) => void;
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
        return { ...t, status: nextStatus, age: nextStatus === "Resolved" ? "Closed" : t.age };
      }),
    );
    setActivity((prev) => [`Ticket ${id} moved to next status.`, ...prev]);
  }, []);

  const toggleOwnerVisibility = useCallback((id: string) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ownerVisible: !t.ownerVisible } : t)),
    );
  }, []);

  const markMessageRead = useCallback((id: string) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, unread: false } : m)));
  }, []);

  const addActivity = useCallback((entry: string) => {
    setActivity((prev) => [entry, ...prev]);
  }, []);

  const value = useMemo<DemoState>(
    () => ({
      tickets,
      tenantRequests,
      messages,
      activity,
      unreadOwnerCount,
      unreadTenantCount,
      addTenantRequest,
      advanceTicket,
      toggleOwnerVisibility,
      markMessageRead,
      addActivity,
    }),
    [tickets, tenantRequests, messages, activity, unreadOwnerCount, unreadTenantCount, addTenantRequest, advanceTicket, toggleOwnerVisibility, markMessageRead, addActivity],
  );

  return <DemoContext value={value}>{children}</DemoContext>;
}

export function useDemo(): DemoState {
  const ctx = use(DemoContext);
  if (!ctx) throw new Error("useDemo must be used within DemoProvider");
  return ctx;
}
