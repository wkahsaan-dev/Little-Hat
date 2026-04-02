/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Coffee, 
  MapPin, 
  Star, 
  Clock, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Menu as MenuIcon, 
  X,
  Utensils,
  Leaf,
  Plus
} from "lucide-react";
import { useState, useEffect } from "react";

const MENU_CATEGORIES = [
  {
    id: "coffee-tea",
    name: "Coffee & Tea",
    icon: <Coffee className="w-5 h-5" />,
    items: [
      { name: "Drip", price: "$4.00", desc: "Freshly brewed house blend" },
      { name: "Cold Brew", price: "$6.00", desc: "Slow-steeped for 18 hours" },
      { name: "Loose Leaf Tea", price: "$4.00", desc: "Herbal, Chamomile, Lemongrass, Earl Grey, Oolong, and more" },
      { name: "Iced Tea", price: "$4.50", desc: "Refreshing seasonal selection" },
    ]
  },
  {
    id: "classics",
    name: "Cafe Classics",
    icon: <Utensils className="w-5 h-5" />,
    items: [
      { name: "Espresso", price: "$4.25", desc: "Double shot of our signature blend" },
      { name: "Cortado", price: "$5.25", desc: "Equal parts espresso and steamed milk" },
      { name: "Cappuccino", price: "$5.50", desc: "Espresso with silky microfoam" },
      { name: "Flat White", price: "$5.50", desc: "Smooth espresso with thin microfoam" },
      { name: "Latte", price: "$6.00", desc: "Espresso with steamed milk" },
      { name: "Matcha", price: "$6.50", desc: "Ceremonial grade Japanese matcha" },
      { name: "Hojicha", price: "$6.50", desc: "Roasted green tea latte" },
      { name: "Chai", price: "$6.50", desc: "Spiced black tea blend" },
    ]
  },
  {
    id: "specialty",
    name: "Specialty Drinks",
    icon: <Leaf className="w-5 h-5" />,
    items: [
      { name: "Oaxaca Mocha", price: "$7.25", desc: "Espresso, chocolate, and Oaxacan spices" },
      { name: "Orange Blossom Latte", price: "$7.25", desc: "Espresso with delicate citrus notes" },
      { name: "Dirty Earl", price: "$7.25", desc: "Earl Grey latte with a shot of espresso" },
      { name: "Yuzu Matcha Lemonade", price: "$7.50", desc: "Matcha with refreshing yuzu citrus" },
      { name: "Yuzu Espresso Tonic", price: "$7.50", desc: "Espresso, yuzu, and tonic water" },
      { name: "Tamarind Espresso Tonic", price: "$7.50", desc: "Espresso, tamarind, and tonic water" },
    ]
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-coffee-200 selection:text-coffee-900">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-coffee-50/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-coffee-800 rounded-full flex items-center justify-center text-white">
              <Coffee className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-coffee-900">Little Hat Coffee</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {["Menu", "Location", "About"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-coffee-700 hover:text-coffee-900 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-coffee-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-coffee-800 transition-colors">
              Order Online
            </button>
          </div>

          <button 
            className="md:hidden text-coffee-900"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[60] bg-coffee-50 p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8 text-coffee-900" />
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-12">
              {["Menu", "Location", "About"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-serif italic text-coffee-900"
                >
                  {item}
                </a>
              ))}
              <button className="bg-coffee-900 text-white px-8 py-4 rounded-full text-lg font-medium mt-4">
                Order Online
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070" 
            alt="Coffee shop interior"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-50/50 via-transparent to-coffee-50" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-coffee-100 text-coffee-700 text-xs font-bold tracking-widest uppercase mb-6">
                Washington, DC • 14th St NW
              </span>
              <h1 className="text-6xl md:text-8xl font-serif italic text-coffee-950 leading-tight mb-8">
                Your daily ritual, <br />
                <span className="text-coffee-600">elevated.</span>
              </h1>
              <p className="text-xl text-coffee-700 mb-10 max-w-xl leading-relaxed">
                Casual coffee joint for espresso drinks, pastries and matcha beverages. Located inside Streets Market.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-coffee-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-coffee-800 transition-all hover:scale-105 shadow-lg shadow-coffee-900/20">
                  View Menu
                </button>
                <button className="bg-white text-coffee-900 border border-coffee-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-coffee-50 transition-all">
                  Get Directions
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute bottom-12 right-6 md:right-12 hidden sm:flex gap-6"
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-coffee-100">
            <div className="flex items-center gap-1 text-yellow-500 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <div className="text-2xl font-bold text-coffee-900">4.9</div>
            <div className="text-xs text-coffee-500 uppercase tracking-wider font-bold">149 Google Reviews</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-coffee-100">
            <div className="text-coffee-800 mb-1">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-coffee-900">Open Daily</div>
            <div className="text-xs text-coffee-500 uppercase tracking-wider font-bold">8:00 AM - 3:00 PM</div>
          </div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif italic text-coffee-900 mb-6">The Menu</h2>
            <p className="text-coffee-600">Carefully curated beans, artisanal pastries, and the finest ceremonial grade matcha.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {MENU_CATEGORIES.map((category, idx) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-coffee-50/50 rounded-3xl p-8 border border-coffee-100"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-coffee-200 rounded-xl flex items-center justify-center text-coffee-800">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-coffee-900">{category.name}</h3>
                </div>

                <div className="space-y-8">
                  {category.items.map((item) => (
                    <div key={item.name} className="group cursor-pointer">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-lg font-semibold text-coffee-900 group-hover:text-coffee-600 transition-colors">{item.name}</h4>
                        <span className="text-coffee-800 font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-coffee-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-coffee-100/50 rounded-2xl p-6 border border-coffee-200">
              <h4 className="text-lg font-bold text-coffee-900 mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5" /> Add Ons
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-coffee-700">Flavor (Vanilla, Oaxaca, Date Caramel, Orange Blossom, Pandan, Lavender)</span>
                  <span className="font-bold text-coffee-900">$1.25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-coffee-700">Extra Espresso Shot</span>
                  <span className="font-bold text-coffee-900">$1.75</span>
                </div>
              </div>
            </div>
            <div className="bg-matcha-50 rounded-2xl p-6 border border-matcha-100 flex items-center justify-center text-center">
              <p className="text-matcha-800 font-medium italic">
                "Non-dairy milk available at no extra charge"
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 text-coffee-900 font-bold hover:gap-4 transition-all">
              Download Full Menu <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-coffee-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif italic text-coffee-900 mb-8">Visit Us</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-coffee-800 shadow-sm shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-coffee-900 mb-1">Location</h4>
                      <p className="text-coffee-600 leading-relaxed">
                        Inside Streets Market<br />
                        2400 14th St NW<br />
                        Washington, DC 20009
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-coffee-800 shadow-sm shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-coffee-900 mb-1">Hours</h4>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-coffee-600">
                        <span>Everyday</span>
                        <span>8:00 AM - 3:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  <button className="bg-coffee-900 text-white px-8 py-4 rounded-full font-medium hover:bg-coffee-800 transition-all">
                    Get Directions
                  </button>
                  <button className="bg-white text-coffee-900 border border-coffee-200 px-8 py-4 rounded-full font-medium hover:bg-coffee-50 transition-all">
                    Call Us
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 w-full h-[400px] md:h-[500px] bg-coffee-200 rounded-[40px] overflow-hidden shadow-2xl relative">
              {/* Placeholder for Map */}
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2066" 
                alt="Map location"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-coffee-900/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-coffee-900/20 rounded-full animate-ping" />
                  <div className="w-8 h-8 bg-coffee-900 rounded-full border-4 border-white shadow-xl relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-950 text-coffee-100 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-coffee-100 rounded-full flex items-center justify-center text-coffee-950">
                  <Coffee className="w-5 h-5" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">Little Hat Coffee</span>
              </div>
              <p className="text-coffee-400 max-w-sm mb-8 leading-relaxed">
                A casual coffee joint dedicated to the art of the perfect brew and the warmth of community.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-coffee-800 flex items-center justify-center hover:bg-coffee-800 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-coffee-800 flex items-center justify-center hover:bg-coffee-800 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-coffee-400">
                <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Order Online</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-coffee-400">
                <li>2400 14th St NW</li>
                <li>Washington, DC 20009</li>
                <li>hello@littlehatcoffee.com</li>
                <li>(202) 555-0123</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-coffee-900 flex flex-col md:row justify-between items-center gap-4 text-sm text-coffee-500">
            <p>© 2024 Little Hat Coffee. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
