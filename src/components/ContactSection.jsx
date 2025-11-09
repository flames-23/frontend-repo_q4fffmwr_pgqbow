import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name || "there"}! We'll get back to you at ${form.email}.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-gradient-to-t from-white to-orange-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Get in touch
            </h2>
            <p className="mt-2 text-gray-600">
              Wholesale enquiries, retail partnerships, or feedback — we’d love to hear from you.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-center gap-3"><Mail className="text-orange-600" size={18} /><span>hello@skpapadam.com</span></li>
              <li className="flex items-center gap-3"><Phone className="text-orange-600" size={18} /><span>+91 98765 43210</span></li>
              <li className="flex items-center gap-3"><MapPin className="text-orange-600" size={18} /><span>SK Papadam HQ, Ahmedabad, India</span></li>
            </ul>
            <div className="mt-6">
              <iframe
                title="SK Papadam HQ"
                className="w-full h-56 rounded-xl border"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.5%2C22.9%2C73.3%2C23.2&layer=mapnik"
              />
            </div>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={6}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder="Tell us about your requirements"
                  required
                />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-white shadow hover:bg-orange-700">
                <Send size={16} /> Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
