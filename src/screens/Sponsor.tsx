import { motion } from "framer-motion";

// Example sponsors — replace with your own
const sponsors = [
  "https://www.bimagroup.id/wp-content/uploads/2022/10/Bima_Restaurant_No-Background.png",
  "https://menufyproduction.imgix.net/638805120972706312+1733204.png?auto=compress,format&h=1080&w=1920&fit=max",
  "https://s3.impgroup.co.id/imp-web/subsidiary/logo/a968b75eef91763b3ddfb00593d6d82c_thumbnails_1170x450.png",
  "https://bonamigroup.com/web/menu/images/bonami-restaurant-logo.png",
  "https://royalplazasurabaya.com/storage/app/uploads/public/600/7c1/380/6007c13801b7a878001547.png",
  "https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/11d450dd12b303738572e15cada8b112.png",
  "https://i0.wp.com/laplazalamongan.wordpress.com/wp-content/uploads/2021/07/42160608_300495467347250_7991450836540588032_n.png?resize=909%2C458&ssl=1",
];

export default function SponsoredMarquee() {
  const marqueeItems = [...sponsors, ...sponsors];

  return (
    <div className="w-full py-10 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold  bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
        Restaurant Kepercayaan Kami
      </h1>

      <div className="w-full max-w-7xl overflow-hidden py-6 relative bg-transparent backdrop-blur-xl">
        {/* TOP MARQUEE */}
        <div className="overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex gap-16 py-3 items-center"
            animate={{ x: [0, -500] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          >
            {marqueeItems.map((logo, index) => (
              <img
                key={`top-${index}`}
                src={logo}
                alt="sponsor"
                className="h-12 w-auto opacity-70 hover:opacity-100 transition duration-300"
              />
            ))}
          </motion.div>
        </div>

        {/* DIVIDER */}
        {/* <div className="h-px bg-gray-200 my-4" /> */}

        {/* BOTTOM MARQUEE (REVERSE DIRECTION) */}
        <div className="overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex gap-16 py-3 items-center"
            animate={{ x: [-500, 0] }}
            transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
          >
            {marqueeItems.map((logo, index) => (
              <img
                key={`bot-${index}`}
                src={logo}
                alt="sponsor"
                className="h-12 w-auto opacity-70 hover:opacity-100 transition duration-300"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
