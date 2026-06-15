"use client";

import Link from "next/link";
import { Camera, ChevronRight, FileText, Home, MessageCircle, Wrench } from "lucide-react";
import { useDemo } from "../../_components/demo-context";
import { PageHeader, Panel, SectionHeading, StatusBadge } from "../../_components/ui";
import { tenantDocuments } from "../../_data/propertyos";

export default function TenantPortalPage() {
  const { tenantRequests, messages, unreadTenantCount } = useDemo();
  const tenantMsgs = messages.filter((m) => m.kind === "tenant");

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Tenant app"
        title="Something broken? Submit it in 30 seconds. Track it until it's fixed."
        description="Snap a photo, pick a category, tell us when to enter, and track the maintenance status without chasing the property manager."
        actionLabel="New request"
        actionHref="/tenant/portal/requests"
      />

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Current home", "Marina Heights 12B", Home],
          ["Open requests", `${tenantRequests.length} active`, Wrench],
          ["Unread messages", `${unreadTenantCount} new`, MessageCircle],
        ].map(([label, value, Icon]) => (
          <div key={label as string} className="rounded-[26px] bg-[#f3efe5] p-5 transition duration-300 hover:-translate-y-0.5">
            <div className="grid size-11 place-items-center rounded-2xl bg-white text-[#2d6b3d]">
              <Icon size={19} />
            </div>
            <p className="mt-4 text-xs font-bold text-[#7a8276]">{label as string}</p>
            <p className="mt-2 text-xl font-semibold">{value as string}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <Panel>
          <SectionHeading title="Start a maintenance request" subtitle="Structured intake means the manager gets useful details immediately." />
          <div className="rounded-[28px] bg-white p-4 shadow-sm">
            <div className="grid grid-cols-2 gap-3">
              {["Plumbing", "Kitchen", "Urgent", "After 2 PM"].map((item) => (
                <Link key={item} href="/tenant/portal/requests" className="min-h-12 rounded-2xl bg-[#f3efe5] px-3 py-3 text-sm font-bold text-[#3f453b] transition hover:bg-[#ece6d9]">
                  {item}
                </Link>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-dashed border-[#cfd8c7] bg-[#fbfaf5] p-4">
              <div className="flex items-center gap-2 font-bold">
                <Camera size={17} />
                4 photos uploaded
              </div>
              <p className="mt-2 text-sm leading-6 text-[#667065]">
                Water is leaking under the kitchen sink and spreading into the cabinet.
              </p>
            </div>
            <Link href="/tenant/portal/requests" className="mt-4 flex w-full items-center justify-center rounded-2xl bg-[#151612] px-4 py-3 text-sm font-bold text-white">
              Submit request
            </Link>
          </div>
        </Panel>

        <Panel>
          <SectionHeading title="Request status" subtitle="No need to text the manager for basic updates." />
          <div className="space-y-3">
            {tenantRequests.slice(0, 4).map((request) => (
              <Link key={request.id} href="/tenant/portal/requests" className="flex items-center gap-3 rounded-[24px] bg-[#f7f3ea] p-4">
                <div className="grid size-11 place-items-center rounded-2xl bg-white text-[#4e74a5]">
                  <Wrench size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold">{request.title}</p>
                  <p className="text-sm text-[#667065]">{request.status} / {request.time}</p>
                </div>
                <StatusBadge label={request.priority} />
              </Link>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <Panel>
          <SectionHeading title="Documents" subtitle="Lease, inspection, and building documents." />
          <div className="space-y-3">
            {tenantDocuments.slice(0, 3).map((document) => (
              <Link key={document.title} href="/tenant/portal/documents" className="flex items-center gap-3 rounded-[24px] bg-[#f7f3ea] p-4">
                <FileText size={18} />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold">{document.title}</p>
                  <p className="text-sm text-[#667065]">{document.updated}</p>
                </div>
                <ChevronRight size={17} />
              </Link>
            ))}
          </div>
        </Panel>

        <Panel>
          <SectionHeading title="Messages" subtitle="Manager and contractor updates in one thread." />
          <div className="space-y-3">
            {tenantMsgs.slice(0, 3).map((message) => (
              <Link key={message.id} href="/tenant/portal/messages" className="flex items-center gap-3 rounded-[24px] bg-[#f7f3ea] p-4">
                <MessageCircle size={18} />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold">{message.subject}</p>
                  <p className="text-sm text-[#667065]">{message.from}</p>
                </div>
                {message.unread ? <StatusBadge label="New" /> : null}
              </Link>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
