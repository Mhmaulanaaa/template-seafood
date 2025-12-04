import {
  Facebook,
  Instagram,
  Mail,
  Github,
  Fish,
  Waves,
  Shrimp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shrimp className="w-7 h-7 text-blue-500" />
            <h3 className="text-2xl font-bold text-white">Alfi Seafood</h3>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm">
            Pemasok seafood segar (ikan, udang, cumi) untuk restoran, hotel, dan
            industri kuliner. Pengiriman cepat, kualitas premium.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-white transition" href="/about">
                Tentang Kami
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="/contact">
                Kontak
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="/products">
                Produk Seafood
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="/pricing">
                Harga Grosir
              </a>
            </li>
          </ul>
        </div>

        {/* Bantuan */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Bantuan</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-white transition" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Cara Pemesanan
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Kebijakan Pengiriman
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Support 24/7
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Waves className="w-5 h-5 text-blue-500" /> Ikuti Kami
          </h4>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-teal-600 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-teal-600 transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-teal-600 transition"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-teal-600 transition"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            Butuh pasokan seafood rutin?
            <a
              href="/contact"
              className="text-blue-500 underline hover:text-white ml-1"
            >
              Hubungi kami
            </a>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SeafoodFresh. Semua hak dilindungi.
      </div>
    </footer>
  );
}
