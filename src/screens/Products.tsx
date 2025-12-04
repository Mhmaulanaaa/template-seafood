import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const products = [
  {
    id: 1,
    name: "Udang Putih",
    category: "Udang",
    img: "https://www.marketresearchintellect.com/images/blogs/rising-tide-the-surge-of-farmed-whiteleg-shrimps-in-global-aquaculture.webp",
    rating: 5,
    price: 78000,
    description: "Udang putih segar dengan kualitas premium.",
  },
  {
    id: 2,
    name: "Udang Windu",
    category: "Udang",
    img: "https://www.deheus.id/siteassets/news/article/jejak-udang-windu/large-aqua_tiger-shrimp_close-up.jpg",
    rating: 5,
    price: 125000,
    description: "Udang Windu ukuran besar cocok untuk grill.",
  },
  {
    id: 3,
    name: "Cumi",
    category: "Cumi",
    img: "https://imgx.parapuan.co/crop/0x0:0x0/x/photo/2023/04/01/cara-olah-cumi-agar-hasilnya-tid-20230401055445.jpg",
    rating: 4,
    price: 55000,
    description: "Cumi segar daging tebal cocok untuk goreng tepung.",
  },
  {
    id: 4,
    name: "Baby Cumi",
    category: "Cumi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9wy9iQMUPiRuZnCaYt7XP1S9HNUYbYknUUrOrVt4zcQtuQgnbSGZw8ZSoO1Psshf90S4&usqp=CAU",
    rating: 4,
    price: 48000,
    description: "Baby cumi segar cocok untuk sambal dan tumis.",
  },
  {
    id: 5,
    name: "Bekutak",
    category: "Seafood",
    img: "https://ratupasar.com/assets/image/product/Blekutak%20blakutak%20500%20gramOQnYJ.jpg",
    rating: 4,
    price: 35000,
    description: "Bekutak segar kualitas terbaik.",
  },
  {
    id: 6,
    name: "Bandeng",
    category: "Ikan Laut",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1P0uh_l9kjybfZzTlqRgfQKx-W1n-YtvVg&s",
    rating: 5,
    price: 35000,
    description: "Ikan bandeng segar kaya nutrisi.",
  },
  {
    id: 7,
    name: "Kepiting",
    category: "Crab",
    img: "https://mangrovemagz.com/wp-content/uploads/ExternalLink_Kepiting20Bakau.jpg",
    rating: 5,
    price: 160000,
    description: "Kepiting segar daging tebal kualitas restoran.",
  },
  {
    id: 8,
    name: "Kerang Batik",
    category: "Kerang",
    img: "https://cdn.rri.co.id/berita/Bengkalis/o/1746890381729-60e4454a6a7c5cb3c241115381ec1ea0/f7m7763quw5kcwx.jpeg",
    rating: 4,
    price: 28000,
    description: "Kerang batik segar cocok untuk tumis pedas.",
  },
  {
    id: 9,
    name: "Kerang Ijo",
    category: "Kerang",
    img: "https://awsimages.detik.net.id/community/media/visual/2021/06/03/resep-kerang-hijau-saus-tiram_43.jpeg?w=650",
    rating: 5,
    price: 26000,
    description: "Kerang ijo fresh cocok untuk rebusan dan saus padang.",
  },
  {
    id: 10,
    name: "Kerang Dara",
    category: "Kerang",
    img: "https://dkpp.bulelengkab.go.id/uploads/konten/teknik-budidaya-kerang-darah-untuk-pemula-56.jpg",
    rating: 4,
    price: 30000,
    description: "Kerang dara segar terbaik untuk seafood mix.",
  },
  {
    id: 11,
    name: "Kakap",
    category: "Ikan Laut",
    img: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1748576781/attached_image/ikan-kakap-inilah-kandungan-nutrisi-dan-manfaatnya.jpg",
    rating: 5,
    price: 85000,
    description: "Ikan kakap merah segar daging tebal.",
  },
  {
    id: 12,
    name: "Nila",
    category: "Ikan Air Tawar",
    img: "https://awsimages.detik.net.id/community/media/visual/2021/04/09/fakta-ikan-nila.jpeg?w=600&q=90",
    rating: 4,
    price: 35000,
    description: "Ikan nila segar cocok untuk goreng dan bakar.",
  },
  {
    id: 13,
    name: "Patin",
    category: "Ikan Air Tawar",
    img: "https://cdn.rri.co.id/berita/Bengkalis/o/1720109014696-cara-membersihkan-ikan-patinjpg-20230203105439/v0e0u328ikhsxa8.jpeg",
    rating: 4,
    price: 30000,
    description: "Ikan patin segar cocok untuk sup dan asam pedas.",
  },
  {
    id: 14,
    name: "Ikan Mas",
    category: "Ikan Air Tawar",
    img: "https://png.pngtree.com/thumb_back/fh260/background/20250323/pngtree-fresh-seafood-display-at-fish-market-food-fish-counter-proteins-photo-photo-image_66454312.webp",
    rating: 4,
    price: 32000,
    description: "Ikan mas fresh kualitas premium.",
  },
  {
    id: 15,
    name: "Dori",
    category: "Fillet",
    img: "https://indoblonjo2020.wordpress.com/wp-content/uploads/2020/06/ikan-dori-fillet.jpg?w=1200",
    rating: 4,
    price: 42000,
    description: "Ikan dori fillet lembut cocok untuk anak-anak.",
  },
  {
    id: 16,
    name: "Lobster",
    category: "Seafood Premium",
    img: "https://pict.sindonews.net/dyn/850/pena/news/2020/07/26/713/113940/harga-lobster-anjlok-nelayan-di-pangkep-enggan-jual-hasil-panen-kff.jpg",
    rating: 5,
    price: 220000,
    description: "Lobster segar ukuran besar kualitas premium.",
  },
];

export default function Products() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // buka modal
  const openModal = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  // navigasi modal
  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  // tampilkan 6 atau semua
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <section
      id="products"
      className="min-h-screen px-6 py-25 max-w-6xl mx-auto"
    >
      <h3 className="text-4xl font-extrabold text-center mb-5 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        Produk Laut Segar Unggulan
      </h3>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Pilihan terbaik untuk kebutuhan seafood harian Anda — segar, premium,
        dan higienis.
      </p>

      {/* GRID PRODUK */}
      <div className="grid md:grid-cols-3 gap-10">
        {visibleProducts.map((p) => {
          const originalIndex = products.indexOf(p);
          return (
            <ProductCard
              key={p.id}
              product={p}
              onClick={() => openModal(originalIndex)}
            />
          );
        })}
      </div>

      {/* BUTTON LIHAT SEMUA */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 from-blue-600 to-cyan-500 bg-gradient-to-r text-white rounded-xl hover:bg-blue-700 transition cursor-pointer"
        >
          {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Produk"}
        </button>
      </div>

      {/* MODAL */}
      {open && (
        <ProductModal
          products={products}
          index={currentIndex}
          close={() => setOpen(false)}
          next={nextProduct}
          prev={prevProduct}
        />
      )}
    </section>
  );
}
