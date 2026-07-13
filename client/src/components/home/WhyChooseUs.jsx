"use client";

import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaUndoAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast size={30} />,
    title: "Fast Delivery",
    description: "Free worldwide shipping with real-time tracking.",
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Secure Payment",
    description: "100% secure payment powered by trusted gateways.",
  },
  {
    icon: <FaHeadset size={30} />,
    title: "24/7 Support",
    description: "Our support team is always ready to help.",
  },
  {
    icon: <FaUndoAlt size={30} />,
    title: "Easy Returns",
    description: "30-day hassle-free return policy.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white">
            Why Choose Revenio?
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Everything you need for a premium shopping experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-6 text-cyan-400">{feature.icon}</div>

              <h3 className="text-2xl font-bold text-white">{feature.title}</h3>

              <p className="mt-4 leading-7 text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
