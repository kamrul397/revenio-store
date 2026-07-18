import Link from "next/link";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="relative flex h-[calc(100vh-76px)] w-full flex-col items-center justify-center overflow-hidden bg-[#050816] px-6 text-center">
      {/* Background Neon Glows to match your Hero section */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Large Premium 404 Status */}
        <h1 className="text-8xl font-black tracking-extrabold text-white sm:text-9xl">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          Lost in Cyberspace
        </h2>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 active:scale-95 transition duration-200"
          >
            <FaHome className="text-xs" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
