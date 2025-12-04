import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        bg-gradient-to-r from-purple-600 to-pink-500
        rounded-1xl p-8 text-white text-center shadow-lg my-10
      "
    >
      {/* Mini Tagline */}
      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
        ⭐ Promo Terbatas
      </span>

      {/* Title */}
      <h3 className="text-3xl md:text-4xl font-extrabold mt-3">
        Diskon Template Premium Hingga 60%
      </h3>

      {/* Subtitle */}
      <p className="mt-2 text-sm md:text-base opacity-90">
        Berlaku untuk semua template React, Next.js, Vue, dan Figma.
      </p>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="
          mt-6 px-6 py-3 bg-white text-purple-700 
          rounded-xl font-semibold shadow-md
        "
      >
        Lihat Promo
      </motion.button>
    </motion.div>
  );
}
