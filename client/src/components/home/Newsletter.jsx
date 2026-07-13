"use client";

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-5xl font-black text-white">Stay Updated</h2>

        <p className="mt-6 text-lg text-cyan-100">
          Subscribe to receive exclusive offers, product launches and tech news.
        </p>

        <form className="mt-10 flex flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-xl px-5 py-4 outline-none"
          />

          <button
            type="submit"
            className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-slate-900"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
