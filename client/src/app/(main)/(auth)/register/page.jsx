import LoginForm from "@/components/auth/LoginForm";
import { Suspense } from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <Suspense fallback={<Loading />}>
        <LoginForm></LoginForm>
      </Suspense>
    </main>
  );
}
