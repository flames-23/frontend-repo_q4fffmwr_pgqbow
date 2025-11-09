import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Aarav', text: 'Crispy, flavorful, and always fresh. Our family favorite with every meal!', rating: 5 },
  { id: 2, name: 'Meera', text: 'The jeera papad has the perfect aroma. Love the consistent quality.', rating: 5 },
  { id: 3, name: 'Rahul', text: 'Great crunch and spice balance. Pairs perfectly with chai!', rating: 4 },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">What People Say</h2>
        <p className="mt-2 text-zinc-600">Real voices from our happy customers.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote key={t.id} className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < t.rating ? 'fill-orange-400 text-orange-400' : 'text-zinc-300'}`} />
              ))}
            </div>
            <p className="mt-3 text-zinc-700">“{t.text}”</p>
            <footer className="mt-4 text-sm font-medium text-zinc-900">— {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
