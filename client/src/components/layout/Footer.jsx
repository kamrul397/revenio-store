"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Items", href: "/items" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="mt-24 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-black text-white">TechNova</h2>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            Discover tomorrow's technology today with premium devices and modern
            shopping experiences.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Navigation</h3>

          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition duration-300 hover:text-cyan-400 ${
                    pathname === link.href ? "font-semibold text-cyan-400" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Support</h3>

          <ul className="space-y-2 text-slate-400">
            <li className="hover:text-cyan-400 transition cursor-pointer">
              Help Center
            </li>

            <li className="hover:text-cyan-400 transition cursor-pointer">
              Privacy Policy
            </li>

            <li className="hover:text-cyan-400 transition cursor-pointer">
              Terms & Conditions
            </li>

            <li className="hover:text-cyan-400 transition cursor-pointer">
              Shipping Policy
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Follow Us</h3>

          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-lg transition hover:-translate-y-1 hover:bg-cyan-600 hover:text-white"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://github.com/kamrul397"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-lg transition hover:-translate-y-1 hover:bg-slate-700 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-lg transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-lg transition hover:-translate-y-1 hover:bg-sky-500 hover:text-white"
            >
              <FaTwitter />
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Stay connected for the latest updates.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} TechNova. All rights reserved.</p>

          <p>Built with ❤️ using Next.js & MongoDB</p>
        </div>
      </div>
    </footer>
  );
}
