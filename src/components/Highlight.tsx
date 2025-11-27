"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import HighlightModal from "./sub-components/highlight-modal";

interface Product {
  id: number;
  name: string;
  desc: string;
  longDesc: string;
  imgUrl: string;
  customClass: string;
}

const highlightProducts: Product[] = [
  {
    id: 1,
    name: "Baju Batik Tulis",
    desc: "Koleksi Premium",
    longDesc:
      "Dibuat dengan teknik tulis tradisional menggunakan bahan sutra premium. Motif Parang Rusak memberikan kesan elegan dan berkelas untuk acara formal.",
    imgUrl: "/herobg1.jpg",
    customClass: "md:col-span-1 md:row-span-2 h-[280px] md:h-full",
  },
  {
    id: 2,
    name: "Aksesoris Etnik",
    desc: "Handcrafted",
    longDesc:
      "Lengkapi penampilan Anda dengan koleksi aksesoris handmade. Mulai dari kalung etnik hingga gelang tenun yang dibuat oleh pengrajin lokal Surakarta.",
    imgUrl: "/herobg1.jpg",
    customClass: "md:col-span-1 md:row-span-2 h-[280px] md:h-full",
  },
  {
    id: 3,
    name: "Celana Batik",
    desc: "Casual Comfort",
    longDesc:
      "Celana santai dengan potongan loose fit. Menggunakan pewarna alam indigo yang ramah lingkungan dan sejuk dipakai seharian.",
    imgUrl: "/herobg1.jpg",
    customClass: "md:col-span-2 md:row-span-1 h-[220px] md:h-[260px]",
  },
  {
    id: 4,
    name: "Kain Batik Tulis",
    desc: "Masterpiece",
    longDesc:
      "Mahakarya batik tulis asli dengan detail pengerjaan hingga 3 bulan. Cocok untuk bahan kemeja premium atau koleksi pribadi.",
    imgUrl: "/herobg1.jpg",
    customClass: "md:col-span-2 md:row-span-1 h-[220px] md:h-[260px]",
  },
];

export default function Highlight() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col items-center mb-12">
        <span className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
          Pilihan Terbaik
        </span>
        <h2 className="text-center font-extrabold text-4xl md:text-5xl text-foreground tracking-tight">
          HIGHLIGHTS
        </h2>
        <div className="mt-4 h-1.5 w-20 bg-primary rounded-full" />
        <p className="mt-4 text-muted-foreground text-center max-w-lg">
          Klik pada gambar untuk melihat detail koleksi pilihan terbaik kami
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[560px]">
        {highlightProducts.map((prd) => (
          <div
            key={prd.id}
            className={`relative group overflow-hidden rounded-2xl shadow-md cursor-pointer ${prd.customClass}`}
            onClick={() => setSelectedProduct(prd)}
          >
            <Image
              src={prd.imgUrl || "/placeholder.svg"}
              alt={prd.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                <div className="bg-primary/90 backdrop-blur-sm p-2 rounded-full text-primary-foreground">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary text-xs font-bold uppercase tracking-wider">
                  {prd.desc}
                </span>
                <h3 className="text-white font-bold text-xl md:text-2xl mt-1">
                  {prd.name}
                </h3>
                <p className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Klik untuk detail
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <HighlightModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        image={selectedProduct?.imgUrl || ""}
        title={selectedProduct?.name || ""}
        description={selectedProduct?.longDesc || ""}
      />
    </section>
  );
}
