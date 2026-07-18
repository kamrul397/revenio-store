"use client";

import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import ImageUploader from "@/components/shared/ImageUploader";

export default function ProductImageSection({
  preview,
  setPreview,
  setFile,
  formData,
}) {
  const removeImage = () => {
    setPreview(null);
    setFile(null);
  };

  return (
    <div className="w-full flex flex-col gap-5">
      {/* Row 1: Image Uploader Box */}
      <div className="flex flex-col">
        {/* Font updated to text-sm */}
        <label className="mb-1.5 block text-sm font-bold text-slate-700 uppercase tracking-wider">
          Upload Image
        </label>
        <div className="w-full flex items-center justify-center rounded-xl border-2 border-dashed border-cyan-300 bg-cyan-50/40 p-5 hover:bg-cyan-100/50 transition-colors">
          <div className="w-full text-center text-sm">
            <ImageUploader
              preview={preview}
              setPreview={setPreview}
              setFile={setFile}
            />
          </div>
        </div>
      </div>

      {/* Row 2: Live Preview Card Layout */}
      <div className="flex flex-col">
        {/* Font updated to text-sm */}
        <label className="mb-1.5 block text-sm font-bold text-slate-700 uppercase tracking-wider">
          Live Preview
        </label>

        <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 flex flex-col justify-between">
          {/* Visual Display Screen Box */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center min-h-[140px]">
            {preview ? (
              <>
                <Image
                  src={preview}
                  alt="Product Live View"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute right-3 top-3 rounded-full bg-rose-500 p-2 text-white hover:bg-rose-600 transition shadow-md z-10"
                  title="Remove Image"
                >
                  <FaTrashAlt size={12} />
                </button>
              </>
            ) : (
              <div className="text-center p-3 space-y-1">
                <div className="text-2xl">🖼️</div>
                {/* Font updated to text-xs */}
                <p className="text-xs text-slate-400 font-medium">
                  No asset uploaded
                </p>
              </div>
            )}
          </div>

          {/* Metadata Display Rows */}
          <div className="mt-4 space-y-1">
            <div className="flex items-center justify-between gap-2">
              {/* Font updated to text-xs */}
              <span className="text-xs font-bold text-cyan-600 uppercase truncate">
                {formData.category || "Laptop"}
              </span>
              {/* Font updated to text-base */}
              <span className="text-base font-black text-slate-900 shrink-0">
                {formData.price
                  ? `$${Number(formData.price).toLocaleString()}`
                  : "$1,299"}
              </span>
            </div>

            {/* Font updated to text-sm/base */}
            <h4 className="line-clamp-1 text-sm md:text-base font-bold text-slate-800">
              {formData.title || "MacBook Air M4"}
            </h4>

            {/* Font updated to text-xs/sm */}
            <p className="line-clamp-2 text-xs md:text-sm leading-relaxed text-slate-500">
              {formData.description || "No live description rendered yet."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
