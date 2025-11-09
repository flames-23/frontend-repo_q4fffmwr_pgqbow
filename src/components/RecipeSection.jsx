import React, { useState } from 'react';
import { Star } from 'lucide-react';

const starterRecipes = [
  {
    id: 1,
    title: 'Masala Papad Platter',
    description: 'Crispy papad topped with onions, tomatoes, coriander, and a squeeze of lime.',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Papad Roll-ups',
    description: 'Stuff papad with spiced paneer mix, roll, and shallow fry for a party favorite.',
    rating: 4.6,
  },
  {
    id: 3,
    title: 'Tangy Papad Chaat',
    description: 'Papad chips with sweet chutney, yogurt, sev, and pomegranate.',
    rating: 4.7,
  },
];

export default function RecipeSection() {
  const [recipes, setRecipes] = useState(starterRecipes);
  const [form, setForm] = useState({ title: '', description: '' });

  const submitRecipe = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.description.trim()) return;
    setRecipes((prev) => [
      { id: Date.now(), title: form.title.trim(), description: form.description.trim(), rating: 5.0 },
      ...prev,
    ]);
    setForm({ title: '', description: '' });
  };

  return (
    <section id="recipes" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Recipes & Serving Ideas</h2>
        <p className="mt-2 text-zinc-600">Quick, flavorful ways to enjoy SK Papadam any time of day.</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
          {recipes.map((r) => (
            <article key={r.id} className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-zinc-900">{r.title}</h3>
                <div className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-orange-200">
                  <Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400" /> {r.rating}
                </div>
              </div>
              <p className="mt-2 text-sm text-zinc-600">{r.description}</p>
            </article>
          ))}
        </div>

        <form onSubmit={submitRecipe} className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-zinc-900">Submit your recipe</h3>
          <p className="mt-1 text-sm text-zinc-600">Share your favorite way to enjoy papad!</p>
          <label className="mt-4 block text-sm font-medium text-zinc-800">Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="e.g., Masala Papad Supreme"
          />
          <label className="mt-4 block text-sm font-medium text-zinc-800">Description</label>
          <textarea
            rows={4}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Brief steps or ingredients..."
          />
          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </section>
  );
}
