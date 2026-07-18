"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaLaptop,
  FaMobileAlt,
  FaTabletAlt,
  FaClock,
  FaHeadphones,
} from "react-icons/fa";
import { getAllProducts } from "@/services/productService";

const iconMap = {
  Laptop: <FaLaptop size={34} />,
  Phone: <FaMobileAlt size={34} />,
  Tablet: <FaTabletAlt size={34} />,
  Watch: <FaClock size={34} />,
  Headphone: <FaHeadphones size={34} />,
};

const colorMap = {
  Laptop: "from-cyan-500 to-blue-500",
  Phone: "from-violet-500 to-purple-500",
  Tablet: "from-emerald-500 to-teal-500",
  Watch: "from-orange-500 to-red-500",
  Headphone: "from-pink-500 to-rose-500",
};

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const products = await getAllProducts();

      const uniqueCategories = [...new Set(products.map((p) => p.category))];

      setCategories(uniqueCategories);
    }

    loadCategories();
  }, []);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-black">Shop by Category</h2>

        <p className="mt-4 text-center text-slate-500">
          Find your favorite technology instantly.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/items?category=${category}`}
              className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${
                  colorMap[category] || "from-slate-500 to-slate-700"
                } text-white transition group-hover:scale-110`}
              >
                {iconMap[category] || "📦"}
              </div>

              <h3 className="mt-6 text-xl font-bold">{category}</h3>

              <p className="mt-2 text-sm text-slate-500">Explore {category}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
