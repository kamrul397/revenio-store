"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

import {
  getAllProducts,
  removeProduct,
} from "@/services/productService";

export default function ManageTable() {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const data = await getAllProducts();
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function handleDelete(id) {
    try {
      await removeProduct(id);

      toast.success("Product Deleted");

      loadProducts();
    } catch (error) {
      toast.error("Delete Failed");
      console.error(error);
    }
  }

  if (!products.length) {
    return (
      <h2 className="text-center text-2xl">
        No Products Found
      </h2>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">

        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>

              <td>{product.title}</td>

              <td>{product.category}</td>

              <td>${product.price}</td>

              <td className="space-x-2">

                <Link
                  href={`/items/${product._id}`}
                  className="btn btn-sm"
                >
                  View
                </Link>

                <button
                  onClick={() =>
                    handleDelete(product._id)
                  }
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}