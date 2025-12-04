import { Fish, Shrimp, Shell, Truck, ShieldCheck, Waves } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: Fish,
      label: "Ikan Segar Setiap Hari",
      desc: "Dipanen langsung dari nelayan terpercaya dan dikirim cepat ke dapur Anda.",
    },
    {
      icon: Shrimp,
      label: "Udang & Cumi Premium",
      desc: "Kualitas terbaik untuk restoran, hotel, dan kebutuhan kuliner profesional.",
    },
    {
      icon: Truck,
      label: "Pengiriman Cepat & Aman",
      desc: "Rantai distribusi dingin terjaga untuk menjaga kesegaran maksimal.",
    },
    {
      icon: Waves,
      label: "Sumber Laut Berkelanjutan",
      desc: "Bekerja sama dengan pemasok yang menjaga kelestarian laut.",
    },
    {
      icon: ShieldCheck,
      label: "Standar Mutu Tinggi",
      desc: "Produk diverifikasi kebersihan, kesegaran, dan kualitasnya.",
    },
    {
      icon: Shell,
      label: "Siap Suplai Restoran",
      desc: "Stok stabil untuk kebutuhan harian restoran, cafe, dan catering.",
    },
  ];

  return (
    <section id="about">
      <div className="py-22 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Tentang Kami
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Kami adalah pemasok seafood premium yang berfokus pada pengiriman
            ikan, udang, cumi, dan hasil laut segar berkualitas tinggi langsung
            ke restoran. Dengan sistem distribusi modern, kami memastikan setiap
            pesanan tiba dalam kondisi terbaik.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500"
            >
              <div className="rounded-2xl bg-white p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <item.icon className="w-12 h-12 mx-auto text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-1">{item.label}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
