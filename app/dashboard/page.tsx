import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FileText,
  MessageSquareText,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import {
  activity,
  metrics,
  properties,
  reportSeries,
  tickets,
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
  const urgentTickets = tickets.filter((ticket) => ticket.priority === "Urgent");

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Property company OS"
        title="Run the entire property operation from one calm dashboard."
        description="A modern command center for maintenance, tenants, owners, contractors, documents, and reporting. Built to replace spreadsheets, email chains, and WhatsApp follow-ups."
        actionLabel="Open maintenance"
        actionHref="/dashboard/maintenance"
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Metric key={metric.label} {...metric} />
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
        <Panel>
          <SectionHeading
            title="Today’s operating queue"
            subtitle="Every request has context, priority, owner visibility, and next action."
          />
          <div className="grid gap-3">
            {tickets.slice(0, 4).map((ticket) => (
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
          </div>
        </Panel>

        <Panel>
          <SectionHeading
            title="Demo flow"
            subtitle="Buttons for the three-app sales walkthrough."
          />
          <div className="grid gap-3">
            <SoftButton href="/dashboard/maintenance">
              <Wrench size={17} />
              Triage urgent work
            </SoftButton>
            <SoftButton href="/tenet/portal">
              <MessageSquareText size={17} />
              Tenant submits request
            </SoftButton>
            <SoftButton href="/owner/portal">
              <ShieldCheck size={17} />
              Owner sees update
            </SoftButton>
            <SoftButton href="/dashboard/documents">
              <FileText size={17} />
              Attach documents
            </SoftButton>
          </div>
        </Panel>
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <Panel>
          <SectionHeading title="Urgent work" subtitle={`${urgentTickets.length} tickets need fast attention.`} />
          <div className="space-y-3">
            {urgentTickets.map((ticket) => (
              <div key={ticket.id} className="rounded-[22px] bg-[#fff0ea] p-4">
                <p className="text-sm font-bold text-[#a3482e]">{ticket.id}</p>
                <p className="mt-1 font-semibold text-[#151612]">{ticket.title}</p>
                <p className="mt-1 text-sm text-[#6f635d]">{ticket.property}</p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <SectionHeading title="Portfolio health" subtitle="A quick scan across properties, occupancy, and open issues." />
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
          <SectionHeading title="Maintenance trend" subtitle="Resolution and ticket volume over the last eight weeks." />
          <MiniBars values={reportSeries} />
        </Panel>
        <Panel>
          <SectionHeading title="Recent activity" subtitle="The audit trail that replaces hunting through chats." />
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
          Generate reports
        </SoftButton>
        <SoftButton href="/owner/portal">
          <ShieldCheck size={17} />
          Open owner app
        </SoftButton>
      </div>
    </div>
  );
}
