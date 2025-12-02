"use client";

import { Instagram, ArrowUpRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

// Gunakan 3 Gambar Terbaik untuk Showcase
const instagramShowcase = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
    alt: "Senada OOTD",
  },
  {
    id: 2,
    image: "https://media.giphy.com/media/l0HlQ7LRalQqdWfry/giphy.gif", // GIF agar dinamis
    alt: "Behind The Scene",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000",
    alt: "New Collection",
  },
];

const InstagramSection = () => {
  return (
    <section className="py-24 bg-[#FDFBF7] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- SISI KIRI: COPYWRITING & CTA --- */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <span className="p-2 bg-[#FE5811]/10 rounded-full text-[#FE5811]">
                  <Instagram className="w-6 h-6" />
                </span>
                <span className="text-sm font-bold text-[#FE5811] tracking-widest uppercase">
                  Instagram
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-extrabold text-[#4158A6] tracking-tight mb-6">
                @senada_bynads
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
                Lebih dari sekadar katalog. Ikuti kami untuk inspirasi padu
                padan Batik, kisah para pengrajin, dan info peluncuran
                eksklusif.
              </p>

              {/* Stats Kecil (Social Proof) */}
              {/* <div className="flex justify-center lg:justify-start gap-8 mb-8">
                <div>
                  <p className="text-2xl font-bold text-[#242B47]">15.2K</p>
                  <p className="text-sm text-gray-500">Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#242B47]">850+</p>
                  <p className="text-sm text-gray-500">Posts</p>
                </div>
              </div> */}
              <Button
                // Perubahan warna di sini:
                // Ungu yang lebih soft -> Pink kemerahan yang lembut -> Oranye pastel
                className="bg-linear-to-r from-[#bc61f5] via-[#f5586e] to-[#ff9f57] text-white px-8! py-6 rounded-full text-lg shadow-xl shadow-[#f5586e]/30 transition-all hover:scale-105 hover:brightness-105"
                onClick={() =>
                  window.open("https://instagram.com/senada.bynads", "_blank")
                }
              >
                <Instagram className="w-5 h-5 mr-2" />{" "}
                {/* Tambahkan margin right biar rapi */}
                Ikuti Kami
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* --- SISI KANAN: ARTISTIC COLLAGE --- */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4 h-[250px] md:h-[400px]">
              {/* Gambar 1 (Kiri, Tinggi Penuh) */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl  group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={instagramShowcase[0].image}
                  alt={instagramShowcase[0].alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Kolom Kanan (2 Gambar Ditumpuk) */}
              <div className="flex flex-col gap-4 h-full">
                {/* Gambar 2 (Atas) */}
                <motion.div
                  className="relative flex-1 rounded-2xl overflow-hidden shadow-xl group"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Image
                    src={instagramShowcase[1].image}
                    alt={instagramShowcase[1].alt}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dekorasi Heart Icon */}
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-1.5 rounded-full text-white">
                    <Heart className="w-4 h-4 fill-white" />
                  </div>
                </motion.div>

                {/* Gambar 3 (Bawah) */}
                <motion.div
                  className="relative flex-1 rounded-2xl overflow-hidden shadow-xl group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Image
                    src={instagramShowcase[2].image}
                    alt={instagramShowcase[2].alt}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
