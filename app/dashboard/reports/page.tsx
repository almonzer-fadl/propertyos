import { Download, ShieldCheck } from "lucide-react";
import { metrics, reportSeries } from "../../_data/propertyos";
import { Metric, MiniBars, PageHeader, Panel, SectionHeading, SoftButton } from "../../_components/ui";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Company OS / Reports"
        title="Owner-ready reporting without spreadsheet cleanup."
        description="Give managers instant visibility into maintenance volume, occupancy, contractor response, and owner report readiness."
        actionLabel="Open owner app"
        actionHref="/owner/portal"
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Metric key={metric.label} {...metric} />
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <Panel>
          <SectionHeading title="Maintenance performance" subtitle="Ticket volume and closure trend for the portfolio." />
          <MiniBars values={reportSeries} />
        </Panel>
        <Panel>
          <SectionHeading title="Report actions" subtitle="Demo buttons for the monthly owner workflow." />
          <div className="grid gap-3">
            <SoftButton href="/dashboard/reports">
              <Download size={17} />
              Export owner packet
            </SoftButton>
            <SoftButton href="/owner/portal">
              <ShieldCheck size={17} />
              Preview owner portal
            </SoftButton>
            <SoftButton href="/dashboard/documents">
              Attach supporting documents
            </SoftButton>
          </div>
        </Panel>
      </div>
    </div>
  );
}
