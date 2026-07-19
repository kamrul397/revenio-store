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
  ];

  if (user) {
    links.push({
      title: "Dashboard",
      href: "/dashboard",
    });
  }

  // --- FIX: Force closing DaisyUI dropdown menu safely ---
  const handleLinkClick = () => {
    // Find any HTML element that currently has active browser focus and blur it
    const elem = document.activeElement;
    if (elem instanceof HTMLElement) {
      elem.blur();
    }
  };

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.href} className="w-full md:w-auto">
            <Link
              href={link.href}
              onClick={handleLinkClick} // <--- Triggers the blur
              className={`block md:inline-block px-4 py-3 md:py-2 rounded-xl transition-all duration-200 text-lg md:text-sm font-semibold ${
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
