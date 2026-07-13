"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816]">
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="mx-auto flex min-h-[92vh] max-w-7xl items-center justify-between gap-16 px-6">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            🚀 Trusted by 12,000+ Customers
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white">
            Discover
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Tomorrow's{" "}
            </span>
            Technology
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Explore premium laptops, smartphones, accessories and smart devices
            curated for developers, creators and tech lovers.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/items"
              className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Store
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <button className="flex items-center gap-3 rounded-xl border border-white/20 px-8 py-4 text-white backdrop-blur">
              <FaPlay />
              Watch Demo
            </button>
          </div>

          <div className="mt-14 flex gap-14">
            <div>
              <h2 className="text-4xl font-bold text-white">12K+</h2>

              <p className="text-gray-400">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">500+</h2>

              <p className="text-gray-400">Premium Products</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">4.9★</h2>

              <p className="text-gray-400">Average Rating</p>
            </div>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden flex-1 lg:flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <Image
              src="/hero.png"
              width={650}
              height={650}
              alt="Hero"
              priority
            />
          </motion.div>

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute right-0 top-10 rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-xl"
          >
            <h4 className="text-lg font-semibold text-white">New Arrival</h4>

            <p className="text-sm text-gray-300">MacBook Pro M4</p>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute bottom-8 left-0 rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-xl"
          >
            <h4 className="text-lg font-semibold text-white">Free Shipping</h4>

            <p className="text-sm text-gray-300">Worldwide Delivery</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
