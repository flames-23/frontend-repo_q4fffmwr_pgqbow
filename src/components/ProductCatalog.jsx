import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Classic Urad Papadam',
    image: 'https://images.unsplash.com/photo-1604908554049-1e4d3a8b35a3?q=80&w=1600&auto=format&fit=crop',
    description: 'Traditional urad dal papad with black pepper and ajwain.',
    ingredients: 'Urad dal, Black pepper, Ajwain, Salt, Edible oil',
    nutrition: 'Per 10g: 40 kcal • Protein 2g • Carbs 6g • Fat 1g',
    price: '₹80',
    rating: 4.7,
  },
  {
    id: 2,
    name: 'Jeera Crunch Papadam',
    image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1600&auto=format&fit=crop',
    description: 'Aromatic cumin-infused papad for a bold, earthy bite.',
    ingredients: 'Urad dal, Cumin, Salt, Edible oil',
    nutrition: 'Per 10g: 38 kcal • Protein 2g • Carbs 6g • Fat 0.8g',
    price: '₹85',
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Chili Fire Papadam',
    image: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
    description: 'A spicy kick with crushed red chilies for heat lovers.',
    ingredients: 'Urad dal, Red chili, Salt, Edible oil',
    nutrition: 'Per 10g: 42 kcal • Protein 2g • Carbs 6g • Fat 1.2g',
    price: '₹90',
    rating: 4.5,
  },
];

export default function ProductCatalog() {
  return (
    <section id="products" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Our Products</h2>
          <p className="mt-2 text-zinc-600">Handcrafted varieties to match every taste and mood.</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.id} className="group flex flex-col overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition hover:shadow-md">
            <div className="relative aspect-video overflow-hidden">
              <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-orange-200">
                <Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400" /> {p.rating}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-600">{p.description}</p>
              </div>
              <div className="rounded-lg bg-orange-50 p-3 text-sm text-orange-900 ring-1 ring-orange-100">
                <p><span className="font-medium">Ingredients:</span> {p.ingredients}</p>
                <p className="mt-1"><span className="font-medium">Nutrition:</span> {p.nutrition}</p>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-bold text-zinc-900">{p.price}</span>
                <button className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  <ShoppingCart className="h-4 w-4" /> Add
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
