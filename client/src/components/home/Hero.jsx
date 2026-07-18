"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPlay,
  FaApple,
  FaTruck,
  FaBoxOpen,
  FaPlusCircle,
  FaChartLine,
  FaUserCircle,
} from "react-icons/fa";

export default function Hero() {
  const menuItems = [
    {
      title: "Add Product",
      href: "/items/add",
      icon: FaPlusCircle,
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
    },
    {
      title: "Manage",
      href: "/items/manage",
      icon: FaBoxOpen,
      color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    },
    {
      title: "Browse",
      href: "/items",
      icon: FaChartLine,
      color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
    },
    {
      title: "Profile",
      href: "/profile",
      icon: FaUserCircle,
      color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    },
  ];

  return (
    // FIXED: Changed hardcoded h-full limits to min-h to prevent layout overflowing below viewport bounds
    <section className="relative min-h-[calc(100vh-76px)] py-6 lg:py-0 w-full overflow-hidden bg-[#050816] flex items-center">
      {/* Premium Ambient Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-500/15 blur-[120px]" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-indigo-600/20 blur-[120px]" />

      {/* Main Content Area */}
      <div className="relative mx-auto grid w-full max-w-[90rem] items-center lg:grid-cols-[1.1fr_0.9fr] gap-8 px-8">
        {/* Left Interactive Content Area */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 flex flex-col justify-center"
        >
          <div className="self-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-cyan-400 backdrop-blur-md">
              🚀 Trusted by 12,000+ Customers
            </span>
          </div>

          {/* FIXED: Adjusted font size to scale gracefully (text-5xl to text-7xl max) and brought line height perfectly tight */}
          <h1 className="mt-3 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl xl:text-7xl">
            Discover
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Tomorrow's
            </span>
            Technology
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
            Explore premium laptops, smartphones, accessories and smart devices
            curated for developers, creators and tech lovers.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/items"
              className="group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 active:scale-98 transition duration-200"
            >
              Explore Store
              <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
            </Link>

            <button className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/10 hover:border-white/20 active:scale-98 transition duration-200">
              <FaPlay className="text-[10px] text-cyan-400 transition group-hover:scale-110" />
              Watch Demo
            </button>
          </div>

          {/* Compact Social Proof Analytics Row */}
          <div className="mt-6 flex flex-wrap gap-8 border-t border-white/5 pt-4">
            <div>
              <h2 className="text-xl font-black text-white sm:text-2xl">
                12K+
              </h2>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                Happy Customers
              </p>
            </div>
            <div className="border-l border-white/10 pl-8">
              <h2 className="text-xl font-black text-white sm:text-2xl">
                500+
              </h2>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                Premium Products
              </p>
            </div>
            <div className="border-l border-white/10 pl-8">
              <h2 className="text-xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-2xl">
                4.9★
              </h2>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                Average Rating
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Interactive Asset Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden h-full lg:flex flex-col justify-center items-center z-10 w-full"
        >
          <div className="relative flex flex-col items-center justify-center w-full max-w-[90%]">
            {/* Ambient Light Ring Backdrop */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-transparent rounded-full blur-[80px] -z-10 animate-pulse" />

            {/* Floating Image Component */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative p-2 w-full flex justify-center"
            >
              <Image
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800"
                width={500}
                height={350}
                alt="Premium MacBook Hardware Display"
                priority
                className="object-contain drop-shadow-[0_25px_25px_rgba(6,182,212,0.15)] rounded-2xl border border-white/5"
              />

              {/* New Arrival Badge */}
              <div className="absolute right-4 top-6 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 p-2 shadow-xl backdrop-blur-md">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white">
                  <FaApple size={12} />
                </div>
                <div>
                  <span className="block text-[7px] font-bold uppercase tracking-wider text-cyan-400">
                    New Arrival
                  </span>
                  <h4 className="text-[10px] font-bold text-white">
                    MacBook Pro M4
                  </h4>
                </div>
              </div>

              {/* Free Shipping Badge */}
              <div className="absolute left-4 bottom-6 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 p-2 shadow-xl backdrop-blur-md">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <FaTruck size={10} />
                </div>
                <div>
                  <span className="block text-[7px] font-bold uppercase tracking-wider text-slate-400">
                    Free Shipping
                  </span>
                  <h4 className="text-[10px] font-bold text-white">
                    Worldwide
                  </h4>
                </div>
              </div>
            </motion.div>

            {/* Inline Quick Actions Element */}
            <div className="mt-4 pb-2 w-full max-w-[500px] grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`group flex flex-row items-center justify-start gap-2 rounded-xl border p-2 transition-all duration-200 hover:border-white/25 hover:bg-white/5 active:scale-95 backdrop-blur-sm ${item.color}`}
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-md transition group-hover:scale-105">
                      <Icon size={13} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-200 group-hover:text-white transition-colors truncate">
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
