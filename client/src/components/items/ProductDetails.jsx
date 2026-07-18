"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import {
  FaArrowLeft,
  FaStar,
  FaShoppingCart,
  FaShieldAlt,
  FaTruck,
  FaUndoAlt,
} from "react-icons/fa";

export default function ProductDetails({ product }) {
  const [purchased, setPurchased] = useState(false);

  const handleBuy = async () => {
    const result = await Swal.fire({
      title: "Purchase Product?",
      text: "This feature is coming soon. Thank you for your interest!",
      icon: "info",
      confirmButtonText: "OK",
      confirmButtonColor: "#06b6d4",
      background: "#fff",
    });

    if (result.isConfirmed) {
      setPurchased(true);
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-indigo-50 py-2">
      <div className="mx-auto max-w-7xl px-3">
        {/* Back Button */}

        <Link
          href="/items"
          className="mb-1 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-md transition hover:-translate-x-1 hover:text-cyan-600"
        >
          <FaArrowLeft />
          Back to Products
        </Link>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}

          <div className="overflow-hidden rounded-[30px] bg-white p-2 shadow-2xl">
            <Image
              src={product.image}
              alt={product.title}
              width={700}
              height={700}
              priority
              className="h-[520px] w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Content */}

          <div>
            <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-bold text-cyan-700">
              {product.category}
            </span>

            <h1 className="mt-5 text-5xl font-black text-slate-900">
              {product.title}
            </h1>

            <div className="mt-5 flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-xl text-yellow-400" />
              ))}

              <span className="ml-2 font-semibold text-slate-600">
                {product.rating}/5
              </span>
            </div>

            <h2 className="mt-8 text-5xl font-black text-cyan-600">
              ${product.price}
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              {product.description}
            </p>

            {/* Features */}

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 text-center shadow">
                <FaTruck className="mx-auto mb-3 text-3xl text-cyan-600" />
                <p className="font-semibold">Free Shipping</p>
              </div>

              <div className="rounded-2xl bg-white p-5 text-center shadow">
                <FaShieldAlt className="mx-auto mb-3 text-3xl text-green-600" />
                <p className="font-semibold">1 Year Warranty</p>
              </div>

              <div className="rounded-2xl bg-white p-5 text-center shadow">
                <FaUndoAlt className="mx-auto mb-3 text-3xl text-orange-500" />
                <p className="font-semibold">7 Days Return</p>
              </div>
            </div>

            {/* Button */}

            <button
              onClick={handleBuy}
              disabled={purchased}
              className={`mt-12 flex items-center gap-3 rounded-2xl px-10 py-5 text-lg font-bold text-white transition-all duration-300 ${
                purchased
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-xl hover:-translate-y-1 hover:shadow-cyan-300"
              }`}
            >
              <FaShoppingCart />

              {purchased ? "Purchased" : "Buy Now"}
            </button>
            {/* <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
                Similar Products
              </p>

              <h2 className="mt-2 text-4xl font-black">You May Also Like</h2>

              <p className="mt-3 text-slate-500">
                More {product.category.toLowerCase()}s selected for you.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
