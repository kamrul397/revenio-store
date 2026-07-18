"use client";

// Make sure it is next/navigation!
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { createProduct } from "@/services/productService";
import { uploadImage } from "@/utils/uploadImage";
import ProductForm from "@/components/items/ProductForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AddProductPage() {
  const router = useRouter(); // This will work perfectly now!

  const handleAdd = async ({ formData, file }) => {
    if (!file) return toast.error("Please select an image first.");

    const imageUrl = await uploadImage(file);
    const productPayload = {
      title: formData.title,
      category: formData.category,
      price: Number(formData.price),
      description: formData.description,
      image: imageUrl,
      rating: 5,
    };

    await createProduct(productPayload);
    toast.success("Product Added Successfully!");
    router.push("/items/manage");
  };

  return (
    <ProtectedRoute>
      <ProductForm mode="add" initialData={null} onSubmit={handleAdd} />
    </ProtectedRoute>
  );
}
