import ManageTable from "@/components/items/ManageTable";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ManagePage() {
  return (
    <ProtectedRoute>
      <main className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="mb-10 text-center text-5xl font-black">
          Manage Products
        </h1>

        <ManageTable />
      </main>
    </ProtectedRoute>
  );
}
