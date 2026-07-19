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
  const [googleLoading, setGoogleLoading] = useState(false);

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
      setGoogleLoading(true);
      await googleLogin();
      toast.success("Login Successful!");
      router.push(redirect);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Welcome Back
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Login to your TechNova account
        </p>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleLogin} className="mt-8 space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-600 uppercase tracking-wider">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500"
            required
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-600 uppercase tracking-wider">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-300 bg-white p-3.5 pr-12 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>
        </div>

        {/* Primary Submit Login Button */}
        <button
          type="submit"
          disabled={loading || googleLoading}
          className="mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 font-bold text-white shadow-lg hover:scale-[1.01] active:scale-[0.99] transition disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="h-5 w-5 animate-spin text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Logging in...
            </span>
          ) : (
            "Login"
          )}
        </button>
      </form>

      {/* Modern Splitter Divider */}
      <div className="flex items-center my-6">
        <div className="flex-1 border-t border-slate-200"></div>
        <span className="mx-4 text-xs font-bold tracking-widest text-slate-400">
          OR
        </span>
        <div className="flex-1 border-t border-slate-200"></div>
      </div>

      {/* Ultra-Smooth Google Button */}
      <button
        type="button"
        disabled={loading || googleLoading}
        onClick={handleGoogleLogin}
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {googleLoading ? (
          <svg
            className="h-5 w-5 animate-spin text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <FcGoogle
            size={20}
            className="transition-transform duration-200 group-hover:scale-105"
          />
        )}
        <span>{googleLoading ? "Connecting..." : "Continue with Google"}</span>
      </button>

      {/* Redirect Footer */}
      <p className="mt-6 text-center text-sm text-slate-500">
        Don't have an account?
        <Link
          href={`/register?redirect=${encodeURIComponent(redirect)}`}
          className="ml-1.5 font-semibold text-cyan-600 hover:text-cyan-700 transition underline underline-offset-4"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
