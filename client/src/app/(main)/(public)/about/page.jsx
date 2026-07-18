"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaRocket,
  FaLaptopCode,
  FaUserCheck,
} from "react-icons/fa";

export default function AboutPage() {
  const coreValues = [
    {
      icon: <FaRocket size={24} />,
      title: "Futuristic Innovation",
      description:
        "Bringing tomorrow's advanced computing architectures, elite peripherals, and smart devices directly to developers and creators today.",
    },
    {
      icon: <FaLaptopCode size={24} />,
      title: "Curated for Builders",
      description:
        "We handpick hardware tailored for power users. From seamless coding workflows to massive computational pipelines, we value peak telemetry.",
    },
    {
      icon: <FaUserCheck size={24} />,
      title: "Uncompromising Integrity",
      description:
        "100% genuine flagship assets, transparent product configurations, secure cloud transactions, and dedicated 24/7 technical support.",
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-76px)] py-16 w-full overflow-hidden bg-[#050816] flex flex-col justify-center text-white">
      {/* Premium Ambient Background Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-indigo-600/15 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 z-10">
        {/* Animated Brand Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-cyan-400 backdrop-blur-md uppercase">
            🛡️ Ecosystem Architecture
          </span>

          <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
            We Are
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mt-1">
              TechNova Store
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-400">
            TechNova is a premier Next.js & MongoDB e-commerce dashboard
            platform engineered for modern hardware enthusiasts. We bridge the
            gap between bleeding-edge technological design and simple deployment
            logistics to deliver elite premium electronics straight to your
            workspace.
          </p>
        </motion.div>

        <hr className="my-16 border-white/5" />

        {/* Grid Core System Values */}
        <div className="grid gap-8 md:grid-cols-3">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-cyan-500/30 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-md transition group-hover:scale-105 group-hover:bg-cyan-500 group-hover:text-black">
                {value.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-100">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Link
            href="/items"
            className="group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 active:scale-98 transition duration-200"
          >
            Browse Premium Inventory
            <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
