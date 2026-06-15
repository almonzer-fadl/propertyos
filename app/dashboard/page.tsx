"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FileText,
  MessageSquareText,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useDemo } from "../_components/demo-context";
import {
  metrics,
  properties,
  reportSeries,
} from "../_data/propertyos";
import {
  Metric,
  MiniBars,
  PageHeader,
  Panel,
  SectionHeading,
  SoftButton,
  StatusBadge,
  Timeline,
} from "../_components/ui";

export default function DashboardPage() {
  const { tickets, activity } = useDemo();
  const [query, setQuery] = useState("");
  const urgentTickets = tickets.filter((t) => t.priority === "Urgent");
  const openTickets = tickets.filter((t) => t.status !== "Resolved");

  const filteredQueue = openTickets.filter(
    (t) =>
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.property.toLowerCase().includes(query.toLowerCase()) ||
      t.tenant.toLowerCase().includes(query.toLowerCase()) ||
      t.id.toLowerCase().includes(query.toLowerCase()),
  );

  const demoPath = [
    {
      label: "Tenant submits request",
      detail: "Issue, unit, photos, access notes",
      href: "/tenant/portal/requests",
      icon: MessageSquareText,
    },
    {
      label: "Manager triages",
      detail: "Priority, property, tenant, context",
      href: "/dashboard/maintenance",
      icon: Search,
    },
    {
      label: "Contractor assigned",
      detail: "Work order and repair context",
      href: "/dashboard/maintenance",
      icon: Wrench,
    },
    {
      label: "Owner gets approved update",
      detail: "Clean update, no internal noise",
      href: "/owner/portal",
      icon: ShieldCheck,
    },
    {
      label: "Reports stay organized",
      detail: "Documents and history attached",
      href: "/dashboard/reports",
      icon: FileText,
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="PropertyOS by VantLaunch"
        title="Stop running your portfolio from a WhatsApp group."
        description="Every maintenance request, tenant question, and owner update in one place. No more scrolling through chat threads to find out if the plumber showed up."
        actionLabel="Open maintenance"
        actionHref="/dashboard/maintenance"
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, i) => {
          if (i === 2) {
            return (
              <Metric
                key={metric.label}
                label="Open work orders"
                value={String(openTickets.length)}
                change={`${urgentTickets.length} urgent`}
                tone="coral"
              />
            );
          }
          return <Metric key={metric.label} {...metric} />;
        })}
      </div>

      <section className="soft-rise-delay overflow-hidden rounded-[28px] border border-[#151612]/10 bg-[#151612] p-4 text-white shadow-[0_24px_80px_rgba(21,22,18,0.2)] sm:p-6">
        <div className="pointer-events-none absolute inset-0" />
        <div className="relative flex flex-col gap-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#bfe3b7]">
                Demo path
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                One maintenance issue, followed from tenant to owner.
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/64">
                Record this flow: request, triage, assignment, approved owner update, and reporting history.
              </p>
            </div>
            <Link
              href="/dashboard/maintenance"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#bfe3b7] px-5 py-3 text-sm font-bold text-[#1d4628] transition hover:-translate-y-0.5 hover:bg-white sm:w-fit"
            >
              Start the flow
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute left-5 right-5 top-9 hidden h-px bg-white/10 sm:block" />
            <div className="path-line absolute left-5 right-5 top-9 hidden h-px bg-gradient-to-r from-[#bfe3b7] via-white/55 to-[#bfe3b7]/40 sm:block" />
            <div className="grid gap-3 sm:grid-cols-5">
              {demoPath.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Link
                    key={step.label}
                    href={step.href}
                    style={{ animationDelay: `${index * 90}ms` }}
                    className={`path-card group relative rounded-[24px] border border-white/10 bg-white/[0.07] p-4 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.12] ${
                      index === 0 ? "path-card-active" : ""
                    }`}
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="grid size-11 place-items-center rounded-2xl bg-white text-[#151612] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition group-hover:scale-105">
                        <Icon size={19} />
                      </div>
                      <span className="grid size-7 place-items-center rounded-full bg-[#bfe3b7] text-xs font-black text-[#1d4628]">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-sm font-bold leading-5 text-white">{step.label}</p>
                    <p className="mt-2 text-xs font-medium leading-5 text-white/52">{step.detail}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#bfe3b7]">
                      Open
                      <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
        <Panel>
          <SectionHeading
            title="What needs attention right now"
            subtitle="Every ticket has the context you'd normally dig through 3 apps to find."
          />
          <div className="mb-4 flex items-center gap-3 rounded-[22px] bg-[#f5f1e7] px-4 py-3">
            <Search size={17} className="text-[#7a8276]" />
            <input
              type="text"
              placeholder="Filter by issue, property, tenant, or ticket ID..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-[#151612] placeholder:text-[#a3aca0] outline-none"
            />
          </div>
          <div className="grid gap-3">
            {filteredQueue.slice(0, 5).map((ticket) => (
              <Link
                key={ticket.id}
                href="/dashboard/maintenance"
                className="group grid gap-4 rounded-[24px] bg-[#f7f3ea] p-4 transition hover:-translate-y-0.5 hover:bg-white sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div className="flex min-w-0 gap-3">
                  <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-[#4e74a5] shadow-sm">
                    <Wrench size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-[#151612]">{ticket.title}</p>
                      <StatusBadge label={ticket.priority} />
                    </div>
                    <p className="mt-1 text-sm leading-6 text-[#667065]">
                      {ticket.property} / Unit {ticket.unit} / {ticket.tenant}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 text-sm font-bold text-[#525b4d] sm:justify-end">
                  <span>{ticket.status}</span>
                  <ArrowRight className="transition group-hover:translate-x-1" size={17} />
                </div>
              </Link>
            ))}
            {filteredQueue.length === 0 && (
              <div className="rounded-[24px] border border-dashed border-[#cad5c1] p-6 text-center text-sm text-[#667065]">
                No tickets match &quot;{query}&quot;
              </div>
            )}
          </div>
        </Panel>

        <Panel>
          <SectionHeading
            title="Open each role"
            subtitle="Use these when recording the short demo path."
          />
          <div className="grid gap-3">
            <SoftButton href="/dashboard/maintenance">
              <Wrench size={17} />
              Triage incoming work
            </SoftButton>
            <SoftButton href="/tenant/portal">
              <MessageSquareText size={17} />
              Tenant submits a request
            </SoftButton>
            <SoftButton href="/owner/portal">
              <ShieldCheck size={17} />
              Owner sees the update
            </SoftButton>
            <SoftButton href="/dashboard/documents">
              <FileText size={17} />
              Documents attached to the work
            </SoftButton>
          </div>
        </Panel>
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <Panel>
          <SectionHeading title="Urgent right now" subtitle={`${urgentTickets.length} tickets need immediate attention.`} />
          <div className="space-y-3">
            {urgentTickets.map((ticket) => (
              <div key={ticket.id} className="rounded-[22px] bg-[#fff0ea] p-4">
                <p className="text-sm font-bold text-[#a3482e]">{ticket.id}</p>
                <p className="mt-1 font-semibold text-[#151612]">{ticket.title}</p>
                <p className="mt-1 text-sm text-[#6f635d]">{ticket.property}</p>
              </div>
            ))}
            {urgentTickets.length === 0 && (
              <p className="text-sm text-[#667065]">No urgent maintenance items right now.</p>
            )}
          </div>
        </Panel>

        <Panel>
          <SectionHeading title="Portfolio at a glance" subtitle="The summary you used to spend Monday morning building from scratch." />
          <div className="grid gap-3 md:grid-cols-2">
            {properties.map((property) => (
              <Link
                key={property.name}
                href="/dashboard/properties"
                className="rounded-[24px] bg-white p-4 shadow-sm transition hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[#151612]">{property.name}</p>
                    <p className="mt-1 text-sm text-[#667065]">{property.address}</p>
                  </div>
                  <StatusBadge label={property.health} />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-[#7a8276]">Units</p>
                    <p className="font-bold">{property.units}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#7a8276]">Occ.</p>
                    <p className="font-bold">{property.occupancy}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#7a8276]">Issues</p>
                    <p className="font-bold">{property.issues}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <Panel>
          <SectionHeading title="Maintenance trend" subtitle="Are things getting better or worse? Now you actually know." />
          <MiniBars values={reportSeries} />
        </Panel>
        <Panel>
          <SectionHeading title="What just happened" subtitle="The audit trail that means you never have to ask 'who did what' again." />
          <Timeline items={activity} />
        </Panel>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <SoftButton href="/dashboard/properties">
          <Building2 size={17} />
          View properties
        </SoftButton>
        <SoftButton href="/dashboard/reports">
          <ArrowRight size={17} />
          Owner-ready reports
        </SoftButton>
        <SoftButton href="/owner/portal">
          <ShieldCheck size={17} />
          Open owner app
        </SoftButton>
      </div>
    </div>
  );
}
