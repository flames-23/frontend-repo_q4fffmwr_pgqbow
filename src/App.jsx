import React from 'react';
import HeroSection from './components/HeroSection';
import ProductCatalog from './components/ProductCatalog';
import RecipeSection from './components/RecipeSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-inter text-zinc-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#about" className="text-lg font-bold tracking-tight text-orange-700">SK Papadam</a>
          <nav className="hidden gap-6 text-sm font-medium text-zinc-700 sm:flex">
            <a href="#about" className="hover:text-orange-700">About</a>
            <a href="#products" className="hover:text-orange-700">Products</a>
            <a href="#recipes" className="hover:text-orange-700">Recipes</a>
            <a href="#testimonials" className="hover:text-orange-700">Testimonials</a>
            <a href="#contact" className="hover:text-orange-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <HeroSection />
        <ProductCatalog />
        <RecipeSection />
        <Testimonials />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-100 bg-orange-50/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} SK Papadam. All rights reserved.</p>
          <nav className="flex gap-4 text-sm">
            <a href="#about" className="hover:text-orange-700">About</a>
            <a href="#products" className="hover:text-orange-700">Products</a>
            <a href="#recipes" className="hover:text-orange-700">Recipes</a>
            <a href="#contact" className="hover:text-orange-700">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
