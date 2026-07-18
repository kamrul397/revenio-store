"use client";

import useAuth from "@/hooks/useAuth";
import { getAllProducts } from "@/services/productService";
import QuickActions from "@/shared/QuickActions";
import { useState, useEffect } from "react"; // Hook imported here

export default function DashboardPage() {
  const { user } = useAuth();

  // 1. React state must live inside the component body
  const [products, setProducts] = useState([]);

  // 2. The data fetching function must also live inside the component
  async function loadProducts() {
    try {
      const data = await getAllProducts();
      console.log("Raw API Payload Count:", data?.length);
      setProducts(data || []);
    } catch (error) {
      console.error("Failed to load products in dashboard:", error);
    }
  }

  // 3. Trigger the function when the component mounts
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      {/* Hero Card */}
      <div className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-8 text-white shadow-xl">
        <p className="text-sm uppercase tracking-[0.3em] opacity-80">
          Dashboard Overview
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight">
          Welcome Back,{" "}
          <span className="text-cyan-200">{user?.displayName || "User"}</span>{" "}
          👋
        </h1>
        <p className="mt-2 text-cyan-100 max-w-md text-sm leading-relaxed">
          Manage your store layout configurations, sync inventory assets, and
          publish pipeline items seamlessly.
        </p>
      </div>

      {/* Quick Stats Grid */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
          <p className="text-sm font-medium text-slate-400">Total Products</p>

          <h2 className="mt-2 text-2xl font-black text-cyan-600 tracking-tight">
            {products.length} {products.length === 1 ? "item" : "items"}
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
          <p className="text-sm font-medium text-slate-400">Store Status</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
            <h2 className="text-xl font-bold text-slate-800">Active</h2>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
          <p className="text-sm font-medium text-slate-400">Total Orders</p>
          <h2 className="mt-2 text-4xl font-black text-purple-600 tracking-tight">
            0
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
          <p className="text-sm font-medium text-slate-400">Trending Node</p>
          <h2 className="mt-1 text-3xl">🔥</h2>
        </div>
      </section>

      {/* Quick Action Row Section */}
      <div className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900 ml-1">Quick Actions</h2>

        <section className="rounded-2xl border border-slate-100 bg-white p-3 shadow-md">
          <QuickActions />
        </section>
      </div>
    </>
  );
}
