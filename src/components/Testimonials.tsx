"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

// Data dummy tanpa gambar, dengan tambahan lokasi
const testimonials = [
  {
    name: "Siti Nurhaliza",
    role: "Fashion Enthusiast",
    location: "Jakarta",
    rating: 5,
    text: "Kualitas batik SENADA sangat bagus! Motifnya unik dan bahan sangat nyaman dipakai. Sudah beli berkali-kali dan selalu puas.",
  },
  {
    name: "Budi Santoso",
    role: "Entrepreneur",
    location: "Surabaya",
    rating: 5,
    text: "Pelayanan cepat dan produk sesuai ekspektasi. Batik tulis dari SENADA menjadi pilihan favorit untuk acara formal saya.",
  },
  {
    name: "Dewi Lestari",
    role: "Designer",
    location: "Bandung",
    rating: 5,
    text: "Koleksi SENADA selalu mengikuti trend tapi tetap mempertahankan nilai tradisional batik. Sangat recommended!",
  },
  {
    name: "Ahmad Rizki",
    role: "Corporate Executive",
    location: "Yogyakarta",
    rating: 5,
    text: "Batik SENADA cocok untuk berbagai acara. Dari casual hingga formal, semuanya tersedia dengan kualitas premium.",
  },
  {
    name: "Maya Sari",
    role: "Content Creator",
    location: "Bali",
    rating: 5,
    text: "Suka banget sama desainnya yang modern! Batik SENADA bikin tampilan jadi lebih stylish dan tetap berkelas.",
  },
  {
    name: "Hendro Wijaya",
    role: "Business Owner",
    location: "Semarang",
    rating: 5,
    text: "Partner terpercaya untuk kebutuhan batik perusahaan. Kualitas konsisten dan harga kompetitif.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-white">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[30%] bg-[#4158A6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#4158A6]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-[#4158A6] tracking-widest uppercase mb-2">
              Testimonials
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              KATA MEREKA
            </h3>
            <div className="h-1.5 w-24 bg-[#4158A6] mx-auto rounded-full mb-6" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Dengarkan pengalaman autentik dari pelanggan setia yang telah
            menjadikan SENADA bagian dari gaya hidup mereka.
          </motion.p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-[#4158A6]/10 border border-gray-100 transition-all duration-300 flex flex-col justify-between h-full"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 opacity-[0.04] group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                <Quote className="h-20 w-20 text-[#4158A6] fill-[#4158A6]" />
              </div>

              {/* Konten Utama */}
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "fill-[#FE5811] text-[#FE5811]" // Warna Orange Tema
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Text Testimoni */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 italic">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>

              {/* Footer: Nama & Info (Tanpa Gambar) */}
              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-lg font-bold text-[#4158A6] mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500 font-medium">
                  {testimonial.role}{" "}
                  <span className="mx-1 text-[#FE5811]">•</span>{" "}
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100">
            <p className="text-sm text-gray-600">
              Bergabung dengan{" "}
              <span className="font-bold text-[#4158A6]">
                pelanggan setia kami
              </span>{" "}
              di seluruh Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
