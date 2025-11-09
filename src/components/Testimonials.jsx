import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Radhika S.",
    text: "The crunch is unbeatable and flavors are authentic. My go-to for entertaining!",
  },
  {
    name: "Chef Arjun",
    text: "Consistent quality that our restaurant can rely on. Wholesale orders are seamless.",
  },
  {
    name: "Global Foods Importers",
    text: "Fantastic partner for international retail. SK Papadam delivers on time, every time.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Loved by Food Lovers & Chefs
          </h2>
          <p className="mt-2 text-gray-600">Hear from our community around the world.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <figure key={idx} className="rounded-2xl border border-orange-100 bg-gradient-to-b from-orange-50 to-white p-6 shadow-sm">
              <Quote className="text-orange-500 mb-3" />
              <blockquote className="text-gray-700">“{t.text}”</blockquote>
              <figcaption className="mt-4 font-semibold text-gray-900">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
