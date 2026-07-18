"use client";

import {
  FaSearch,
  FaLaptop,
  FaDollarSign,
  FaSortAmountDown,
} from "react-icons/fa";

export default function FilterBar({
  search,
  setSearch,
  category,
  setCategory,
  price,
  setPrice,
  sort,
  setSort,
}) {
  const inputStyle =
    "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-700 shadow-sm outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100";

  return (
    <div className="mb-12 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur">
      <div className="grid gap-4 lg:grid-cols-12">
        {/* Search */}
        <div className="relative lg:col-span-6">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`${inputStyle} pl-11`}
          />
        </div>

        {/* Category */}
        <div className="relative lg:col-span-2">
          <FaLaptop className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-600 pointer-events-none" />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`${inputStyle} pl-11 appearance-none`}
          >
            <option>All</option>
            <option>Laptop</option>
            <option>Phone</option>
            <option>Tablet</option>
            <option>Watch</option>
            <option>Headphone</option>
          </select>
        </div>

        {/* Price */}
        <div className="relative lg:col-span-2">
          <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 pointer-events-none" />

          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={`${inputStyle} pl-11 appearance-none`}
          >
            <option>All</option>
            <option value="0-500">$0-500</option>
            <option value="500-1000">$500-1000</option>
            <option value="1000+">$1000+</option>
          </select>
        </div>

        {/* Sort */}
        <div className="relative lg:col-span-2">
          <FaSortAmountDown className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-600 pointer-events-none" />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className={`${inputStyle} pl-11 appearance-none`}
          >
            <option value="">Default</option>
            <option value="price-low">Price ↑</option>
            <option value="price-high">Price ↓</option>
            <option value="rating">Rating</option>
            <option value="name">A-Z</option>
          </select>
        </div>
      </div>
    </div>
  );
}
