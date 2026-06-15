import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  KeyRound,
  MessageSquareText,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

const modules = [
  {
    title: "Property manager dashboard",
    description: "One screen for units, open work, urgent issues, owners, tenants, and reporting.",
    icon: BarChart3,
  },
  {
    title: "Maintenance tickets",
    description: "Requests, photos, priorities, contractor assignment, work orders, and status updates.",
    icon: Wrench,
  },
  {
    title: "Tenant portal",
    description: "Tenants submit requests, attach photos, check status, and stop chasing updates by phone.",
    icon: MessageSquareText,
  },
  {
    title: "Owner portal",
    description: "Owners see updates, documents, maintenance visibility, and owner-ready reporting.",
    icon: ShieldCheck,
  },
  {
    title: "Property records",
    description: "Units, leases, documents, contacts, contractors, and history organized around each property.",
    icon: Building2,
  },
  {
    title: "Role-based access",
    description: "Separate views for managers, staff, tenants, owners, and contractors.",
    icon: KeyRound,
  },
];

const workflow = [
  "Tenant submits a maintenance request with photos.",
  "Manager triages priority, property, unit, tenant, and contractor.",
  "Contractor receives clear work context instead of a messy message thread.",
  "Owner sees the right update without getting pulled into every detail.",
  "Reports and documents stay attached to the property record.",
];

const tiers = [
  {
    name: "Launch",
    price: "$1,500-$3,000",
    retainer: "$200-$500/mo",
    subtitle: "Ready-to-Deploy PropertyOS",
    bestFor: "Small property managers who want a working system quickly.",
    features: [
      "Branding",
      "Tenant portal",
      "Owner portal",
      "Maintenance requests",
      "Work orders",
      "Property records",
      "Deployment",
      "Training",
    ],
    message: "Live in weeks, not months.",
  },
  {
    name: "Custom",
    price: "$3,000-$6,000",
    retainer: "$400-$800/mo",
    subtitle: "PropertyOS + Workflow Customization",
    bestFor: "Property businesses with unique processes and workflows.",
    features: [
      "Everything in Launch",
      "Custom workflows",
      "Custom reports",
      "Staff roles and permissions",
      "Business-specific processes",
    ],
    message: "Keep the proven core. Customize the workflow.",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$6,000-$12,000+",
    retainer: "$800-$1,500/mo",
    subtitle: "PropertyOS as Your Operating System",
    bestFor: "Property teams replacing multiple tools with one owned platform.",
    features: [
      "Everything in Custom",
      "Advanced automations",
      "Integrations",
      "Priority support and updates",
      "Dedicated roadmap",
    ],
    message: "Replace scattered tools with one operating system.",
  },
];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen bg-[#f3efe5] text-[#151612]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#e2f1d8_0,#f3efe5_36%,#f7f3ea_100%)]" />

      <header className="sticky top-0 z-40 border-b border-white/70 bg-[#f3efe5]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid size-10 place-items-center overflow-hidden rounded-2xl bg-[#151612] p-1.5">
              <Image
                src="/brand/icon.PNG"
                alt="VantLaunch"
                width={36}
                height={36}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold leading-none tracking-tight">PropertyOS</p>
              <p className="mt-1 text-xs font-semibold text-[#667065]">by VantLaunch</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#667065] md:flex">
            <Link href="#system" className="hover:text-[#151612]">System</Link>
            <Link href="#demo" className="hover:text-[#151612]">Demo</Link>
            <Link href="#pricing" className="hover:text-[#151612]">Pricing</Link>
            <Link href="https://vantlaunch.com" className="hover:text-[#151612]">VantLaunch</Link>
          </nav>

          <Link
            href="/dashboard"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#151612] px-4 text-sm font-bold text-white transition hover:bg-[#2a2c24]"
          >
            Watch demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-[#cfd8c7] bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#5f6f52]">
              Property management operating system
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">
              Start from a proven property management system instead of building from zero.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#667065] sm:text-lg">
              PropertyOS already exists. We set it up, brand it, configure it, customize it,
              deploy it, and support it so your team can manage tenants, owners, maintenance,
              work orders, and property records in one place.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#151612] px-6 text-sm font-bold text-white shadow-[0_16px_36px_rgba(21,22,18,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2a2c24]"
              >
                Watch the demo
                <ArrowRight size={17} />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#cfd8c7] bg-white/80 px-6 text-sm font-bold text-[#151612] transition hover:-translate-y-0.5 hover:bg-white"
              >
                View pricing
              </Link>
            </div>
            <div className="mt-8 grid gap-3 text-sm font-semibold text-[#3f453b] sm:grid-cols-3">
              {["Ready system", "Live in weeks", "Customized workflow"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl bg-white/70 px-4 py-3">
                  <CheckCircle2 size={17} className="text-[#2d6b3d]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-6 rounded-[42px] bg-[#0f766e]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/82 p-3 shadow-[0_28px_90px_rgba(52,64,45,0.16)] ring-1 ring-[#dfe5d8]/70 backdrop-blur sm:p-4">
              <Image
                src="/Screenshot 2026-06-15 at 20.57.56.png"
                alt="PropertyOS manager dashboard"
                width={2802}
                height={1594}
                priority
                className="rounded-[24px] border border-[#dfe5d8] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="system" className="border-y border-white/70 bg-[#fbfaf5]/55 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5f6f52]">What it replaces</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              A product first. Custom software second.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#667065]">
              You are not paying us to invent the basics from scratch. PropertyOS already includes
              the core workflows. Your project is setup, branding, configuration, customization,
              deployment, training, and support.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <div key={module.title} className="rounded-[28px] border border-white/70 bg-white/82 p-5 shadow-[0_18px_50px_rgba(52,64,45,0.08)] ring-1 ring-[#dfe5d8]/70 backdrop-blur">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#f1eadc] text-[#5f6f52]">
                  <module.icon size={21} />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{module.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#667065]">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5f6f52]">Live demo</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              See the system before deciding.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#667065]">
              Click through the manager dashboard, tenant request flow, owner portal,
              maintenance queue, documents, and reporting before you pay for anything.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <LinkButton href="/dashboard">Manager demo</LinkButton>
              <LinkButton href="/tenant/portal">Tenant portal</LinkButton>
              <LinkButton href="/owner/portal">Owner portal</LinkButton>
              <LinkButton href="/dashboard/maintenance">Maintenance flow</LinkButton>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/70 bg-white/82 p-5 shadow-[0_22px_70px_rgba(52,64,45,0.1)] ring-1 ring-[#dfe5d8]/70 backdrop-blur sm:p-7">
            <div className="space-y-4">
              {workflow.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-[24px] bg-[#f7f3ea] p-4">
                  <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white text-sm font-bold text-[#5f6f52] shadow-sm">
                    {index + 1}
                  </div>
                  <p className="self-center text-sm font-semibold leading-6 text-[#3f453b]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-white/70 bg-[#f7f3ea]/72 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5f6f52]">Pricing</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Lower-risk pricing for first PropertyOS clients.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#667065]">
              The goal is to launch real clients, build case studies, and earn testimonials.
              Start with the working product, then customize only what your business actually needs.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-[30px] border bg-white/82 p-6 shadow-[0_20px_60px_rgba(52,64,45,0.08)] backdrop-blur ${
                  tier.featured ? "border-[#5f6f52] ring-1 ring-[#5f6f52]/20" : "border-white/70 ring-1 ring-[#dfe5d8]/70"
                }`}
              >
                {tier.featured ? (
                  <span className="absolute -top-3 left-6 rounded-full bg-[#151612] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    Most useful
                  </span>
                ) : null}
                <h3 className="text-2xl font-semibold tracking-tight">{tier.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#667065]">{tier.subtitle}</p>
                <div className="mt-6">
                  <p className="text-3xl font-semibold tracking-tight">{tier.price}</p>
                  <p className="mt-1 text-sm font-semibold text-[#5f6f52]">{tier.retainer} retainer</p>
                </div>
                <p className="mt-5 text-sm leading-6 text-[#667065]">{tier.bestFor}</p>
                <p className="mt-3 rounded-2xl bg-[#f7f3ea] px-4 py-3 text-sm font-bold leading-6 text-[#3f453b]">
                  {tier.message}
                </p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-[#dfe5d8] pt-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm font-medium leading-6 text-[#3f453b]">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#2d6b3d]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="mailto:vantlaunch@gmail.com?subject=PropertyOS demo"
                  className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition ${
                    tier.featured
                      ? "bg-[#151612] text-white hover:bg-[#2a2c24]"
                      : "border border-[#cfd8c7] bg-white text-[#151612] hover:bg-[#f7f3ea]"
                  }`}
                >
                  Book a demo
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl rounded-[34px] bg-[#151612] px-6 py-12 text-center text-white shadow-[0_26px_80px_rgba(21,22,18,0.22)] sm:px-10 sm:py-16">
          <Users className="mx-auto text-[#8fd198]" size={34} />
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Want to see if PropertyOS fits your workflow?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/70">
            Start with the live demo. If the core system makes sense, we map what needs to be
            branded, configured, customized, and deployed for your team.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#151612] transition hover:bg-[#f7f3ea]"
            >
              Watch the demo
              <ArrowRight size={16} />
            </Link>
            <Link
              href="https://vantlaunch.com"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Visit VantLaunch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-between gap-3 rounded-full border border-[#d8dfd1] bg-white/80 px-5 text-sm font-bold text-[#151612] transition hover:-translate-y-0.5 hover:bg-white"
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
