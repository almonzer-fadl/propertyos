"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Command, Search } from "lucide-react";
import { navItems, portalItems } from "../_data/propertyos";
import { useDemo } from "./demo-context";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { tickets, unreadOwnerCount, unreadTenantCount } = useDemo();
  const mobileItems = [...navItems.slice(0, 4), portalItems[0]];

  const liveCounts: Record<string, string> = {
    "/dashboard/maintenance": String(tickets.filter((t) => t.status !== "Resolved").length),
    "/tenet/portal": String(unreadTenantCount),
    "/owner/portal": String(unreadOwnerCount),
  };

  return (
    <div className="min-h-screen bg-[#f3efe5] text-[#151612]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#e2f1d8_0,#f3efe5_36%,#f7f3ea_100%)]" />
      <div className="mx-auto flex min-h-screen w-full max-w-[1680px]">
        <aside className="sticky top-0 hidden h-screen w-[280px] shrink-0 p-4 lg:block">
          <div className="flex h-full flex-col rounded-[32px] border border-white/80 bg-white/72 p-4 shadow-[0_18px_70px_rgba(61,67,50,0.12)] ring-1 ring-[#dfe5d8]/70 backdrop-blur">
            <Link href="/dashboard" className="flex items-center gap-3 rounded-[24px] p-2">
              <div className="grid size-12 place-items-center rounded-[20px] bg-[#151612] overflow-hidden p-1.5">
                <img src="/vantlaunch-icon.png" alt="VantLaunch" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-base font-bold tracking-tight">PropertyOS</p>
                <p className="text-xs font-medium text-[#7a8276]">by VantLaunch</p>
              </div>
            </Link>

            <div className="mt-5 flex items-center gap-2 rounded-[22px] bg-[#f5f1e7] px-3 py-3 text-sm text-[#7a8276]">
              <Search size={17} />
              <span>Search tenant, unit, ticket</span>
              <Command className="ml-auto" size={15} />
            </div>

            <nav className="mt-5 space-y-1.5">
              {navItems.map((item) => {
                const active =
                  item.href === "/dashboard"
                    ? pathname === "/dashboard"
                    : pathname.startsWith(item.href);
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
                    <span>{item.label}</span>
                    {(item.count || liveCounts[item.href]) ? (
                      <span
                        className={`ml-auto rounded-full px-2 py-0.5 text-xs ${
                          active ? "bg-white/18 text-white" : "bg-[#fff0ea] text-[#a3482e]"
                        }`}
                      >
                        {liveCounts[item.href] || item.count}
                      </span>
                    ) : null}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 border-t border-[#e3e6dc] pt-4">
              <p className="px-3 text-xs font-bold uppercase tracking-[0.16em] text-[#8b927f]">
                Portals
              </p>
              <div className="mt-2 space-y-1.5">
                {portalItems.map((item) => {
                  const active = pathname.startsWith(item.href);
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-[20px] px-3 py-3 text-sm font-bold transition ${
                        active
                          ? "bg-[#dff6df] text-[#244f2f]"
                          : "text-[#525b4d] hover:bg-white hover:text-[#151612]"
                      }`}
                    >
                      <Icon size={18} />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </aside>

        <div className="min-w-0 flex-1 pb-24 lg:pb-0">
          <header className="sticky top-0 z-20 border-b border-white/70 bg-[#f3efe5]/82 px-4 py-3 backdrop-blur md:px-7 lg:hidden">
            <div className="flex items-center justify-between gap-3">
              <Link href="/dashboard" className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-2xl bg-[#151612] overflow-hidden p-1.5">
                  <img src="/vantlaunch-icon.png" alt="VantLaunch" className="h-full w-full object-contain" />
                </div>
                <div>
                  <p className="font-bold">PropertyOS</p>
                  <p className="text-xs text-[#7a8276]">Company OS</p>
                </div>
              </Link>
              <Link
                href="/dashboard/maintenance"
                className="grid size-11 place-items-center rounded-2xl bg-white text-[#151612] shadow-sm"
                aria-label="Open notifications"
              >
                <Bell size={18} />
              </Link>
            </div>
          </header>

          <main className="px-3 py-4 md:px-7 lg:px-3 lg:py-4">
            <div className="mx-auto max-w-[1360px] rounded-[26px] border border-white/60 bg-[#fbfaf5]/68 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:rounded-[34px] md:p-5 lg:min-h-[calc(100vh-2rem)]">
              {children}
            </div>
          </main>
        </div>
      </div>

      <nav className="fixed bottom-3 left-3 right-3 z-30 rounded-[28px] border border-white/80 bg-white/88 p-2 shadow-[0_18px_50px_rgba(52,64,45,0.18)] ring-1 ring-[#dfe5d8]/70 backdrop-blur lg:hidden">
        <div className="grid grid-cols-5 gap-1">
          {mobileItems.map((item) => {
            const active =
              item.href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 rounded-[22px] px-2 py-2 text-[11px] font-bold transition ${
                  active ? "bg-[#151612] text-white" : "text-[#6d7569]"
                }`}
              >
                <Icon size={18} />
                <span className="max-w-full truncate">{item.label.replace(" App", "")}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
