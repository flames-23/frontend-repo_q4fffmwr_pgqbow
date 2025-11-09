import HeroSection from "./components/HeroSection";
import ProductCatalog from "./components/ProductCatalog";
import RecipeSection from "./components/RecipeSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <HeroSection />
      <main>
        <ProductCatalog />
        <RecipeSection />
        <Testimonials />
        <ContactSection />
      </main>
      <footer className="border-t border-orange-100">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} SK Papadam. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#products" className="hover:text-orange-700">Products</a>
            <a href="#recipes" className="hover:text-orange-700">Recipes</a>
            <a href="#contact" className="hover:text-orange-700">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
