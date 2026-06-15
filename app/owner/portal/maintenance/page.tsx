import { CalendarClock, ReceiptText, Wrench } from "lucide-react";
import { tickets } from "../../../_data/propertyos";
import { PageHeader, Panel, SectionHeading, StatusBadge } from "../../../_components/ui";

export default function OwnerMaintenancePage() {
  const visibleTickets = tickets.filter((ticket) => ticket.ownerVisible);

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Owner app / Maintenance"
        title="Maintenance history without exposing internal noise."
        description="Owners see approved repair updates, cost context, assigned vendors, and completion status."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {visibleTickets.map((ticket) => (
          <Panel key={ticket.id}>
            <div className="flex items-start justify-between gap-3">
              <div className="grid size-12 place-items-center rounded-2xl bg-[#edf3ff] text-[#315d8f]">
                <Wrench size={20} />
              </div>
              <StatusBadge label={ticket.priority} />
            </div>
            <h2 className="mt-4 text-xl font-semibold tracking-tight">{ticket.title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#667065]">
              {ticket.property} / Unit {ticket.unit} / {ticket.status}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-[#f7f3ea] p-3">
                <CalendarClock size={16} />
                <p className="mt-2 font-bold">{ticket.age}</p>
              </div>
              <div className="rounded-2xl bg-[#f7f3ea] p-3">
                <ReceiptText size={16} />
                <p className="mt-2 font-bold">{ticket.estimate}</p>
              </div>
            </div>
          </Panel>
        ))}
      </div>

      <Panel>
        <SectionHeading title="Repair timeline" subtitle="A clean view of what has happened so far." />
        <div className="grid gap-3 md:grid-cols-4">
          {["Request received", "Manager reviewed", "Contractor assigned", "Resolution tracked"].map((step, index) => (
            <div key={step} className="rounded-[24px] bg-[#f7f3ea] p-4">
              <p className="text-xs font-bold text-[#7a8276]">Step {index + 1}</p>
              <p className="mt-2 font-bold">{step}</p>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
