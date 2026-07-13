"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { title: "Home", href: "/" },
  { title: "Items", href: "/items" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 focus:bg-transparent ${
                isActive
                  ? "text-slate-900 bg-slate-50 font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/50"
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
