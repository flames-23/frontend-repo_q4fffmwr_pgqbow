import { Star, Send } from "lucide-react";
import { useState } from "react";

export default function RecipeSection() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Masala Papad Chaat",
      rating: 5,
      img: "https://images.unsplash.com/photo-1634729449150-25a15ef62b87?q=80&w=1600&auto=format&fit=crop",
      steps: [
        "Roast papadam on flame until crisp.",
        "Top with chopped onions, tomatoes, coriander.",
        "Drizzle tamarind and green chutney; finish with chaat masala.",
      ],
    },
    {
      id: 2,
      title: "Papad Curry (Papad ki Sabzi)",
      rating: 4,
      img: "https://images.unsplash.com/photo-1625944524322-1f1c1a9e7b3b?q=80&w=1600&auto=format&fit=crop",
      steps: [
        "Prepare a spiced yogurt gravy.",
        "Break roasted papadams into pieces and simmer briefly.",
        "Garnish with ghee-tempered cumin and chilies.",
      ],
    },
  ]);

  const [form, setForm] = useState({ title: "", image: "", steps: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const steps = form.steps
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    if (!form.title || steps.length === 0) return;
    const newRecipe = {
      id: Date.now(),
      title: form.title,
      rating: 5,
      img: form.image || "https://images.unsplash.com/photo-1604908554027-4f35ef6b5e42?q=80&w=1600&auto=format&fit=crop",
      steps,
    };
    setRecipes([newRecipe, ...recipes]);
    setForm({ title: "", image: "", steps: "" });
  };

  return (
    <section id="recipes" className="bg-gradient-to-b from-white to-orange-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Recipes & Serving Ideas
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Discover creative ways to enjoy papadams. Submit your own recipes and inspire others!
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <ul className="grid gap-6">
              {recipes.map((r) => (
                <li key={r.id} className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm">
                  <div className="grid md:grid-cols-5">
                    <img src={r.img} alt={r.title} className="h-44 w-full object-cover md:col-span-2" />
                    <div className="p-5 md:col-span-3">
                      <h3 className="text-lg font-semibold text-gray-900">{r.title}</h3>
                      <div className="mt-1 flex items-center gap-1 text-amber-600">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <Star key={i} size={16} fill="#d97706" className="text-amber-600" />
                        ))}
                      </div>
                      <ol className="mt-3 list-decimal pl-5 text-sm text-gray-700 space-y-1">
                        {r.steps.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Submit your recipe</h3>
            <p className="text-sm text-gray-600 mb-4">Share your favorite papadam dish with the community.</p>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Title</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder="e.g., Masala Papad Bruschetta"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Image URL (optional)</label>
                <input
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder="https://..."
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Steps (one per line)</label>
                <textarea
                  value={form.steps}
                  onChange={(e) => setForm({ ...form, steps: e.target.value })}
                  rows={6}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder={"1. Roast papadam\n2. Top with veggies\n3. Serve immediately"}
                />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-white shadow hover:bg-orange-700">
                <Send size={16} /> Submit Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
