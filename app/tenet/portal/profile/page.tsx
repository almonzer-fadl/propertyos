import { Bell, Home, KeyRound, Phone, UserRound } from "lucide-react";
import { PageHeader, Panel, SectionHeading, StatusBadge } from "../../../_components/ui";

export default function TenantProfilePage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Tenant app / Profile"
        title="Tenant details and service preferences."
        description="A simple tenant profile for home details, contact preferences, emergency contacts, and entry permission."
      />

      <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <Panel>
          <div className="grid size-16 place-items-center rounded-[24px] bg-[#dff6df] text-[#2d6b3d]">
            <UserRound size={28} />
          </div>
          <h2 className="mt-4 text-2xl font-semibold">Priya Nair</h2>
          <p className="mt-1 text-sm text-[#667065]">Marina Heights / Unit 12B</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <StatusBadge label="Active lease" />
            <StatusBadge label="SMS preferred" />
          </div>
        </Panel>

        <Panel>
          <SectionHeading title="Profile settings" subtitle="Details a tenant expects to manage." />
          <div className="grid gap-3 md:grid-cols-2">
            {[
              ["Home", "Marina Heights 12B", Home],
              ["Access", "Enter after 2 PM", KeyRound],
              ["Phone", "+1 (555) 014-2890", Phone],
              ["Alerts", "SMS and email", Bell],
            ].map(([label, value, Icon]) => (
              <div key={label as string} className="rounded-[24px] bg-[#f7f3ea] p-4">
                <div className="grid size-10 place-items-center rounded-2xl bg-white text-[#4e74a5]">
                  <Icon size={18} />
                </div>
                <p className="mt-3 text-xs font-bold text-[#7a8276]">{label as string}</p>
                <p className="mt-1 font-bold">{value as string}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
