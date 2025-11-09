import { ShoppingCart, Info } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic Urad Papadam",
    img: "https://images.unsplash.com/photo-1604908554027-4f35ef6b5e42?q=80&w=1600&auto=format&fit=crop",
    description:
      "Crisp and light with a traditional urad dal base, perfect with any meal.",
    ingredients: ["Urad dal flour", "Salt", "Black pepper", "Asafoetida"],
    nutrition: "Per 10g: 40 kcal • 1g protein • 0.5g fat",
    price: "₹60 / 200g",
  },
  {
    id: 2,
    name: "Masala Papadam",
    img: "https://images.unsplash.com/photo-1625944523683-cc2bd9f5ca9a?q=80&w=1600&auto=format&fit=crop",
    description:
      "Zesty blend of spices adds a kick. Great as a snack with chutneys.",
    ingredients: ["Urad dal flour", "Cumin", "Chili", "Coriander", "Salt"],
    nutrition: "Per 10g: 42 kcal • 1.2g protein • 0.6g fat",
    price: "₹70 / 200g",
  },
  {
    id: 3,
    name: "Jeera Papadam",
    img: "https://images.unsplash.com/photo-1641834633991-f577eec5a865?q=80&w=1600&auto=format&fit=crop",
    description: "Warm cumin aroma with a delicate crunch.",
    ingredients: ["Urad dal flour", "Cumin seeds", "Salt"],
    nutrition: "Per 10g: 39 kcal • 1g protein • 0.4g fat",
    price: "₹65 / 200g",
  },
  {
    id: 4,
    name: "Black Pepper Papadam",
    img: "https://images.unsplash.com/photo-1625944687112-3a62be5285bd?q=80&w=1600&auto=format&fit=crop",
    description: "Bold peppery notes for a satisfying bite.",
    ingredients: ["Urad dal flour", "Cracked pepper", "Salt"],
    nutrition: "Per 10g: 41 kcal • 1g protein • 0.5g fat",
    price: "₹70 / 200g",
  },
];

export default function ProductCatalog() {
  return (
    <section id="products" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Product Catalog
            </h2>
            <p className="mt-2 text-gray-600">
              Explore our handcrafted range. Available for retail and wholesale orders.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-white shadow hover:bg-orange-700"
          >
            Bulk Enquiry
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.id}
              className="group rounded-2xl border border-orange-100 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.description}</p>
                <div className="mt-3 text-xs text-gray-500 flex items-center gap-2">
                  <Info size={14} className="text-orange-600" />
                  <span>{p.nutrition}</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold text-orange-700">{p.price}</span>
                  <button className="inline-flex items-center gap-2 rounded-full border border-orange-200 px-3 py-1.5 text-sm text-orange-700 hover:bg-orange-50">
                    <ShoppingCart size={16} /> Add
                  </button>
                </div>
                <div className="mt-3">
                  <details className="text-sm text-gray-700">
                    <summary className="cursor-pointer text-orange-700">Ingredients</summary>
                    <ul className="mt-2 list-disc pl-5">
                      {p.ingredients.map((i, idx) => (
                        <li key={idx}>{i}</li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
