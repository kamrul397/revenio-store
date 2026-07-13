"use client";

export default function FilterBar({
  category,
  setCategory,
  price,
  setPrice,
  sort,
  setSort,
}) {
  return (
    <div className="mb-10 grid gap-4 md:grid-cols-3">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded-xl border p-4"
      >
        <option>All</option>
        <option>Laptop</option>
        <option>Phone</option>
        <option>Tablet</option>
        <option>Watch</option>
        <option>Headphone</option>
      </select>

      <select
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="rounded-xl border p-4"
      >
        <option>All</option>
        <option value="0-500">0 - 500</option>
        <option value="500-1000">500 - 1000</option>
        <option value="1000+">1000+</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="rounded-xl border p-4"
      >
        <option value="">Default</option>
        <option value="price-low">Price Low → High</option>
        <option value="price-high">Price High → Low</option>
        <option value="rating">Highest Rated</option>
        <option value="name">Name A-Z</option>
      </select>
    </div>
  );
}
