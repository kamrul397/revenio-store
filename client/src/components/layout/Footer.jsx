import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050816] text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div>
          <h2 className="text-3xl font-black text-white">Revenio</h2>

          <p className="mt-5 leading-7">
            Discover tomorrow's technology today.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-bold text-white">Company</h3>

          <ul className="space-y-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/items">Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-bold text-white">Support</h3>

          <ul className="space-y-3">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Shipping Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-bold text-white">Follow Us</h3>

          <div className="flex gap-5 text-2xl">
            <FaFacebook />
            <FaGithub />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm">
        © {new Date().getFullYear()} Revenio Store. All rights reserved.
      </div>
    </footer>
  );
}
