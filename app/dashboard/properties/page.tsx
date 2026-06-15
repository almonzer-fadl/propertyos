import Link from "next/link";
import { FileText, Wrench } from "lucide-react";
import { properties } from "../../_data/propertyos";
import { PageHeader, Panel, SectionHeading, SoftButton, StatusBadge } from "../../_components/ui";

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Company OS / Properties"
        title="The portfolio overview you currently build by hand every Monday."
        description="Units, occupancy, open issues, monthly rent, owner details, and recent documents — all attached to the property record instead of scattered across 5 different places."
        actionLabel="Open reports"
        actionHref="/dashboard/reports"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {properties.map((property) => (
          <Panel key={property.name} className="transition hover:-translate-y-0.5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-[#151612]">{property.name}</h2>
                <p className="mt-1 text-sm text-[#667065]">{property.address}</p>
              </div>
              <StatusBadge label={property.health} />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-[#f7f3ea] p-3">
                <p className="text-xs text-[#7a8276]">Owner</p>
                <p className="font-bold">{property.owner}</p>
              </div>
              <div className="rounded-2xl bg-[#f7f3ea] p-3">
                <p className="text-xs text-[#7a8276]">Units</p>
                <p className="font-bold">{property.units}</p>
              </div>
              <div className="rounded-2xl bg-[#f7f3ea] p-3">
                <p className="text-xs text-[#7a8276]">Occupancy</p>
                <p className="font-bold">{property.occupancy}</p>
              </div>
              <div className="rounded-2xl bg-[#f7f3ea] p-3">
                <p className="text-xs text-[#7a8276]">Monthly rent</p>
                <p className="font-bold">{property.rent}</p>
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <Link href="/dashboard/maintenance" className="grid size-11 place-items-center rounded-2xl bg-[#fff0ea] text-[#a3482e]">
                <Wrench size={18} />
              </Link>
              <Link href="/dashboard/documents" className="grid size-11 place-items-center rounded-2xl bg-[#edf3ff] text-[#315d8f]">
                <FileText size={18} />
              </Link>
            </div>
          </Panel>
        ))}
      </div>

      <Panel>
        <SectionHeading title="Property detail preview" subtitle="This area would become the tabbed record for overview, units, tenants, maintenance, documents, and reports." />
        <div className="grid gap-3 sm:grid-cols-3">
          <SoftButton href="/dashboard/tenants">View tenants</SoftButton>
          <SoftButton href="/dashboard/documents">Property documents</SoftButton>
          <SoftButton href="/owner/portal">Owner view</SoftButton>
        </div>
      </Panel>
    </div>
  );
}
