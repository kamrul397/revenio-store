import { useMemo } from "react";

export default function useProductFilter(items, search, category, price, sort) {
  const filteredProducts = useMemo(() => {
    let data = [...items];

    // Search
    if (search.trim()) {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Category
    if (category !== "All") {
      data = data.filter((item) => item.category === category);
    }

    // Price
    switch (price) {
      case "0-500":
        data = data.filter((item) => item.price <= 500);
        break;

      case "500-1000":
        data = data.filter((item) => item.price > 500 && item.price <= 1000);
        break;

      case "1000+":
        data = data.filter((item) => item.price > 1000);
        break;

      default:
        break;
    }

    // Sort
    switch (sort) {
      case "price-low":
        data.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        data.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        data.sort((a, b) => b.rating - a.rating);
        break;

      case "name":
        data.sort((a, b) => a.title.localeCompare(b.title));
        break;

      default:
        break;
    }

    return data;
  }, [items, search, category, price, sort]);

  return filteredProducts;
}
