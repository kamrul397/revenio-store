"use client";

import Image from "next/image";
import {
  FaEnvelope,
  FaUser,
  FaCalendarAlt,
  FaShieldAlt,
  FaArrowLeft,
} from "react-icons/fa";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import useAuth from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProfilePage() {
  const { user, logoutUser } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          {/* Header Block featuring the matching back button matrix */}
          <div className="mb-10 flex items-center gap-4 border-b border-slate-200/60 pb-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-cyan-600 hover:border-cyan-200 hover:shadow-sm active:scale-95 transition-all duration-200"
              title="Go Back"
            >
              <FaArrowLeft size={14} />
            </button>
            <div>
              <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-900 bg-clip-text text-transparent">
                My Profile
              </h1>
              <p className="mt-0.5 text-sm font-medium text-slate-500">
                View your account information and profile details.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Card */}
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <div className="flex flex-col items-center">
                {user?.photoURL ? (
                  <Image
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    width={140}
                    height={140}
                    className="rounded-full border-4 border-blue-100 object-cover"
                  />
                ) : (
                  <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-5xl font-bold text-white shadow-lg">
                    {(user?.displayName || user?.email || "U")
                      .charAt(0)
                      .toUpperCase()}
                  </div>
                )}

                <h2 className="mt-6 text-2xl font-bold">
                  {user?.displayName || "Anonymous User"}
                </h2>

                <p className="mt-2 text-slate-500 break-all">{user?.email}</p>

                <span className="mt-5 rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
                  Active Account
                </span>

                <button
                  onClick={handleLogout}
                  className="mt-8 w-full rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-xl">
              <h2 className="mb-8 text-3xl font-bold">Account Information</h2>

              <div className="space-y-6">
                <div className="flex items-center gap-5 rounded-2xl bg-slate-50 p-5">
                  <div className="rounded-xl bg-blue-100 p-4 text-blue-600">
                    <FaUser size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Full Name</p>
                    <h3 className="text-lg font-semibold">
                      {user?.displayName || "Not Provided"}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-5 rounded-2xl bg-slate-50 p-5">
                  <div className="rounded-xl bg-cyan-100 p-4 text-cyan-600">
                    <FaEnvelope size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Email Address</p>
                    <h3 className="text-lg font-semibold">{user?.email}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-5 rounded-2xl bg-slate-50 p-5">
                  <div className="rounded-xl bg-purple-100 p-4 text-purple-600">
                    <FaShieldAlt size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Email Verified</p>
                    <h3 className="text-lg font-semibold">
                      {user?.emailVerified ? "Verified ✅" : "Not Verified"}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-5 rounded-2xl bg-slate-50 p-5">
                  <div className="rounded-xl bg-orange-100 p-4 text-orange-600">
                    <FaCalendarAlt size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Member Since</p>
                    <h3 className="text-lg font-semibold">
                      {user?.metadata?.creationTime
                        ? new Date(
                            user.metadata.creationTime,
                          ).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                        : "Unavailable"}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
