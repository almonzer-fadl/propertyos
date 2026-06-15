"use client";

import { useDemo } from "./demo-context";

export function Toast() {
  const { toast } = useDemo();

  if (!toast) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-24 z-50 flex justify-center lg:bottom-8">
      <div className="soft-rise rounded-full border border-[#dfe5d8]/80 bg-[#151612] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(21,22,18,0.22)]">
        {toast}
      </div>
    </div>
  );
}
