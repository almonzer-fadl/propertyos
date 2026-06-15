import { AppShell } from "../_components/app-shell";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
