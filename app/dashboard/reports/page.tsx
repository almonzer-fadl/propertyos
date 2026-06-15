"use client";

import { Download, ShieldCheck } from "lucide-react";
import { metrics, reportSeries } from "../../_data/propertyos";
import { Metric, MiniBars, PageHeader, Panel, SectionHeading, SoftButton } from "../../_components/ui";
import { useDemo } from "../../_components/demo-context";

export default function ReportsPage() {
  const { showToast, addActivity } = useDemo();
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Company OS / Reports"
        title="Owner reports that used to take you 3 hours. Now: one click."
        description="Maintenance volume, occupancy, resolution times, cost summaries — everything an owner expects in a monthly packet, generated from data you're already tracking."
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
            <button
              onClick={() => { showToast("Owner packet exported"); addActivity("Monthly owner packet exported."); }}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#d8dfd1] bg-white/80 px-4 py-2.5 text-sm font-semibold text-[#2b3028] transition duration-300 hover:-translate-y-0.5 hover:border-[#bfcbb5] hover:bg-white"
            >
              <Download size={17} />
              Export owner packet
            </button>
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
