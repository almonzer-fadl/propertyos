"use client";

import { MessageSquareText, Send } from "lucide-react";
import { useDemo } from "../../../_components/demo-context";
import { PageHeader, Panel, SectionHeading, StatusBadge } from "../../../_components/ui";

export default function OwnerMessagesPage() {
  const { messages, markMessageRead, showToast, addActivity } = useDemo();
  const ownerMsgs = messages.filter((m) => m.kind === "owner");

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Owner app / Messages"
        title="Owner communication stays attached to the portfolio."
        description="Updates and questions live next to the property context instead of disappearing into email threads."
      />

      <div className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
        <Panel>
          <SectionHeading title="Inbox" subtitle="Recent owner-visible conversations." />
          <div className="space-y-3">
            {ownerMsgs.map((message) => (
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
          <SectionHeading title="Message preview" subtitle="Ask a question without leaving the portal." />
          <div className="rounded-[28px] bg-[#151612] p-5 text-white">
            <div className="flex items-center gap-3">
              <div className="grid size-12 place-items-center rounded-2xl bg-white/10">
                <MessageSquareText size={20} />
              </div>
              <div>
                <p className="font-bold">Unit 12B plumbing update</p>
                <p className="text-sm text-white/58">Northline Property Management</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/70">
              The leak has been triaged and we are assigning a plumber. We will update this thread
              once the visit time is confirmed.
            </p>
          </div>
          <button
            onClick={() => {
              showToast("Reply sent to Northline PM");
              addActivity("Owner replied to plumbing update thread.");
            }}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-[22px] bg-[#151612] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#2a2c24]"
          >
            <Send size={17} />
            Send reply
          </button>
        </Panel>
      </div>
    </div>
  );
}
