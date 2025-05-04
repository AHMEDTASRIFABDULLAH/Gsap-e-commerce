import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="sticky top-0 bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">EcoBoost™</h1>
          <nav className="space-x-4">
            <a
              href="#features"
              className="relative group hover:text-blue-300 sm:inline-block hidden"
            >
              Features
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
            <a href="#reviews" className="relative group hover:text-blue-300">
              Reviews
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
            <Link to="/oder" className="relative group hover:text-blue-300">
              Buy Now
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            The Future of Eco-Friendly Power
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            EcoBoost™ is the compact, high-efficiency solar power bank designed
            for modern lifestyles in the US & Europe. Charge faster, last
            longer.
          </p>
          <Link  to="/oder"
            className="bg-green-600 w-full sm:w-fit py-2 cursor-pointer px-4 rounded-sm text-white font-semibold hover:bg-green-700"
            size="lg"
          >
            Buy Now
          </Link>
        </div>
        <div>
          <img
            src="https://titanwatches.com.bd/cdn/shop/files/2648WM03_67318d07-684b-4813-92ff-999584675628.jpg?v=1711699873"
            alt="EcoBoost Product"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </main>

      <section id="features" className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-8">
            Top Features
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-lg mb-2">Fast Charging</h4>
              <p>Charge your devices 2x faster with 20W solar output.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-lg mb-2">Durable Design</h4>
              <p>Water-resistant, dustproof, and built for travel.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-lg mb-2">
                Smart Compatibility
              </h4>
              <p>Works with iOS, Android, laptops, and USB-C devices.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-8">
            Customer Reviews
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow border">
              <p className="italic">
                "Absolutely love this watch! The craftsmanship is amazing, and
                it fits perfectly with my style. I wear it every day!"
              </p>
              <p className="mt-2 font-semibold">— Sarah, London ⭐⭐⭐⭐⭐</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border">
              <p className="italic">
                "Elegant, sleek, and versatile. This watch adds a touch of
                luxury to any outfit. Highly recommend!"
              </p>
              <p className="mt-2 font-semibold">— John, Paris ⭐⭐⭐⭐⭐</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border">
              <p className="italic">
                "This watch exceeded my expectations! The design is timeless,
                and the durability is top-notch. I’ve received so many
                compliments!"
              </p>
              <p className="mt-2 font-semibold">— Emily, Berlin ⭐⭐⭐⭐⭐</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border">
              <p className="italic">
                "I bought this as a gift for my husband, and he loves it! The
                quality is incredible, and it looks great for both casual and
                formal occasions."
              </p>
              <p className="mt-2 font-semibold">— Marco, Rome ⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} EcoBoost™. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
