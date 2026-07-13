import AddProductForm from "@/components/items/AddProductForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AddPage() {
  return (
    <ProtectedRoute>
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="mb-10 text-center text-5xl font-black">Add Product</h1>

        <AddProductForm />
      </main>
    </ProtectedRoute>
  );
}
