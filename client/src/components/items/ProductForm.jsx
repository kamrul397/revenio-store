"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ProductImageSection from "./productForm/ProductImageSection";

export default function ProductForm({
  mode = "add",
  initialData = null,
  onSubmit,
}) {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "Laptop",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        category: initialData.category || "Laptop",
        price: initialData.price || "",
        description: initialData.description || "",
      });
      setPreview(initialData.image || null);
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      await onSubmit({ formData, file, preview });
    } catch (error) {
      console.error("Submission failed inside layout container:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full rounded-2xl border border-white/60 bg-white/80 backdrop-blur-md p-6 shadow-[0_20px_50px_rgba(15,_23,_42,_0.08)]"
        >
          {/* Header Area */}
          <div className="mb-6 flex items-center gap-4 border-b border-slate-200/60 pb-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-cyan-600 hover:border-cyan-200 hover:shadow-sm active:scale-95 transition-all duration-200"
              title="Go Back"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0 l7-7m-7 7h18"
                />
              </svg>
            </button>
            <div>
              <h2 className="text-2xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-900 bg-clip-text text-transparent">
                {mode === "edit" ? "Edit Product Details" : "Create New Product"}
              </h2>
              {/* Increased from text-xs to text-sm */}
              <p className="text-sm font-medium text-slate-500 mt-0.5">
                {mode === "edit"
                  ? "Modify configuration architecture metrics and update assets instantly."
                  : "Publish live flagship inventory assets directly into the marketplace ecosystem."}
              </p>
            </div>
          </div>

          {/* Grid Layout Container */}
          <div className="grid gap-6 lg:grid-cols-12 items-start">
            {/* Left Side: Removed max-h and overflow properties to eliminate the scrollbar */}
            <div className="lg:col-span-4 w-full">
              <ProductImageSection
                preview={preview}
                setPreview={setPreview}
                setFile={setFile}
                formData={formData}
              />
            </div>

            {/* Right Side: Inputs Form Fields */}
            <form
              onSubmit={handleFormSubmit}
              className="space-y-5 lg:col-span-8 bg-white/50 p-5 rounded-xl border border-slate-100"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  {/* Increased label size to text-sm */}
                  <label className="mb-1.5 block text-sm font-bold text-slate-700 uppercase tracking-wider">
                    Product Title
                  </label>
                  {/* Increased input text to text-base */}
                  <input
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g. MacBook Air M4 Pro"
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-base text-slate-800 outline-none shadow-sm placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold text-slate-700 uppercase tracking-wider">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-base text-slate-800 outline-none shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200"
                  >
                    <option value="Laptop">Laptop</option>
                    <option value="Phone">Phone</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Watch">Watch</option>
                    <option value="Headphone">Headphone</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold text-slate-700 uppercase tracking-wider">
                    Price ($)
                  </label>
                  <input
                    name="price"
                    type="number"
                    required
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="999"
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-base text-slate-800 outline-none shadow-sm placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Description
                </label>
                <textarea
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your flagship specs..."
                  className="w-full rounded-xl border border-slate-200 bg-white p-3 text-base text-slate-800 outline-none shadow-sm placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all duration-200 type-wrap resize-none"
                />
              </div>

              <AnimatePresence>
                {uploading && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-1.5 overflow-hidden"
                  >
                    {/* Increased text-size to text-xs */}
                    <div className="flex justify-between text-xs font-bold text-cyan-600">
                      <span>Syncing asset configurations securely...</span>
                      <span className="animate-pulse flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 inline-block"></span>{" "}
                        Active
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 p-[1px]">
                      <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.2,
                          ease: "linear",
                        }}
                        className="h-full w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={uploading}
                className="w-full relative overflow-hidden group rounded-xl bg-gradient-to-r from-slate-900 via-cyan-950 to-blue-950 py-3.5 text-base font-extrabold text-white shadow-lg hover:shadow-cyan-950/20 active:scale-[0.99] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />

                {uploading ? (
                  <span className="flex items-center gap-2 relative z-10">
                    <svg
                      className="h-4 w-4 animate-spin text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Processing Data...
                  </span>
                ) : (
                  <span className="relative z-10 tracking-wide">
                    {mode === "edit" ? "Save Alterations" : "Deploy Product Line"}
                  </span>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}