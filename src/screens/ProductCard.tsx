import { useState } from "react";
import { Star, X } from "lucide-react";

interface Product {
  img: string;
  name: string;
  category?: string;
  rating?: number;
  price: number;
  description?: string;
}

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="rounded-2xl bg-white p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={product.img}
            className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition"
          />
        </div>

        <div className="mt-4 space-y-3">
          <p className="text-sm text-gray-500">{product.category}</p>
          <h4 className="font-bold text-lg line-clamp-2">{product.name}</h4>

          <span className="text-xl font-extrabold from-blue-600 to-cyan-500 bg-clip-text text-transparent bg-gradient-to-r">
            Rp {product.price.toLocaleString()}
          </span>

          {/* Tombol Lihat */}
          <div className="flex justify-end">
            <button
              onClick={onClick}
              className="from-blue-600 to-cyan-500 bg-clip-text text-transparent bg-gradient-to-r font-medium hover:underline flex items-center gap-1"
            >
              Lihat Detail <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
