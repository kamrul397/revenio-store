"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import useAuth from "@/hooks/useAuth";

export default function RegisterForm() {
  const { createUser } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect") || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    try {
      setLoading(true);

      await createUser(name, email, password);

      toast.success("Account created successfully");

      form.reset();

      router.push(redirect);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
      <h1 className="text-3xl font-bold text-center">Create Account</h1>

      <p className="text-center text-gray-500 mt-2">
        Join TechNova Store today
      </p>

      <form onSubmit={handleRegister} className="mt-8 space-y-5">
        <input
          name="name"
          placeholder="Full Name"
          className="w-full rounded-lg border p-3"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border p-3"
          required
        />

        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full rounded-lg border p-3"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="w-full rounded-lg border p-3"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <div className="flex items-center my-6">
        <div className="flex-1 border"></div>

        <span className="mx-4 text-gray-500">OR</span>

        <div className="flex-1 border"></div>
      </div>

      <button className="w-full rounded-lg border py-3 flex justify-center items-center gap-2">
        <FcGoogle size={24} />
        Continue with Google
      </button>

      <p className="mt-6 text-center">
        Already have an account?
        <Link href="/login" className="text-blue-600 ml-2">
          Login
        </Link>
      </p>
    </div>
  );
}
