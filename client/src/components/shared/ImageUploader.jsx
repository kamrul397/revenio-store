"use client";

import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function ImageUploader({ preview, setPreview, setFile }) {
  const onDrop = useCallback((acceptedFiles) => {
    const image = acceptedFiles[0];

    if (!image) return;

    setFile(image);

    setPreview(URL.createObjectURL(image));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
  });

  return (
    <div>
      <label className="mb-3 block text-lg font-semibold">Product Image</label>

      <div
        {...getRootProps()}
        className={`rounded-3xl border-2 border-dashed p-10 text-center transition cursor-pointer

        ${
          isDragActive
            ? "border-cyan-500 bg-cyan-50"
            : "border-gray-300 hover:border-cyan-500 hover:bg-slate-50"
        }`}
      >
        <input {...getInputProps()} />

        <FaCloudUploadAlt className="mx-auto text-cyan-600" size={60} />

        <h3 className="mt-5 text-xl font-bold">Drag & Drop Image</h3>

        <p className="mt-2 text-gray-500">or click to browse</p>

        <p className="mt-2 text-sm text-gray-400">PNG • JPG • WEBP</p>
      </div>

      {preview && (
        <div className="mt-8">
          <p className="mb-3 font-semibold">Preview</p>

          <Image
            src={preview}
            alt="Preview"
            width={350}
            height={250}
            className="rounded-2xl object-cover shadow-xl"
          />
        </div>
      )}
    </div>
  );
}
