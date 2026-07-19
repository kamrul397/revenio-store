import SidebarNav from "@/components/dashboard/SidebarNav";
import ProtectedRoute from "@/components/ProtectedRoute";
// We'll move the sidebar code here

export const metadata = {
  title: "Dashboard | TechNova",
};

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col md:flex-row md:items-center bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-100">
        {/* Persistent Shared Dashboard Navigation Sidebar */}
        {/* (Make sure your SidebarNav doesn't have an absolute h-full or h-screen overriding this) */}
        <SidebarNav />

        {/* Dynamic Nested Content View Injection Area */}
        <main className="flex-1 overflow-y-auto px-6 py-8 md:px-10 w-full">
          <div className="mx-auto max-w-5xl space-y-8">{children}</div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
