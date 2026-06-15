"use client";

import { useState } from "react";
import { Camera, CheckCircle2, Clock3, Wrench } from "lucide-react";
import { useDemo } from "../../../_components/demo-context";
import { PageHeader, Panel, SectionHeading, StatusBadge } from "../../../_components/ui";

export default function TenantRequestsPage() {
  const { tenantRequests, addTenantRequest } = useDemo();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Plumbing");
  const [priority, setPriority] = useState("Urgent");
  const [entry, setEntry] = useState("After 2 PM");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!title.trim()) return;
    addTenantRequest(title.trim(), "", priority);
    setTitle("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

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
            {[
              { label: "Category: Plumbing", value: "Plumbing" },
              { label: "Category: Electrical", value: "Electrical" },
              { label: "Priority: Urgent", value: "Urgent" },
              { label: "Priority: High", value: "High" },
              { label: "Entry: After 2 PM", value: "After 2 PM" },
              { label: "Entry: Doorman only", value: "Doorman only" },
            ].map(({ label, value }) => {
              const isCategory = label.startsWith("Category");
              const isPriority = label.startsWith("Priority");
              const isEntry = label.startsWith("Entry");
              const active = isCategory ? category === value : isPriority ? priority === value : entry === value;
              return (
                <button
                  key={label}
                  onClick={() => {
                    if (isCategory) setCategory(value);
                    else if (isPriority) setPriority(value);
                    else setEntry(value);
                  }}
                  className={`min-h-14 rounded-2xl px-3 py-3 text-left text-sm font-bold transition ${
                    active
                      ? "bg-[#e8f5e4] text-[#2d6b3d] ring-1 ring-[#bde5b9]"
                      : "bg-[#f7f3ea] text-[#3f453b] hover:bg-[#ece6d9]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <input
            type="text"
            placeholder="Describe the issue (e.g. Water leaking under kitchen sink...)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-4 w-full rounded-2xl border border-dashed border-[#cfd8c7] bg-[#fbfaf5] px-4 py-4 text-sm text-[#151612] placeholder:text-[#a3aca0] outline-none focus:border-[#9eb191]"
          />

          <div className="mt-4 rounded-2xl border border-dashed border-[#cfd8c7] bg-[#fbfaf5] p-4">
            <div className="flex items-center gap-2 font-bold">
              <Camera size={17} />
              Photos
            </div>
            <p className="mt-2 text-sm text-[#667065]">4 images attached to help the manager triage faster.</p>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-4 w-full rounded-2xl bg-[#151612] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#2a2c24]"
          >
            {submitted ? "Request submitted!" : "Submit request"}
          </button>
        </Panel>

        <Panel>
          <SectionHeading title="My requests" subtitle="Status, priority, and timing for every request." />
          <div className="space-y-3">
            {tenantRequests.map((request) => (
              <div key={request.id} className="rounded-[24px] bg-[#f7f3ea] p-4">
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
