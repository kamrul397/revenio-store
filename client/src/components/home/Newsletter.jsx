"use client";

import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 border-t border-white/5">
      {/* Background Mesh Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative max-w-4xl mx-auto text-center px-6 z-10">
        {/* Animated Headline Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-400 backdrop-blur-md uppercase">
            ⚡ TechNova Digest
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Stay Ahead of{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Tomorrow
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Subscribe to receive exclusive drops, early product launches, and
            curated tech breakthroughs right in your inbox.
          </p>
        </motion.div>

        {/* Premium Glassmorphic Input Form */}
        <motion.form
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 flex flex-col gap-3 sm:flex-row max-w-2xl mx-auto p-2 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-2xl shadow-black/50"
        >
          <input
            type="email"
            required
            placeholder="Enter your premium email address"
            className="flex-1 bg-transparent px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:ring-0"
          />

          <button
            type="submit"
            className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 active:scale-98 transition duration-200"
          >
            Join TechNova
            <FaPaperPlane className="text-xs text-cyan-200 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.form>

        {/* Spam protection text */}
        <p className="mt-4 text-[11px] text-slate-500">
          Zero spam. Unsubscribe anytime. We respect your digital privacy.
        </p>
      </div>
    </section>
  );
}
