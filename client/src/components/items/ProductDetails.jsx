import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaStar } from "react-icons/fa";

import { toast } from "react-toastify";
export default function ProductDetails({ product }) {
  const handleBuy = () => {
    toast.success("Thank you! This feature will be available soon.");
  };
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <Link
        href="/items"
        className="mb-10 inline-flex items-center gap-2 text-cyan-600 hover:underline"
      >
        <FaArrowLeft />
        Back to Products
      </Link>

      <div className="grid gap-16 lg:grid-cols-2">
        <Image
          src={product.image}
          alt={product.title}
          width={700}
          height={700}
          className="rounded-3xl object-cover shadow-xl"
        />

        <div>
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-cyan-700">
            {product.category}
          </span>

          <h1 className="mt-6 text-5xl font-black">{product.title}</h1>

          <div className="mt-5 flex items-center gap-2 text-yellow-500">
            <FaStar />
            {product.rating}
          </div>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            {product.description}
          </p>

          <h2 className="mt-10 text-4xl font-bold text-cyan-600">
            ${product.price}
          </h2>

          <button
            onClick={handleBuy}
            className="mt-10 rounded-xl bg-cyan-600 px-8 py-4 font-semibold text-white hover:bg-cyan-700"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
