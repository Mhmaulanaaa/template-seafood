import { motion } from "framer-motion";
import { Star, UtensilsCrossed } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Chef Rendra Putra",
    text: "Kualitas ikan dan udangnya selalu segar. Pengiriman tepat waktu membuat dapur restoran kami berjalan tanpa hambatan.",
    role: "Head Chef • Restoran Laut Bahari",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Michael Santoso",
    text: "Supplier yang sangat profesional. Produk konsisten berkualitas tinggi sehingga menu seafood kami selalu mendapat review positif.",
    role: "Owner • BlueWave Seafood Grill",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Chef Adelia Marisa",
    text: "Kami sangat terbantu dengan stok yang stabil dan proses pemesanan yang cepat. Sangat direkomendasikan untuk restoran premium.",
    role: "Executive Chef • OceanMint Dining",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=47",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent flex justify-center items-center gap-3">
        <UtensilsCrossed className="w-8 h-8" /> Apa Kata Restoran Mitra?
      </h2>

      <div className="max-w-5xl mx-auto space-y-10 px-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-teal-600 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-5 mb-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star
                  key={idx}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 leading-relaxed italic text-[15px]">
              “{t.text}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
