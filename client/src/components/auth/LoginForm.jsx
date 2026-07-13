"use client";

import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import useAuth from "@/hooks/useAuth";

export default function LoginForm() {
  const { loginUser, googleLogin } = useAuth();

  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect") || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {
      setLoading(true);

      await loginUser(email, password);

      toast.success("Login Successful!");

      form.reset();

      router.push(redirect);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();

      toast.success("Login Successful!");

      router.push(redirect);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
      <h1 className="text-3xl font-bold text-center">Welcome Back</h1>

      <p className="text-center text-gray-500 mt-2">Login to your account</p>

      <form onSubmit={handleLogin} className="mt-8 space-y-5">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
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

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="my-6 flex items-center">
        <div className="flex-1 border-t"></div>

        <span className="mx-4 text-sm text-gray-500">OR</span>

        <div className="flex-1 border-t"></div>
      </div>

      <button
        onClick={handleGoogleLogin}
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-3 transition hover:bg-gray-100"
      >
        <FcGoogle size={24} />
        Continue with Google
      </button>

      <p className="mt-6 text-center text-gray-600">
        Don't have an account?
        <Link
          href="/register"
          className="ml-2 font-semibold text-blue-600 hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
