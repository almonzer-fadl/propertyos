import { Camera, CheckCircle2, Clock3, Wrench } from "lucide-react";
import { tenantRequests } from "../../../_data/propertyos";
import { PageHeader, Panel, SectionHeading, StatusBadge } from "../../../_components/ui";

export default function TenantRequestsPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Tenant app / Requests"
        title="Create and track maintenance requests."
        description="The request form captures priority, location, photos, access permission, and the current status timeline."
      />

      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <Panel>
          <SectionHeading title="New request" subtitle="Demo form fields for a tenant-submitted work order." />
          <div className="grid grid-cols-2 gap-3">
            {["Category: Plumbing", "Location: Kitchen", "Priority: Urgent", "Entry: After 2 PM"].map((field) => (
              <button key={field} className="min-h-14 rounded-2xl bg-[#f7f3ea] px-3 py-3 text-left text-sm font-bold text-[#3f453b]">
                {field}
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-dashed border-[#cfd8c7] bg-[#fbfaf5] p-4">
            <div className="flex items-center gap-2 font-bold">
              <Camera size={17} />
              Photos
            </div>
            <p className="mt-2 text-sm text-[#667065]">4 images attached to help the manager triage faster.</p>
          </div>
          <button className="mt-4 w-full rounded-2xl bg-[#151612] px-4 py-3 text-sm font-bold text-white">
            Submit request
          </button>
        </Panel>

        <Panel>
          <SectionHeading title="My requests" subtitle="Status, priority, and timing for every request." />
          <div className="space-y-3">
            {tenantRequests.map((request) => (
              <div key={request.title} className="rounded-[24px] bg-[#f7f3ea] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex gap-3">
                    <div className="grid size-11 place-items-center rounded-2xl bg-white text-[#4e74a5]">
                      <Wrench size={18} />
                    </div>
                    <div>
                      <p className="font-bold">{request.title}</p>
                      <p className="mt-1 text-sm text-[#667065]">{request.status} / {request.time}</p>
                    </div>
                  </div>
                  <StatusBadge label={request.priority} />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <Panel>
        <SectionHeading title="Status timeline" subtitle="What tenants expect to see after submitting." />
        <div className="grid gap-3 md:grid-cols-4">
          {[
            ["Submitted", CheckCircle2],
            ["Manager triage", Clock3],
            ["Contractor assigned", Clock3],
            ["Resolved", CheckCircle2],
          ].map(([label, Icon], index) => (
            <div key={label as string} className="rounded-[24px] bg-[#f7f3ea] p-4">
              <div className={`grid size-10 place-items-center rounded-2xl ${index === 0 ? "bg-[#dff6df] text-[#2d6b3d]" : "bg-white text-[#6d7569]"}`}>
                <Icon size={18} />
              </div>
              <p className="mt-3 font-bold">{label as string}</p>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
