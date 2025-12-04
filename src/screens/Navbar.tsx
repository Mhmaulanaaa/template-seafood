import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar({ cartCount }: { cartCount: number }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "products", "about", "contact"];

      const scrollPos = window.scrollY + 120;
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          if (
            scrollPos >= element.offsetTop &&
            scrollPos < element.offsetTop + element.offsetHeight
          ) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeSection, setActiveSection] = useState<string>("home");
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LEFT — LOGO */}
        <a href="#home" className="flex items-center gap-2">
          <img src="logo/logo.png" alt="Logo" className="h-15 object-contain" />
          <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
            Alfi Seafood
          </h1>
        </a>

        {/* CENTER NAV — DESKTOP */}
        <div className="hidden md:flex gap-8 font-medium text-gray-700">
          {["home", "products", "about", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`transition-colors duration-200 ${
                activeSection === section
                  ? " from-blue-600 to-cyan-500 bg-clip-text text-transparent bg-gradient-to-r"
                  : "hover:text-cyan-600 text-gray-700"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* RIGHT — CART + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* CART */}
          <button className="relative bg-white/60 backdrop-blur-md p-2 rounded-full border border-gray-200 hover:border-purple-400 transition">
            <ShoppingCart size={18} className="text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* CTA BUTTON */}
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full shadow-md transition-all">
            Shop Now
          </Button>
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 text-lg shadow-inner">
          <a href="#hero" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#products" onClick={() => setOpen(false)}>
            Products
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

          <div className="flex items-center gap-4 mt-3">
            <button className="relative bg-white/60 backdrop-blur-md p-2 rounded-full border border-gray-200">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <Button className="bg-purple-600 hover:bg-purple-700 w-full">
              Shop Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
