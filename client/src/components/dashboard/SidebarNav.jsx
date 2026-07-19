"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBoxOpen,
  FaPlusCircle,
  FaChartLine,
  FaUserCircle,
  FaLayerGroup,
} from "react-icons/fa";

export default function SidebarNav() {
  const pathname = usePathname();

  const menuItems = [
    { title: "Add Product", href: "/items/add", icon: FaPlusCircle },
    { title: "Manage Products", href: "/items/manage", icon: FaBoxOpen },
    { title: "Browse Store", href: "/items", icon: FaChartLine },
    { title: "My Profile", href: "/profile", icon: FaUserCircle },
  ];

  return (
    <aside className="sticky top-0 z-20 flex w-full flex-row border-b border-slate-200 bg-gradient-to-r from-cyan-500 to-blue-600 p-4 md:static md:z-0 md:h-fit md:w-64 md:flex-col md:justify-center md:rounded-3xl md:border-0 md:bg-gradient-to-b md:p-6 md:shadow-[0_10px_30px_rgba(6,182,212,0.25)] md:ml-6 transition-all duration-300">
      {/* Logo Header */}
      <Link
        href="/"
        className="group hidden items-center gap-3 pb-6 md:flex border-b border-white/20 mb-6"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/25 text-white shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:bg-white/40">
          <FaLayerGroup size={20} />
        </div>

        <div>
          <h2 className="text-lg font-bold text-white leading-tight tracking-tight">
            Revenio
          </h2>
          <span className="text-[10px] font-bold tracking-widest text-cyan-100 uppercase">
            Control Panel
          </span>
        </div>
      </Link>

      {/* Navigation Links */}
      <nav className="flex w-full flex-row justify-around gap-3 md:flex-col md:justify-start md:space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-bold transition-all duration-300 shadow-sm ${
                isActive
                  ? "bg-white text-slate-900 shadow-[0_8px_25px_rgba(0,0,0,0.15)] scale-[1.02]"
                  : "bg-white/15 border border-white/10 text-white hover:bg-white/30 hover:border-white/20 md:hover:translate-x-1"
              }`}
            >
              <Icon
                size={18}
                className={`transition-transform duration-300 group-hover:scale-110 ${
                  isActive ? "text-blue-600" : "text-white"
                }`}
              />

              <span className="hidden md:inline relative z-10">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
