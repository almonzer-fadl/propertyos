import { Download, FileText } from "lucide-react";
import { ownerReports, reportSeries } from "../../../_data/propertyos";
import { MiniBars, PageHeader, Panel, SectionHeading, SoftButton, StatusBadge } from "../../../_components/ui";

export default function OwnerReportsPage() {
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
        <SoftButton href="/owner/portal/reports">
          <Download size={17} />
          Download PDF
        </SoftButton>
        <SoftButton href="/owner/portal/documents">View documents</SoftButton>
        <SoftButton href="/owner/portal/messages">Ask manager</SoftButton>
      </div>
    </div>
  );
}
