"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import {
  FaEye,
  FaTrash,
  FaBoxOpen,
  FaSearch,
  FaEdit,
  FaArrowLeft,
} from "react-icons/fa";
import { getAllProducts, removeProduct } from "@/services/productService";
import Swal from "sweetalert2";

export default function ManageTable() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  async function loadProducts() {
    const data = await getAllProducts();
    console.log("Raw API Payload Count:", data?.length);
    setProducts(data || []);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const filteredProducts = [...products]
    .filter((product) =>
      product.title?.toLowerCase().includes(search.toLowerCase()),
    )
    .reverse();

  async function handleDelete(id) {
    const result = await Swal.fire({
      title: "Delete Product?",
      text: "You won't be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    try {
      await removeProduct(id);

      toast.success("Product deleted successfully!");

      loadProducts();
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete product.");
    }
  }
  return (
    <section className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-slate-100 to-slate-200 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Aligned Header Section featuring square back icon block */}
        <div className="mb-8 flex flex-col justify-between gap-6 border-b border-slate-200/60 pb-6 sm:flex-row sm:items-end">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-cyan-600 hover:border-cyan-200 hover:shadow-sm active:scale-95 transition-all duration-200"
              title="Back to Dashboard"
            >
              <FaArrowLeft size={14} />
            </Link>
            <div>
              <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-900 bg-clip-text text-transparent sm:text-3xl">
                Manage Products
              </h1>
              <p className="mt-0.5 text-sm font-medium text-slate-500">
                Review live listings, adjust data nodes, or sync storage
                metrics.{" "}
                <span className="font-bold text-cyan-600">
                  ({products.length} total items)
                </span>
              </p>
            </div>
          </div>

          {/* Enhanced Search Input */}
          <div className="relative w-full max-w-md sm:w-80">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by product name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-11 pr-4 text-base shadow-sm outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 text-slate-800"
            />
          </div>
        </div>

        {/* Main Table View */}
        {filteredProducts.length > 0 ? (
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-md shadow-[0_20px_50px_rgba(15,_23,_42,_0.04)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <th className="p-4 pl-6 text-slate-400 w-16 text-center">
                      #
                    </th>
                    <th className="p-4 pl-2 text-sm">Product Details</th>
                    <th className="p-4 text-sm">Category</th>
                    <th className="p-4 text-sm">Price</th>
                    <th className="p-4 text-center text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-base text-slate-700">
                  {filteredProducts.map((product, index) => (
                    <tr
                      key={product._id}
                      className="hover:bg-white/40 transition-colors group"
                    >
                      {/* Dynamic Serial Counter */}
                      <td className="p-4 pl-6 text-center font-mono text-sm font-bold text-slate-400">
                        {index + 1}
                      </td>

                      {/* Product Details Cell */}
                      <td className="p-4 pl-2">
                        <div className="flex items-center gap-4">
                          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-100 text-slate-400 shadow-inner overflow-hidden">
                            {product.image ? (
                              <Image
                                src={product.image}
                                alt={product.title || "Product image"}
                                fill
                                sizes="56px"
                                className="object-cover transition duration-300 group-hover:scale-105"
                              />
                            ) : (
                              <FaBoxOpen size={20} />
                            )}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 text-base transition-colors group-hover:text-cyan-600">
                              {product.title}
                            </h4>
                            <span className="text-xs font-medium text-slate-400">
                              ID: {product._id?.substring(0, 8)}...
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Category Badge */}
                      <td className="p-4">
                        <span className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600 uppercase tracking-wide">
                          {product.category || "General"}
                        </span>
                      </td>

                      {/* Price Element */}
                      <td className="p-4 font-black text-slate-900 text-base">
                        $
                        {Number(product.price || 0).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>

                      {/* Action Interface Controls */}
                      <td className="p-4">
                        <div className="flex justify-center gap-2">
                          <Link
                            href={`/items/${product._id}`}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-600 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition"
                          >
                            <FaEye size={13} /> View
                          </Link>
                          <Link
                            href={`/items/edit/${product._id}`}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-3 py-2 text-sm font-bold text-white shadow-sm hover:bg-amber-600 shadow-amber-500/10 transition"
                          >
                            <FaEdit size={13} /> Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-rose-50 px-3 py-2 text-sm font-bold text-rose-600 hover:bg-rose-100 transition"
                          >
                            <FaTrash size={13} /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-white bg-white/80 backdrop-blur-md py-20 text-center shadow-lg">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-300">
              <FaBoxOpen size={32} />
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-800">
              No matching products found
            </h2>
            <p className="mt-1 text-sm text-slate-400 max-w-xs mx-auto">
              Try updating your keywords or add a brand new item to clear this
              view.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
