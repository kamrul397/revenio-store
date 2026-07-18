"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaStar } from "react-icons/fa";

export default function ProductCard({ item }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      // Added `flex flex-col h-full` to make the card dynamic
      className="group flex flex-col h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
    >
      <div className="relative overflow-hidden shrink-0">
        <Image
          src={item.image}
          alt={item.title || ""}
          width={600}
          height={400}
          className="h-64 w-full object-cover duration-500 group-hover:scale-110"
        />

        <span className="absolute left-5 top-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white">
          {item.category}
        </span>
      </div>

      {/* Changed to flex-col, flex-1, and justify-between to push contents dynamically */}
      <div className="flex flex-col flex-1 justify-between p-6 gap-4">
        {/* Top wrapper containing Title and Description */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-2">
            {/* Added a minimum height so 1-line titles line up with 2-line titles */}
            <h2 className="text-2xl font-bold min-h-[64px] line-clamp-2 leading-tight">
              {item.title}
            </h2>

            <div className="flex items-center gap-2 text-yellow-500 shrink-0 pt-1">
              <FaStar />
              {item.rating}
            </div>
          </div>

          <p className="line-clamp-2 text-gray-500">{item.description}</p>
        </div>

        {/* Bottom row containing Price and Action Button */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
          <h3 className="text-3xl font-bold text-cyan-600">${item.price}</h3>

          <Link
            href={`/items/${item._id}`}
            className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-cyan-600"
          >
            Details
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
