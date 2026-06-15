"use client";

import { Download, FileText } from "lucide-react";
import { ownerReports, reportSeries } from "../../../_data/propertyos";
import { MiniBars, PageHeader, Panel, SectionHeading, SoftButton, StatusBadge } from "../../../_components/ui";
import { useDemo } from "../../../_components/demo-context";

export default function OwnerReportsPage() {
  const { showToast, addActivity } = useDemo();
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Owner app / Reports"
        title="Monthly performance, ready to review."
        description="Owners can open performance summaries, maintenance cost reports, and occupancy snapshots from one place."
        actionLabel="Export packet"
        actionHref="/owner/portal/reports"
      />

      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <Panel>
          <SectionHeading title="Portfolio trend" subtitle="Maintenance and occupancy context for the month." />
          <MiniBars values={reportSeries} />
        </Panel>
        <Panel>
          <SectionHeading title="Report library" subtitle="Documents prepared by the property management team." />
          <div className="space-y-3">
            {ownerReports.map((report) => (
              <div key={report.title} className="flex items-center gap-3 rounded-[24px] bg-[#f7f3ea] p-4">
                <div className="grid size-11 place-items-center rounded-2xl bg-white text-[#4e74a5]">
                  <FileText size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold">{report.title}</p>
                  <p className="text-sm text-[#667065]">{report.property} / {report.date}</p>
                </div>
                <StatusBadge label={report.status} />
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <button
          onClick={() => { showToast("June owner packet downloaded"); addActivity("Owner downloaded June owner packet."); }}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#d8dfd1] bg-white/80 px-4 py-2.5 text-sm font-semibold text-[#2b3028] transition duration-300 hover:-translate-y-0.5 hover:border-[#bfcbb5] hover:bg-white"
        >
          <Download size={17} />
          Download PDF
        </button>
        <SoftButton href="/owner/portal/documents">View documents</SoftButton>
        <button
          onClick={() => { showToast("Message sent to property manager"); addActivity("Owner sent a message to property manager."); }}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#d8dfd1] bg-white/80 px-4 py-2.5 text-sm font-semibold text-[#2b3028] transition duration-300 hover:-translate-y-0.5 hover:border-[#bfcbb5] hover:bg-white"
        >
          Ask manager
        </button>
      </div>
    </div>
  );
}
