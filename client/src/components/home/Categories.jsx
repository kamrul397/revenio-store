const categories = ["Laptop", "Phone", "Tablet", "Watch", "Headphone"];

export default function Categories() {
  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-xl bg-white p-10 text-center shadow hover:shadow-xl transition cursor-pointer"
            >
              <h3 className="text-xl font-bold">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
