import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Get in touch</h2>
        <p className="mt-2 text-zinc-600">Questions, bulk orders, or distributor inquiries — we’re here to help.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 text-zinc-800">
            <Phone className="h-5 w-5 text-orange-600" />
            <a href="tel:+9172405105353" className="hover:underline">+91 72405 105353</a>
          </div>
          <div className="flex items-center gap-3 text-zinc-800">
            <Mail className="h-5 w-5 text-orange-600" />
            <a href="mailto:hello@skpapadam.com" className="hover:underline">hello@skpapadam.com</a>
          </div>
          <div className="flex items-center gap-3 text-zinc-800">
            <MapPin className="h-5 w-5 text-orange-600" />
            <span>Surat, Gujarat, India</span>
          </div>
        </div>

        <iframe
          title="Our location"
          className="min-h-[280px] w-full rounded-2xl border border-orange-100 shadow-sm lg:col-span-2"
          src="https://www.google.com/maps?q=Surat%2C%20Gujarat&output=embed"
          loading="lazy"
        />
      </div>
    </section>
  );
}
