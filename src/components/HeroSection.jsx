import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="about" className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-orange-50 to-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IWEIbUehLbfUBd3s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center sm:py-28">
        <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800 ring-1 ring-orange-200">
          Authentic • Handcrafted • Crispy Delight
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
          SK Papadam
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-700 sm:text-lg">
          Taste the tradition. Premium papad made with select lentils and spices, 
          rolled thin for that perfect crunch.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Shop Products
            <ShoppingBag className="h-5 w-5" />
          </a>
          <a
            href="#recipes"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-orange-700 ring-1 ring-orange-200 transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Explore Recipes
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
