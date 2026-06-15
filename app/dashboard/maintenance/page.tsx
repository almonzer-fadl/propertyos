"use client";

import { useState } from "react";
import Link from "next/link";
import { Camera, CheckCircle2, Eye, EyeOff, MessageSquareText, Send, ShieldCheck, UserRoundCheck } from "lucide-react";
import { useDemo } from "../../_components/demo-context";
import { PageHeader, Panel, SectionHeading, SoftButton, StatusBadge } from "../../_components/ui";
import { contractors } from "../../_data/propertyos";

const columns = ["New", "Assigned", "In Progress", "Waiting", "Resolved"];
const statusOrder = ["New", "Assigned", "In Progress", "Waiting", "Resolved"];

export default function MaintenancePage() {
  const { tickets, advanceTicket, toggleOwnerVisibility, assignContractor, showToast, addActivity } = useDemo();
  const [selectedId, setSelectedId] = useState(tickets[0].id);
  const [showPicker, setShowPicker] = useState(false);

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
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0">
            {columns.map((column) => {
              const columnTickets = tickets.filter((t) => t.status === column);

              return (
                <div key={column} className="w-[220px] flex-shrink-0 rounded-[26px] bg-[#f7f3ea] p-3 lg:w-auto lg:flex-shrink">
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

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#bfe3b7]">
              Owner-safe summary
            </p>
            <p className="mt-1 text-xs text-white/50">
              Internal notes are filtered before the owner sees them. Write a note below to preview what the owner receives.
            </p>
            <div className="mt-4 grid gap-3 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold text-white/40 mb-2">INTERNAL NOTE</p>
                <textarea
                  placeholder="e.g. Pipe is corroded, might need to open the wall. Tenant frustrated. Quoted $350 for full replacement."
                  className="w-full rounded-2xl bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none ring-1 ring-white/10 focus:ring-white/25 min-h-[90px] resize-none"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-[#bfe3b7] mb-2 flex items-center gap-1.5">
                  <ShieldCheck size={12} />
                  OWNER SEES
                </p>
                <div className="rounded-2xl bg-[#bfe3b7]/12 p-4 ring-1 ring-[#bfe3b7]/20 min-h-[90px]">
                  <p className="text-sm leading-6 text-[#bfe3b7]">
                    A repair is in progress for Unit 12B. Our team is assessing the scope of work and will provide a cost summary once confirmed. No action is needed from you at this time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="relative">
          <button
            onClick={() => setShowPicker(!showPicker)}
            className="inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-full border border-[#d8dfd1] bg-white/80 px-4 py-2.5 text-sm font-semibold text-[#2b3028] transition duration-300 hover:-translate-y-0.5 hover:border-[#bfcbb5] hover:bg-white"
          >
            Assign contractor
          </button>
          {showPicker && (
            <div className="absolute bottom-full left-0 right-0 z-30 mb-2 rounded-[20px] border border-[#dfe5d8]/80 bg-white p-2 shadow-[0_18px_50px_rgba(52,64,45,0.15)]">
              {contractors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => {
                    assignContractor(selected.id, c.name);
                    showToast(`Assigned: ${c.name}`);
                    setShowPicker(false);
                  }}
                  className="w-full rounded-[14px] px-4 py-3 text-left text-sm font-bold text-[#151612] transition hover:bg-[#f7f3ea]"
                >
                  <span>{c.name}</span>
                  <span className="ml-2 text-xs text-[#667065]">{c.trade} — {c.rating}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={() => { showToast("Owner update sent"); addActivity("Owner-safe update sent for selected ticket."); }}
          className="inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-full border border-[#d8dfd1] bg-white/80 px-4 py-2.5 text-sm font-semibold text-[#2b3028] transition duration-300 hover:-translate-y-0.5 hover:border-[#bfcbb5] hover:bg-white"
        >
          Send owner update
        </button>
        <SoftButton href="/tenet/portal">
          <MessageSquareText size={17} />
          Tenant status view
        </SoftButton>
      </div>
    </div>
  );
}
