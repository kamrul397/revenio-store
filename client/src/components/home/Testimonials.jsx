"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "UI Designer",
    comment:
      "Absolutely amazing quality. The delivery was super fast and everything arrived perfectly.",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    comment:
      "Best tech store I've used. Premium products and excellent customer support.",
  },
  {
    name: "Emma Wilson",
    role: "Content Creator",
    comment:
      "The shopping experience feels modern and premium. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black">Happy Customers</h2>

          <p className="mt-5 text-lg text-gray-500">
            Thousands of customers trust Revenio.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >
              <div className="mb-5 flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="leading-8 text-gray-600">"{review.comment}"</p>

              <div className="mt-8">
                <h3 className="font-bold text-xl">{review.name}</h3>

                <p className="text-gray-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
