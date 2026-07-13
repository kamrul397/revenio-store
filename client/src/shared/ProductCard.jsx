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
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
    >
      console.log(item);
      <div className="relative overflow-hidden">
        {/* <Image
          src={item.image}
          width={600}
          height={400}
          alt={item.title}
          className="h-64 w-full object-cover duration-500 group-hover:scale-110"
        /> */}

        <span className="absolute left-5 top-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white">
          {item.category}
        </span>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{item.title}</h2>

          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar />

            {item.rating}
          </div>
        </div>

        <p className="line-clamp-2 text-gray-500">{item.description}</p>

        <div className="flex items-center justify-between pt-2">
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
