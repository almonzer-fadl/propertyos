import Link from "next/link";
import { Building2, ChevronRight, FileText, ShieldCheck, Wrench } from "lucide-react";
import { MiniBars, PageHeader, Panel, SectionHeading, StatusBadge } from "../../_components/ui";
import { ownerMessages, ownerReports, reportSeries, tickets } from "../../_data/propertyos";

export default function OwnerPortalPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Owner app"
        title="A clean portfolio view without manager follow-ups."
        description="Owners can see performance, maintenance, documents, reports, and approved updates from the property manager."
        actionLabel="Download report"
        actionHref="/owner/portal/reports"
      />

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Occupancy", "95%", "Marina Heights"],
          ["Monthly rent", "$86.4k", "June projected"],
          ["Open work", "7", "2 owner-visible"],
        ].map(([label, value, note]) => (
          <div key={label} className="rounded-[26px] bg-[#f3efe5] p-5 transition duration-300 hover:-translate-y-0.5">
            <p className="text-xs font-bold text-[#7a8276]">{label}</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
            <p className="mt-2 text-xs font-bold text-[#667065]">{note}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <Panel className="!bg-[#151612] text-white">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#bfe3b7]">
                Marina Heights
              </p>
              <h2 className="mt-2 text-3xl font-semibold">Portfolio snapshot</h2>
            </div>
            <div className="grid size-12 place-items-center rounded-2xl bg-white/10">
              <Building2 size={22} />
            </div>
          </div>
          <div className="mt-5 rounded-[24px] bg-white p-3">
            <MiniBars values={reportSeries} />
          </div>
        </Panel>

        <Panel>
          <SectionHeading title="Owner-ready update" subtitle="Only approved information appears here." />
          <div className="rounded-[26px] bg-[#151612] p-5 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#bfe3b7]">Unit 12B plumbing</p>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Plumbing issue has been triaged. Contractor assignment is pending. Estimated
                  repair range is $180-$260.
                </p>
              </div>
              <ShieldCheck className="shrink-0 text-[#bfe3b7]" size={27} />
            </div>
          </div>
          <div className="mt-4 grid gap-3">
            {ownerMessages.slice(0, 2).map((message) => (
              <Link key={message.subject} href="/owner/portal/messages" className="flex items-center gap-3 rounded-[22px] bg-[#f7f3ea] p-4">
                <div className="size-2 rounded-full bg-[#4e74a5]" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold">{message.subject}</p>
                  <p className="text-xs text-[#667065]">{message.time}</p>
                </div>
                <ChevronRight size={17} />
              </Link>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <Panel>
          <SectionHeading title="Visible maintenance" subtitle="A simple owner-safe repair history." />
          <div className="space-y-3">
            {tickets.filter((ticket) => ticket.ownerVisible).slice(0, 3).map((ticket) => (
              <Link key={ticket.id} href="/owner/portal/maintenance" className="flex items-center gap-3 rounded-[24px] bg-[#f7f3ea] p-4">
                <div className="grid size-11 place-items-center rounded-2xl bg-white text-[#4e74a5]">
                  <Wrench size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold">{ticket.title}</p>
                  <p className="text-sm text-[#667065]">{ticket.property} / {ticket.status}</p>
                </div>
                <StatusBadge label={ticket.priority} />
              </Link>
            ))}
          </div>
        </Panel>

        <Panel>
          <SectionHeading title="Latest reports" subtitle="Monthly packet, statement, and supporting docs." />
          <div className="space-y-3">
            {ownerReports.map((report) => (
              <Link key={report.title} href="/owner/portal/reports" className="flex items-center gap-3 rounded-[24px] bg-[#f7f3ea] p-4">
                <div className="grid size-11 place-items-center rounded-2xl bg-white text-[#4e74a5]">
                  <FileText size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold">{report.title}</p>
                  <p className="text-sm text-[#667065]">{report.date} / {report.amount}</p>
                </div>
                <StatusBadge label={report.status} />
              </Link>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
