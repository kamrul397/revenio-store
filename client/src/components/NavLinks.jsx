"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  const { user } = useAuth();

  const links = [
    { title: "Home", href: "/" },
    { title: "Items", href: "/items" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  if (user) {
    links.push({
      title: "Dashboard",
      href: "/dashboard",
    });
  }

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`px-4 py-2 rounded-xl transition-all duration-200 text-base font-semibold ${
                isActive
                  ? "bg-blue-500 text-white shadow-sm border border-blue-100/50"
                  : "text-slate-600 hover:bg-blue-200 hover:text-black"
              }`}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </>
  );
}
