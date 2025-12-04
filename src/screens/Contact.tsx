import { motion } from "framer-motion";
import { Mail, MessageCircle, Instagram, Send, Fish } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+62 812-3456-7890",
      color: "text-green-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: "support@seafoodfresh.id",
      color: "text-blue-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@seafoodfresh.id",
      color: "text-pink-600",
    },
  ];

  return (
    <section id="contact">
      <div className="py-25 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="from-blue-600 to-cyan-500 bg-clip-text text-transparent bg-gradient-to-r font-semibold tracking-wide flex justify-center items-center gap-2">
            <Fish className="w-5 h-5 text-blue-400" /> Pesan Seafood Segar?
          </span>

          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Hubungi Kami Langsung
          </h1>

          <p className="text-gray-600 mb-8">
            Kami siap membantu pemesanan ikan, udang, cumi, dan produk laut
            lainnya untuk kebutuhan restoran Anda.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-4 mb-12">
          {contacts.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className=" rounded-2xl  border border-blue-500"
            >
              <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 text-center cursor-pointer hover:shadow-xl transition">
                <c.icon className={`w-8 h-8 mx-auto mb-3 ${c.color}`} />
                <h4 className="font-semibold text-gray-800">{c.label}</h4>
                <p className="text-sm text-gray-600 mt-1">{c.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-blue-500"
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
            Form Pemesanan & Pertanyaan
          </h3>

          <form className="space-y-4">
            <div>
              <label className="text-gray-700 font-medium">Nama</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-blue-500 rounded-xl focus:ring-2 focus:ring-teal-500"
                placeholder="Nama lengkap"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-3 border border-blue-500 rounded-xl focus:ring-2 focus:ring-teal-500"
                placeholder="email@restoran.com"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Pesan</label>
              <textarea
                className="w-full mt-1 p-3 h-32 border border-blue-500 rounded-xl focus:ring-2 focus:ring-teal-500"
                placeholder="Tulis kebutuhan seafood Anda..."
              ></textarea>
            </div>

            <button className="w-full from-blue-600 to-cyan-500 bg-gradient-to-r text-white rounded-xl hover:bg-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer">
              <Send className="w-5 h-5" />
              Kirim Pesan
            </button>
          </form>

          <div className="mt-6 text-center text-gray-500 text-sm">
            Atau hubungi langsung:
            <div className="flex justify-center items-center gap-2 mt-1">
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium text-gray-700">
                +62 812-3456-7890
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
