// App.jsx
import { useState } from "react";
import Navbar from "./screens/Navbar";
import Hero from "./screens/Hero";
import Products from "./screens/Products";
import Testimonials from "./screens/Testimonials";
import SponsoredMarquee from "./screens/Sponsor";
import Footer from "./screens/Footer";
import About from "./screens/About";
import Contact from "./screens/Contact";
import PromoBanner from "./screens/PromoBanner";
import FAQSection from "./screens/Faq";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar cartCount={cartCount} />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Testimonials />
      <SponsoredMarquee />
      <Footer />
    </div>
  );
}
