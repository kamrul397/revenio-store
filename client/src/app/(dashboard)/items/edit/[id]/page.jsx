"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { getProduct, updateProduct } from "@/services/productService"; // 👈 Import your service functions
import { uploadImage } from "@/utils/uploadImage";
import ProductForm from "@/components/items/ProductForm";

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        toast.error("Failed to load product data");
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchProduct();
  }, [id]);

  const handleUpdate = async ({ formData, file, preview }) => {
    let imageUrl = preview;

    // If a new image file was dropped, upload it to Cloudinary
    if (file) {
      imageUrl = await uploadImage(file);
    }

    const updatedPayload = {
      title: formData.title,
      category: formData.category,
      price: formData.price, // Our Express server handles the Number conversion now!
      description: formData.description,
      image: imageUrl,
    };

    try {
      // 👈 Directly calling your dedicated backend server via productService
      await updateProduct(id, updatedPayload);

      toast.success("Product Updated Successfully!");
      router.push("/items/manage"); // Go back to your clean table index
      router.refresh();
    } catch (error) {
      toast.error("Failed to update database record");
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <ProductForm mode="edit" initialData={product} onSubmit={handleUpdate} />
  );
}
