import { PhoneCall, Wrench } from "lucide-react";
import { contractors } from "../../_data/propertyos";
import { PageHeader, Panel, SectionHeading, SoftButton } from "../../_components/ui";

export default function ContractorsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Company OS / Contractors"
        title="Know who is assigned, overloaded, and reliable."
        description="Contractor visibility helps managers assign the right person, track response times, and keep repair history attached to the property."
        actionLabel="Assign work order"
        actionHref="/dashboard/maintenance"
      />

      <Panel>
        <SectionHeading title="Contractor network" subtitle="Workload, trade, SLA, and service rating at a glance." />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {contractors.map((contractor) => (
            <div key={contractor.name} className="rounded-[24px] bg-[#f7f3ea] p-4">
              <div className="grid size-12 place-items-center rounded-2xl bg-white text-[#4e74a5] shadow-sm">
                <Wrench size={20} />
              </div>
              <p className="mt-4 font-semibold text-[#151612]">{contractor.name}</p>
              <p className="mt-1 text-sm text-[#667065]">{contractor.trade}</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                <div>
                  <p className="text-xs text-[#7a8276]">Active</p>
                  <p className="font-bold">{contractor.active}</p>
                </div>
                <div>
                  <p className="text-xs text-[#7a8276]">SLA</p>
                  <p className="font-bold">{contractor.sla}</p>
                </div>
                <div>
                  <p className="text-xs text-[#7a8276]">Rating</p>
                  <p className="font-bold">{contractor.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <SoftButton href="/dashboard/maintenance">
        <PhoneCall size={17} />
        Return to work orders
      </SoftButton>
    </div>
  );
}
