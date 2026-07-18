import ItemsPage from "@/components/items/ItemsPage";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      }
    >
      <ItemsPage />
    </Suspense>
  );
}
