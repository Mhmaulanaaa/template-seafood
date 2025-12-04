import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "Apa itu Template Frogs?",
      answer:
        "Template Frogs adalah marketplace template modern untuk website, landing page, dashboard, dan UI kit.",
    },
    {
      question: "Bagaimana cara membeli template?",
      answer:
        "Pilih template, klik tombol beli, dan ikuti instruksi pembayaran.",
    },
    {
      question: "Apakah ada kebijakan refund?",
      answer:
        "Ya, kami menyediakan kebijakan refund. Silakan cek halaman Refund.",
    },
    {
      question: "Apakah bisa request custom template?",
      answer:
        "Tentu, Anda bisa menghubungi kami untuk pembuatan template custom.",
    },
  ];

  return (
    <section id="faq">
      <div className="max-w-4xl mx-auto px-6 py-18">
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Frequently Asked Questions ?
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-gray-800 font-medium hover:bg-gray-100"
              >
                {faq.question}
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
