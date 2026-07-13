import { FaBoxOpen } from "react-icons/fa";

export default function EmptyState() {
  return (
    <div className="py-24 text-center">
      <FaBoxOpen size={70} className="mx-auto text-gray-400" />

      <h2 className="mt-6 text-3xl font-bold">No Products Found</h2>

      <p className="mt-3 text-gray-500">Try changing your search or filters.</p>
    </div>
  );
}
