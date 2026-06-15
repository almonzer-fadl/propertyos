import { FileText, ShieldCheck } from "lucide-react";
import { owners } from "../../_data/propertyos";
import { PageHeader, Panel, SectionHeading, SoftButton, StatusBadge } from "../../_components/ui";

export default function OwnersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Company OS / Owners"
        title="Owners stop calling you when they can see everything themselves."
        description="Which owners are waiting on reports? Whose property has open issues? What visibility level does each owner have? No more 'just checking in' calls."
        actionLabel="Open owner app"
        actionHref="/owner/portal"
      />

      <Panel>
        <SectionHeading title="Owner update queue" subtitle="A manager-facing view of owner expectations and reporting status." />
        <div className="grid gap-3 md:grid-cols-2">
          {owners.map((owner) => (
            <div key={owner.name} className="rounded-[24px] bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-[#151612]">{owner.name}</p>
                  <p className="mt-1 text-sm text-[#667065]">{owner.portfolio}</p>
                </div>
                <StatusBadge label={owner.visibility} />
              </div>
              <div className="mt-4 rounded-2xl bg-[#f7f3ea] p-3 text-sm font-bold text-[#525b4d]">
                Reports: {owner.reports}
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-3 sm:grid-cols-2">
        <SoftButton href="/dashboard/reports">
          <FileText size={17} />
          Build monthly report
        </SoftButton>
        <SoftButton href="/owner/portal">
          <ShieldCheck size={17} />
          Demo owner portal
        </SoftButton>
      </div>
    </div>
  );
}
