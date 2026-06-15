import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  FileText,
  Home,
  KeyRound,
  MessageSquareText,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "Maintenance", href: "/dashboard/maintenance", icon: Wrench, count: "27" },
  { label: "Properties", href: "/dashboard/properties", icon: Building2 },
  { label: "Tenants", href: "/dashboard/tenants", icon: Users },
  { label: "Owners", href: "/dashboard/owners", icon: KeyRound },
  { label: "Contractors", href: "/dashboard/contractors", icon: BriefcaseBusiness },
  { label: "Documents", href: "/dashboard/documents", icon: FileText },
  { label: "Reports", href: "/dashboard/reports", icon: BarChart3 },
];

export const portalItems = [
  { label: "Tenant App", href: "/tenet/portal", icon: MessageSquareText },
  { label: "Owner App", href: "/owner/portal", icon: ShieldCheck },
];

export const metrics = [
  { label: "Managed units", value: "204", change: "+18 this quarter", tone: "blue" },
  { label: "Occupancy", value: "91%", change: "186 active leases", tone: "green" },
  { label: "Open work orders", value: "27", change: "5 urgent today", tone: "coral" },
  { label: "Resolution time", value: "2.8d", change: "18% faster", tone: "violet" },
];

export const tickets = [
  {
    id: "MNT-1048",
    title: "Kitchen sink leak",
    property: "Marina Heights",
    unit: "12B",
    tenant: "Priya Nair",
    priority: "Urgent",
    status: "New",
    age: "42 min",
    contractor: "Unassigned",
    photos: 4,
    estimate: "$180-$260",
    ownerVisible: false,
  },
  {
    id: "MNT-1042",
    title: "AC not cooling",
    property: "Baystone Apartments",
    unit: "7A",
    tenant: "Jason Reed",
    priority: "High",
    status: "Assigned",
    age: "1d 6h",
    contractor: "BrightAir HVAC",
    photos: 2,
    estimate: "$320-$480",
    ownerVisible: true,
  },
  {
    id: "MNT-1039",
    title: "Gate remote failure",
    property: "Greenview Residences",
    unit: "Lobby",
    tenant: "Building access",
    priority: "Medium",
    status: "In Progress",
    age: "2d",
    contractor: "UrbanLock Security",
    photos: 1,
    estimate: "$95-$140",
    ownerVisible: true,
  },
  {
    id: "MNT-1036",
    title: "Ceiling stain after rain",
    property: "The Oakford",
    unit: "4C",
    tenant: "Emma Collins",
    priority: "High",
    status: "Waiting",
    age: "3d 4h",
    contractor: "PrimeClean Services",
    photos: 3,
    estimate: "$240-$700",
    ownerVisible: false,
  },
  {
    id: "MNT-1030",
    title: "No hot water",
    property: "Hillcrest Villas",
    unit: "3",
    tenant: "Michael Tan",
    priority: "Urgent",
    status: "Resolved",
    age: "Closed",
    contractor: "QuickFix Plumbing",
    photos: 5,
    estimate: "$410",
    ownerVisible: true,
  },
];

export const properties = [
  {
    name: "Marina Heights",
    address: "22 Harbor Walk",
    owner: "Sarah Lim",
    units: 42,
    occupancy: "95%",
    rent: "$86.4k",
    issues: 7,
    documents: 38,
    health: "Attention",
  },
  {
    name: "Greenview Residences",
    address: "18 Palm Avenue",
    owner: "Horizon Holdings",
    units: 64,
    occupancy: "92%",
    rent: "$118.2k",
    issues: 5,
    documents: 54,
    health: "Stable",
  },
  {
    name: "The Oakford",
    address: "9 King Street",
    owner: "Daniel Morgan",
    units: 28,
    occupancy: "89%",
    rent: "$52.7k",
    issues: 4,
    documents: 21,
    health: "Review",
  },
  {
    name: "Baystone Apartments",
    address: "71 West Quay",
    owner: "Amina Rahman",
    units: 36,
    occupancy: "94%",
    rent: "$73.1k",
    issues: 6,
    documents: 33,
    health: "Stable",
  },
];

export const tenants = [
  { name: "Priya Nair", property: "Marina Heights", unit: "12B", status: "Maintenance open", lastContact: "Today" },
  { name: "Jason Reed", property: "Baystone Apartments", unit: "7A", status: "Waiting on HVAC", lastContact: "Yesterday" },
  { name: "Emma Collins", property: "The Oakford", unit: "4C", status: "Owner review", lastContact: "Jun 13" },
  { name: "Michael Tan", property: "Hillcrest Villas", unit: "3", status: "Resolved", lastContact: "Jun 11" },
];

export const owners = [
  { name: "Sarah Lim", portfolio: "Marina Heights", reports: "2 pending", visibility: "High" },
  { name: "Horizon Holdings", portfolio: "Greenview Residences", reports: "Ready", visibility: "Normal" },
  { name: "Daniel Morgan", portfolio: "The Oakford", reports: "1 pending", visibility: "Needs update" },
  { name: "Amina Rahman", portfolio: "Baystone Apartments", reports: "Ready", visibility: "Normal" },
];

export const contractors = [
  { name: "QuickFix Plumbing", trade: "Plumbing", active: 4, sla: "92%", rating: "4.8" },
  { name: "BrightAir HVAC", trade: "HVAC", active: 3, sla: "87%", rating: "4.6" },
  { name: "SafeVolt Electrical", trade: "Electrical", active: 2, sla: "95%", rating: "4.9" },
  { name: "UrbanLock Security", trade: "Access", active: 1, sla: "89%", rating: "4.7" },
];

export const documents = [
  { name: "Lease agreement", target: "Marina Heights 12B", type: "Tenant file", updated: "Today" },
  { name: "Inspection report", target: "The Oakford", type: "Property file", updated: "Yesterday" },
  { name: "Owner statement", target: "Greenview Residences", type: "Owner report", updated: "Jun 12" },
  { name: "Contractor invoice", target: "Baystone Apartments", type: "Maintenance", updated: "Jun 10" },
  { name: "Roof warranty", target: "Hillcrest Villas", type: "Compliance", updated: "Jun 8" },
];

export const activity = [
  "Priya Nair submitted 4 photos for kitchen sink leak.",
  "BrightAir HVAC accepted AC repair at Baystone Apartments.",
  "Owner update sent to Sarah Lim for Marina Heights.",
  "Inspection report uploaded for The Oakford.",
  "Gate remote ticket moved to In Progress.",
];

export const reportSeries = [58, 72, 48, 82, 69, 91, 77, 64];

export const ownerNav = [
  { label: "Overview", href: "/owner/portal", icon: Home },
  { label: "Maintenance", href: "/owner/portal/maintenance", icon: Wrench },
  { label: "Reports", href: "/owner/portal/reports", icon: BarChart3 },
  { label: "Documents", href: "/owner/portal/documents", icon: FileText },
  { label: "Messages", href: "/owner/portal/messages", icon: MessageSquareText },
];

export const tenantNav = [
  { label: "Home", href: "/tenet/portal", icon: Home },
  { label: "Requests", href: "/tenet/portal/requests", icon: Wrench },
  { label: "Documents", href: "/tenet/portal/documents", icon: FileText },
  { label: "Messages", href: "/tenet/portal/messages", icon: MessageSquareText },
  { label: "Profile", href: "/tenet/portal/profile", icon: Users },
];

export const ownerReports = [
  { title: "June owner packet", property: "Marina Heights", status: "Ready", amount: "$86.4k", date: "Jun 15" },
  { title: "Maintenance cost summary", property: "Marina Heights", status: "Review", amount: "$2.8k", date: "Jun 14" },
  { title: "Occupancy report", property: "Marina Heights", status: "Ready", amount: "95%", date: "Jun 12" },
];

export const ownerMessages = [
  { from: "Northline PM", subject: "Unit 12B plumbing update", time: "Today", unread: true },
  { from: "Northline PM", subject: "Monthly statement is ready", time: "Yesterday", unread: false },
  { from: "Sarah Lim", subject: "Question about inspection photos", time: "Jun 12", unread: false },
];

export const tenantRequests = [
  { title: "Kitchen sink leak", status: "Manager triage", priority: "Urgent", time: "42 min ago" },
  { title: "AC not cooling", status: "Contractor assigned", priority: "High", time: "Yesterday" },
  { title: "No hot water", status: "Resolved", priority: "Resolved", time: "Jun 11" },
  { title: "Bedroom window latch", status: "Waiting on parts", priority: "Medium", time: "Jun 8" },
];

export const tenantDocuments = [
  { title: "Lease agreement", type: "Lease", updated: "Jan 4" },
  { title: "Move-in inspection", type: "Inspection", updated: "Jan 5" },
  { title: "Building handbook", type: "Guide", updated: "May 22" },
  { title: "Payment instructions", type: "Billing", updated: "Jun 1" },
];

export const tenantMessages = [
  { from: "Maya, Property Manager", subject: "Plumbing request received", time: "Today", unread: true },
  { from: "BrightAir HVAC", subject: "AC visit scheduled", time: "Yesterday", unread: false },
  { from: "Northline PM", subject: "Inspection reminder", time: "Jun 9", unread: false },
];
