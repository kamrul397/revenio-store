import ManageTable from "@/components/items/ManageTable";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ManagePage() {
  return (
    <ProtectedRoute>
      <main className="">
        <ManageTable />
      </main>
    </ProtectedRoute>
  );
}
