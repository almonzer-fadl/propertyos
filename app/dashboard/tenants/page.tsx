import { MessageSquareText, Wrench } from "lucide-react";
import { tenants } from "../../_data/propertyos";
import { PageHeader, Panel, SectionHeading, SoftButton, StatusBadge } from "../../_components/ui";

export default function TenantsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Company OS / Tenants"
        title="Tenant records that connect communication to operations."
        description="Managers can see who lives where, what is open, when they were last contacted, and what the tenant sees in their app."
        actionLabel="Open tenant app"
        actionHref="/tenet/portal"
      />

      <Panel>
        <SectionHeading title="Tenant directory" subtitle="No more searching chats to understand a tenant issue." />
        <div className="grid gap-3 md:grid-cols-2">
          {tenants.map((tenant) => (
            <div key={tenant.name} className="rounded-[24px] bg-[#f7f3ea] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-[#151612]">{tenant.name}</p>
                  <p className="mt-1 text-sm text-[#667065]">
                    {tenant.property} / Unit {tenant.unit}
                  </p>
                </div>
                <StatusBadge label={tenant.status} />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm font-bold text-[#6d7569]">
                <span>Last contact: {tenant.lastContact}</span>
                <MessageSquareText size={18} />
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-3 sm:grid-cols-2">
        <SoftButton href="/dashboard/maintenance">
          <Wrench size={17} />
          View open maintenance
        </SoftButton>
        <SoftButton href="/tenet/portal">
          <MessageSquareText size={17} />
          Demo tenant portal
        </SoftButton>
      </div>
    </div>
  );
}
