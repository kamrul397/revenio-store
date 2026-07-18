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
    <aside className="sticky top-0 z-20 flex w-full flex-row border-b border-slate-200/80 bg-white/80 p-4 backdrop-blur-md md:h-screen md:w-64 md:flex-col md:border-b-0 md:border-r md:p-6">
      {/* Logo Header */}
      {/* <div className="hidden items-center gap-3 pb-8 md:flex">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md">
          <Link href={"/"}>
            <FaLayerGroup size={20} />
          </Link>
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-800 leading-tight">
            Revenio
          </h2>
          <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Control Panel
          </span>
        </div>
      </div> */}
      <Link href="/" className="group hidden items-center gap-3 pb-8 md:flex">
        {/* Icon Container with subtle scale on hover */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md transition-transform duration-200 group-hover:scale-105">
          <FaLayerGroup size={20} />
        </div>

        {/* Text Content with subtle opacity change on hover */}
        <div className="transition-opacity duration-200 group-hover:opacity-90">
          <h2 className="text-lg font-bold text-slate-800 leading-tight">
            Revenio
          </h2>
          <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Control Panel
          </span>
        </div>
      </Link>

      {/* Navigation Links */}
      <nav className="flex w-full flex-row justify-around gap-2 md:flex-col md:justify-start md:space-y-1.5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon
                size={18}
                className={
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-400 group-hover:text-slate-600"
                }
              />
              <span className="hidden md:inline">{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
