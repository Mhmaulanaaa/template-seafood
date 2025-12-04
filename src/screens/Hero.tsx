// HeroSliderPremium.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSliderPremium() {
  const navigate = useNavigate();
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1600&auto=format",
      title: "Seafood Segar Kualitas Premium",
      desc: "Udang windu, cumi, dan ikan segar langsung dari laut.",
    },
    {
      img: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1600&auto=format",
      title: "Panen Hari Ini, Kirim Hari Ini",
      desc: "Kesegaran terjaga dengan standar cold chain terbaik.",
    },
    {
      img: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1600&auto=format",
      title: "Premium Packaging, Harga Bersahabat",
      desc: "Pengemasan higienis dan aman sampai tujuan.",
    },
  ];

  return (
    <section className="relative w-full h-[100vh] overflow-hidden" id="home">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 3500 }}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i} className="relative">
            <div
              className="w-full h-full bg-cover bg-center absolute inset-0"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent"></div>

              {/* TEXT WRAPPER */}
              <div className="absolute inset-0 flex flex-col justify-center items-start px-12 md:px-24 pointer-events-none">
                <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg max-w-2xl transition-all duration-[900ms]">
                  {s.title}
                </h1>

                <p className="text-white/80 text-lg mt-4 max-w-xl drop-shadow transition-all duration-[900ms]">
                  {s.desc}
                </p>

                <div className="flex mt-8 gap-4 pointer-events-auto">
                  <button
                    className="px-6 py-3 bg-white text-black rounded-xl shadow hover:bg-neutral-200 cursor-pointer"
                    onClick={() => {
                      const section = document.getElementById("products");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Lihat Produk
                  </button>

                  <button
                    className="px-6 py-3 border border-white text-white rounded-xl hover:bg-white/10 cursor-pointer"
                    onClick={() => {
                      const section = document.getElementById("contact");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
