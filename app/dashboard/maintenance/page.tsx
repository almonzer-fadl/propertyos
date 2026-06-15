"use client";

import { useState } from "react";
import Link from "next/link";
import { Camera, CheckCircle2, Eye, EyeOff, MessageSquareText, Send, UserRoundCheck } from "lucide-react";
import { useDemo } from "../../_components/demo-context";
import { PageHeader, Panel, SectionHeading, SoftButton, StatusBadge } from "../../_components/ui";

const columns = ["New", "Assigned", "In Progress", "Waiting", "Resolved"];
const statusOrder = ["New", "Assigned", "In Progress", "Waiting", "Resolved"];

export default function MaintenancePage() {
  const { tickets, advanceTicket, toggleOwnerVisibility } = useDemo();
  const [selectedId, setSelectedId] = useState(tickets[0].id);

  const selected = tickets.find((t) => t.id === selectedId) || tickets[0];

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Company OS / Maintenance"
        title="A repair command center built for real property workflows."
        description="Tenants submit structured requests, managers triage with context, contractors get assigned, and owners only see clean approved updates. Click a ticket to advance its status."
        actionLabel="View tenant app"
        actionHref="/tenet/portal"
      />

      <div className="grid gap-5 2xl:grid-cols-[1.35fr_0.65fr]">
        <Panel>
          <SectionHeading title="Work order board" subtitle="Click any ticket to advance it to the next status." />
          <div className="grid gap-3 lg:grid-cols-5">
            {columns.map((column) => {
              const columnTickets = tickets.filter((t) => t.status === column);

              return (
                <div key={column} className="rounded-[26px] bg-[#f7f3ea] p-3">
                  <div className="mb-3 flex items-center justify-between px-1">
                    <p className="text-sm font-bold text-[#343a31]">{column}</p>
                    <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-[#6c7566]">
                      {columnTickets.length}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {columnTickets.map((ticket) => (
                      <button
                        key={`${column}-${ticket.id}`}
                        onClick={() => {
                          setSelectedId(ticket.id);
                          advanceTicket(ticket.id);
                        }}
                        className="block w-full rounded-[22px] bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-bold leading-5 text-[#151612]">{ticket.title}</p>
                          <StatusBadge label={ticket.priority} />
                        </div>
                        <p className="mt-2 text-xs leading-5 text-[#667065]">
                          {ticket.property} / {ticket.tenant}
                        </p>
                        <div className="mt-4 flex items-center justify-between text-xs font-bold text-[#7a8276]">
                          <span>{ticket.age}</span>
                          <span>{ticket.photos} photos</span>
                        </div>
                      </button>
                    ))}
                    {columnTickets.length === 0 && (
                      <div className="rounded-[22px] border border-dashed border-[#cfd8c7] p-4 text-center text-xs text-[#a3aca0]">
                        No tickets
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Panel>

        <Panel className="!bg-[#151612] text-white">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#bfe3b7]">
            Selected ticket
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">{selected.title}</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">
            {selected.tenant} uploaded {selected.photos} photos for Unit {selected.unit} at{" "}
            {selected.property}.
          </p>
          <button
            onClick={() => toggleOwnerVisibility(selected.id)}
            className={`mt-4 flex w-full items-center justify-center gap-2 rounded-[22px] px-4 py-3 text-sm font-bold transition ${
              selected.ownerVisible
                ? "bg-[#bfe3b7] text-[#1d4628]"
                : "bg-white/10 text-white/70 hover:bg-white/18"
            }`}
          >
            {selected.ownerVisible ? <Eye size={17} /> : <EyeOff size={17} />}
            {selected.ownerVisible ? "Visible to owner" : "Hidden from owner — click to show"}
          </button>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {[
              ["Ticket", selected.id],
              ["Estimate", selected.estimate],
              ["Contractor", selected.contractor],
              ["Status", selected.status],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[22px] bg-white/8 p-4 ring-1 ring-white/10">
                <p className="text-xs text-white/48">{label}</p>
                <p className="mt-1 text-sm font-bold">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 space-y-3">
            {[
              ["Request received", Camera],
              ["Manager triage", UserRoundCheck],
              ["Assign contractor", CheckCircle2],
              ["Owner-safe update", Send],
            ].map(([label, Icon], index) => {
              const stepIdx = statusOrder.indexOf(selected.status);
              const done = index <= (stepIdx === -1 ? 0 : Math.min(stepIdx, 3));
              return (
                <div key={label as string} className="flex items-center gap-3 rounded-2xl bg-white/7 p-3">
                  <div className={`grid size-9 place-items-center rounded-xl ${done ? "bg-[#bfe3b7] text-[#1d4628]" : "bg-white/10 text-white/70"}`}>
                    <Icon size={17} />
                  </div>
                  <p className="text-sm font-semibold">{label as string}</p>
                </div>
              );
            })}
          </div>
        </Panel>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <SoftButton href="/dashboard/contractors">
          Assign contractor
        </SoftButton>
        <SoftButton href="/owner/portal">
          Send owner update
        </SoftButton>
        <SoftButton href="/tenet/portal">
          <MessageSquareText size={17} />
          Tenant status view
        </SoftButton>
      </div>
    </div>
  );
}
