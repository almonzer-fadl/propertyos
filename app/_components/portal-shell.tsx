"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Bell, Building2, Search } from "lucide-react";

type PortalNavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

export function PortalShell({
  appName,
  appType,
  baseHref,
  nav,
  children,
  accent = "green",
}: {
  appName: string;
  appType: string;
  baseHref: string;
  nav: PortalNavItem[];
  children: React.ReactNode;
  accent?: "green" | "blue";
}) {
  const pathname = usePathname();
  const isBlue = accent === "blue";
  const bg = isBlue ? "bg-[#eef3f7]" : "bg-[#eef4ed]";
  const glow = isBlue
    ? "bg-[radial-gradient(circle_at_top_left,#dceaff_0,#eef3f7_42%,#f8f3ea_100%)]"
    : "bg-[radial-gradient(circle_at_top_left,#dff4de_0,#eef4ed_42%,#f8f3ea_100%)]";

  return (
    <div className={`min-h-screen ${bg} text-[#151612]`}>
      <div className={`fixed inset-0 -z-10 ${glow}`} />
      <div className="mx-auto grid min-h-screen w-full max-w-[1500px] lg:grid-cols-[264px_1fr]">
        <aside className="sticky top-0 hidden h-screen p-4 lg:block">
          <div className="flex h-full flex-col rounded-[34px] border border-white/80 bg-white/76 p-4 shadow-[0_18px_70px_rgba(61,67,50,0.12)] ring-1 ring-[#dfe5d8]/70 backdrop-blur">
            <Link href={baseHref} className="flex items-center gap-3 rounded-[24px] p-2">
              <div className="grid size-12 place-items-center rounded-[20px] bg-[#151612] overflow-hidden p-1.5">
                <img src="/vantlaunch-icon.png" alt="VantLaunch" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="font-bold tracking-tight">{appName}</p>
                <p className="text-xs font-medium text-[#7a8276]">{appType}</p>
              </div>
            </Link>

            <div className="mt-5 flex items-center gap-2 rounded-[22px] bg-[#f5f1e7] px-3 py-3 text-sm text-[#7a8276]">
              <Search size={17} />
              <span>Search this portal</span>
            </div>

            <nav className="mt-5 space-y-1.5">
              {nav.map((item) => {
                const active = item.href === baseHref ? pathname === item.href : pathname.startsWith(item.href);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-[20px] px-3 py-3 text-sm font-bold transition duration-300 ${
                      active
                        ? "bg-[#151612] text-white shadow-[0_12px_28px_rgba(21,22,18,0.16)]"
                        : "text-[#525b4d] hover:bg-white hover:text-[#151612]"
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/dashboard"
              className="mt-auto flex items-center gap-3 rounded-[24px] bg-[#151612] p-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5"
            >
              <ArrowLeft size={17} />
              Company OS
            </Link>
          </div>
        </aside>

        <div className="min-w-0 pb-24 lg:pb-0">
          <header className="sticky top-0 z-20 border-b border-white/70 bg-white/60 px-4 py-3 backdrop-blur lg:hidden">
            <div className="flex items-center justify-between">
              <Link href={baseHref} className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-2xl bg-[#151612] overflow-hidden p-1.5">
                  <img src="/vantlaunch-icon.png" alt="VantLaunch" className="h-full w-full object-contain" />
                </div>
                <div>
                  <p className="font-bold">{appName}</p>
                  <p className="text-xs text-[#7a8276]">{appType}</p>
                </div>
              </Link>
              <div className="flex gap-2">
                <Link href="/dashboard" className="grid size-11 place-items-center rounded-2xl bg-white shadow-sm" aria-label="Company OS">
                  <Building2 size={18} />
                </Link>
                <Link href={`${baseHref}/messages`} className="grid size-11 place-items-center rounded-2xl bg-white shadow-sm" aria-label="Messages">
                  <Bell size={18} />
                </Link>
              </div>
            </div>
          </header>

          <main className="px-4 py-5 md:px-7 lg:px-4">
            <div className="mx-auto max-w-[1180px]">{children}</div>
          </main>
        </div>
      </div>

      <nav className="fixed bottom-3 left-3 right-3 z-30 rounded-[28px] border border-white/80 bg-white/88 p-2 shadow-[0_18px_50px_rgba(52,64,45,0.18)] ring-1 ring-[#dfe5d8]/70 backdrop-blur lg:hidden">
        <div className="grid grid-cols-5 gap-1">
          {nav.map((item) => {
            const active = item.href === baseHref ? pathname === item.href : pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 rounded-[22px] px-2 py-2 text-[11px] font-bold transition duration-300 ${
                  active ? "bg-[#151612] text-white" : "text-[#6d7569]"
                }`}
              >
                <Icon size={18} />
                <span className="max-w-full truncate">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
