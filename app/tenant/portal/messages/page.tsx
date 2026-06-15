"use client";

import { MessageSquareText, Send } from "lucide-react";
import { useDemo } from "../../../_components/demo-context";
import { PageHeader, Panel, SectionHeading, StatusBadge } from "../../../_components/ui";

export default function TenantMessagesPage() {
  const { messages, markMessageRead, showToast, addActivity } = useDemo();
  const tenantMsgs = messages.filter((m) => m.kind === "tenant");

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Tenant app / Messages"
        title="Manager updates and contractor schedules. Not lost in WhatsApp."
        description="See every reply from your property manager, every contractor visit time, and every building notice in one thread — searchable and permanent."
      />

      <div className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
        <Panel>
          <SectionHeading title="Inbox" subtitle="Recent tenant communication." />
          <div className="space-y-3">
            {tenantMsgs.map((message) => (
              <button
                key={message.id}
                onClick={() => markMessageRead(message.id)}
                className="w-full rounded-[24px] bg-[#f7f3ea] p-4 text-left transition hover:bg-white"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold">{message.from}</p>
                    <p className="mt-1 text-sm text-[#667065]">{message.subject}</p>
                  </div>
                  {message.unread ? <StatusBadge label="New" /> : null}
                </div>
                <p className="mt-3 text-xs font-bold text-[#7a8276]">{message.time}</p>
              </button>
            ))}
          </div>
        </Panel>

        <Panel>
          <SectionHeading title="Thread preview" subtitle="A tenant-safe message thread." />
          <div className="rounded-[28px] bg-[#151612] p-5 text-white">
            <div className="flex items-center gap-3">
              <div className="grid size-12 place-items-center rounded-2xl bg-white/10">
                <MessageSquareText size={20} />
              </div>
              <div>
                <p className="font-bold">Plumbing request received</p>
                <p className="text-sm text-white/58">Maya, Property Manager</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/70">
              Thanks Priya. We received your photos and are assigning a plumber. Please keep the
              cabinet clear after 2 PM.
            </p>
          </div>
          <button
            onClick={() => {
              showToast("Reply sent to Maya");
              addActivity("Tenant replied to plumbing request thread.");
            }}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-[22px] bg-[#151612] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#2a2c24]"
          >
            <Send size={17} />
            Reply
          </button>
        </Panel>
      </div>
    </div>
  );
}
