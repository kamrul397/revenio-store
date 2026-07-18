"use client";

import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/5 bg-[#050816] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Brand Identity & Copyright */}
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
            TechNova
            <span className="h-2 w-2 rounded-full bg-cyan-400 inline-block"></span>
          </h2>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} All rights reserved. Built with Next.js
            & MongoDB.
          </p>
        </div>

        {/* Ultra-Minimal Social Anchors */}
        <div className="flex items-center gap-6 text-slate-400">
          {/* <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base transition hover:text-cyan-400"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a> */}

          <a
            href="https://github.com/kamrul397"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg transition hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kamrul397/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base transition hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base transition hover:text-sky-400"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
