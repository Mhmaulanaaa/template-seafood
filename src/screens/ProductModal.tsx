import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: number;
  name: string;
  category?: string;
  img: string;
  rating?: number;
  price: number;
  description?: string;
}

interface ProductModalProps {
  products: Product[];
  index: number;
  close: () => void;
  next: () => void;
  prev: () => void;
}

export default function ProductModal({
  products,
  index,
  close,
  next,
  prev,
}: ProductModalProps) {
  const product = products[index];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 14 }}
          className="relative w-full max-w-lg 
             bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]
             overflow-hidden border border-gray-200"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 bg-white border-b">
            <h3 className="text-lg font-semibold from-blue-600 to-cyan-500 bg-clip-text text-transparent bg-gradient-to-r">
              Detail Produk
            </h3>
            <button
              onClick={close}
              className="text-gray-600 hover:text-black transition"
            >
              <X size={28} />
            </button>
          </div>

          {/* Image */}
          {/* Image Wrapper */}
          <div className="relative w-full h-56">
            <img src={product.img} className="w-full h-56 object-cover" />

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute top-1/2 left-0 -translate-y-1/2 
                    bg-white p-3 rounded-full shadow-lg 
                    hover:bg-blue-50 transition 
                    translate-x-2"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={next}
              className="absolute top-1/2 right-0 -translate-y-1/2 
                    bg-white p-3 rounded-full shadow-lg 
                    hover:bg-blue-50 transition 
                    -translate-x-2"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-500 text-sm mb-4">{product.category}</p>

            <p className="text-gray-700 leading-relaxed mb-4">
              {product.description}
            </p>

            <div className="flex justify-between items-center pt-3">
              <span className="text-2xl font-extrabold from-blue-600 to-cyan-500 bg-clip-text text-transparent bg-gradient-to-r">
                Rp {product.price.toLocaleString()}
              </span>

              <button className="px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:from-blue-700 hover:to-cyan-500 transition">
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
