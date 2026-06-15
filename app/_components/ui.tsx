import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, Clock3, UploadCloud } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="soft-rise flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5f6f52]">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-balance text-[2rem] font-semibold leading-[1.04] tracking-tight text-[#151612] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-[0.95rem] leading-7 text-[#667065] sm:text-base">
          {description}
        </p>
      </div>
      {actionLabel && actionHref ? (
        <Link
          href={actionHref}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-[#151612] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(21,22,18,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2a2c24]"
        >
          {actionLabel}
          <ArrowRight size={16} />
        </Link>
      ) : null}
    </div>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`soft-rise-delay min-w-0 rounded-[24px] border border-white/70 bg-white/82 p-4 shadow-[0_18px_50px_rgba(52,64,45,0.08)] ring-1 ring-[#dfe5d8]/70 backdrop-blur sm:rounded-[28px] md:p-6 ${className}`}
    >
      {children}
    </section>
  );
}

export function Metric({
  label,
  value,
  change,
  tone,
}: {
  label: string;
  value: string;
  change: string;
  tone: string;
}) {
  const tones: Record<string, string> = {
    blue: "from-[#d9ebff] to-[#f7fbff] text-[#24547e]",
    green: "from-[#dff6df] to-[#f8fff6] text-[#2d6b3d]",
    coral: "from-[#ffe1d6] to-[#fff8f4] text-[#985137]",
    violet: "from-[#e9e1ff] to-[#fbf8ff] text-[#654c9d]",
  };

  return (
    <div className={`min-h-[132px] rounded-[24px] bg-gradient-to-br p-5 transition duration-300 hover:-translate-y-0.5 ${tones[tone]}`}>
      <p className="text-sm font-medium opacity-80">{label}</p>
      <div className="mt-5 flex items-end justify-between gap-4">
        <p className="text-3xl font-semibold tracking-tight text-[#151612] sm:text-4xl">{value}</p>
        <p className="text-right text-xs font-bold leading-5">{change}</p>
      </div>
    </div>
  );
}

export function StatusBadge({ label }: { label: string }) {
  const tone =
    label === "Urgent" || label === "Attention" || label === "Needs update"
      ? "bg-[#fff0ea] text-[#a3482e] ring-[#ffd2c2]"
      : label === "High" || label === "Review" || label === "Maintenance open"
        ? "bg-[#fff8dc] text-[#8b6b15] ring-[#f6df88]"
        : label === "Stable" || label === "Resolved" || label === "Ready" || label === "Normal"
          ? "bg-[#eaf8e8] text-[#2d6b3d] ring-[#bde5b9]"
          : "bg-[#edf3ff] text-[#315d8f] ring-[#c9dbf8]";

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ring-1 ${tone}`}>
      {label}
    </span>
  );
}

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-5 flex items-start justify-between gap-4">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-[#151612]">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm leading-6 text-[#667065]">{subtitle}</p> : null}
      </div>
    </div>
  );
}

export function SoftButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#d8dfd1] bg-white/80 px-4 py-2.5 text-sm font-semibold text-[#2b3028] transition duration-300 hover:-translate-y-0.5 hover:border-[#bfcbb5] hover:bg-white"
    >
      {children}
    </Link>
  );
}

export function PhonePreview() {
  return (
    <div className="mx-auto w-full max-w-[360px] rounded-[42px] border-[10px] border-[#171815] bg-[#171815] shadow-[0_30px_80px_rgba(31,37,26,0.25)]">
      <div className="rounded-[30px] bg-[#f7f3ea] p-4">
        <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-[#171815]/30" />
        <div className="rounded-[24px] bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#78806f]">
                Tenant
              </p>
              <h3 className="mt-1 text-xl font-semibold text-[#151612]">New request</h3>
            </div>
            <div className="grid size-11 place-items-center rounded-2xl bg-[#dff6df] text-[#2d6b3d]">
              <Camera size={20} />
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {["Plumbing", "Kitchen", "Urgent", "Enter after 2 PM"].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f4f1e8] px-4 py-3 text-sm font-semibold text-[#3f453b]">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-dashed border-[#cfd8c7] bg-[#fbfaf5] p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#151612]">
              <UploadCloud size={16} />
              4 photos uploaded
            </div>
            <p className="text-xs leading-5 text-[#667065]">
              Water leaking under kitchen sink and spreading into cabinet.
            </p>
          </div>
          <button className="mt-4 w-full rounded-2xl bg-[#151612] px-4 py-3 text-sm font-bold text-white">
            Submit request
          </button>
        </div>
      </div>
    </div>
  );
}

export function Timeline({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={`${item}-${index}`} className="flex gap-3">
          <div className="grid size-9 shrink-0 place-items-center rounded-2xl bg-[#f1eadc] text-[#6f5e35]">
            {index < 2 ? <CheckCircle2 size={17} /> : <Clock3 size={17} />}
          </div>
          <div>
            <p className="text-sm font-semibold leading-5 text-[#2f352d]">{item}</p>
            <p className="mt-1 text-xs text-[#7a8276]">{index + 8}:1{index} AM</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function MiniBars({ values }: { values: number[] }) {
  return (
    <div className="flex h-44 items-end gap-2 rounded-[24px] bg-[#f5f1e7] p-4 sm:h-48">
      {values.map((value, index) => (
        <div key={`${value}-${index}`} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
          <div
            className={`min-h-5 w-full rounded-full ${
              index === 5 ? "bg-[#4e74a5]" : index === 3 ? "bg-[#dd8d69]" : "bg-[#bfd2b8]"
            }`}
            style={{ height: `${value}%` }}
          />
          <span className="text-[10px] font-bold text-[#7a8276]">W{index + 1}</span>
        </div>
      ))}
    </div>
  );
}

export function EmptyStateAction({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex min-h-24 items-center justify-between rounded-[24px] border border-dashed border-[#cad5c1] bg-[#fbfaf5] p-5 text-left transition duration-300 hover:-translate-y-0.5 hover:border-[#9eb191] hover:bg-white"
    >
      <div>
        <p className="text-sm font-semibold text-[#151612]">{label}</p>
        <p className="mt-1 text-xs leading-5 text-[#667065]">Demo action button</p>
      </div>
      <ArrowRight size={18} />
    </Link>
  );
}
