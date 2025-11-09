import { ArrowRight, ShoppingBag } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-b from-orange-50 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(234,88,12,0.15),transparent_60%)]" />

      {/* Top Nav */}
      <div className="mx-auto max-w-7xl px-6 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-amber-500 to-red-500" />
          <span className="font-extrabold text-lg tracking-tight text-gray-900">
            SK Papadam
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <button onClick={() => scrollTo("about")} className="hover:text-orange-700">About</button>
          <button onClick={() => scrollTo("products")} className="hover:text-orange-700">Products</button>
          <button onClick={() => scrollTo("testimonials")} className="hover:text-orange-700">Reviews</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-orange-700">Contact</button>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-200">
              Authentic • Crispy • Handcrafted
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Taste the Tradition
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
                SK Papadam
              </span>
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-700">
              Premium papadams made with time-honored recipes and the finest ingredients. Perfect for home, restaurants, retail and wholesale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => scrollTo("products")} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-red-600 px-5 py-3 text-white shadow-lg shadow-orange-200/50 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                Shop Products
                <ShoppingBag size={18} />
              </button>
              <button onClick={() => scrollTo("contact")} className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-3 text-orange-700 transition hover:border-orange-300 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                Wholesale Enquiries
                <ArrowRight size={18} />
              </button>
            </div>
            <div id="about" className="mt-8 text-sm text-gray-600">
              <p>
                From our kitchen to your table, we craft each batch with care for the perfect crunch. Explore flavors like classic urad, masala, jeera and pepper.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-0 rounded-3xl bg-gradient-to-tr from-amber-200/40 via-orange-200/30 to-red-200/40 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1589304472366-039f2f8d0873?q=80&w=1600&auto=format&fit=crop"
              alt="Crispy Indian papadams arranged with spices"
              className="relative z-10 w-full rounded-3xl shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
