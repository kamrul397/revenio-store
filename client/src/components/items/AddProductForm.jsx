"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import { createProduct } from "@/services/productService";

export default function AddProductForm() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const product = {
      id: Date.now(),
      title: form.title.value,
      category: form.category.value,
      price: Number(form.price.value),
      image: form.image.value,
      description: form.description.value,
      rating: 5,
    };

    createProduct(product);

    toast.success("Product Added Successfully!");

    form.reset();

    router.push("/items/manage");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl bg-white p-8 shadow-lg"
    >
      <input
        name="title"
        placeholder="Product Title"
        className="w-full rounded-xl border p-4"
        required
      />

      <select name="category" className="w-full rounded-xl border p-4">
        <option>Laptop</option>
        <option>Phone</option>
        <option>Tablet</option>
        <option>Watch</option>
        <option>Headphone</option>
      </select>

      <input
        name="price"
        type="number"
        placeholder="Price"
        className="w-full rounded-xl border p-4"
        required
      />

      <input
        name="image"
        placeholder="Image URL"
        className="w-full rounded-xl border p-4"
      />

      <textarea
        name="description"
        rows={5}
        placeholder="Description"
        className="w-full rounded-xl border p-4"
      />

      <button className="w-full rounded-xl bg-cyan-600 py-4 font-bold text-white">
        Add Product
      </button>
    </form>
  );
}
