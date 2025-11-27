"use client";

import { X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
    likes: number;
  } | null;
  isWishlisted: boolean;
  onToggleWishlist: (id: number) => void;
}

const ProductDetailModal = ({
  isOpen,
  onClose,
  product,
  isWishlisted,
  onToggleWishlist,
}: ProductDetailModalProps) => {
  if (!isOpen || !product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Gelap */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl pointer-events-auto relative flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Tombol Close (Pojok Kanan Atas Modal) */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 z-30 bg-white/50 hover:bg-white rounded-full text-black shadow-sm backdrop-blur-md"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>

              {/* --- BAGIAN KIRI: GAMBAR --- */}
              <div className="relative w-full h-72 md:h-auto md:w-1/2 bg-gray-100 shrink-0 group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />

                {/* 1. Indikator Jumlah Likes (Kiri Bawah) */}
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1.5 rounded-full flex items-center gap-2 backdrop-blur-md text-sm md:text-base pointer-events-none">
                  <Heart className="h-4 w-4 fill-white text-white" />
                  <span className="font-semibold">{product.likes}</span>
                </div>

                {/* 2. TOMBOL LIKE INTERAKTIF (Kanan Bawah) - FITUR BARU */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Mencegah klik tembus ke elemen lain
                    onToggleWishlist(product.id);
                  }}
                  className="absolute bottom-4 right-4 p-3 rounded-full bg-white/90 hover:bg-white text-black shadow-lg transition-all active:scale-90 hover:scale-110 z-20 group/heart"
                >
                  <Heart
                    className={`w-6 h-6 transition-colors duration-300 ${
                      isWishlisted
                        ? "fill-red-500 text-red-500" // Jika sudah di-like: Merah Penuh
                        : "text-gray-700 group-hover/heart:text-red-500" // Jika belum: Abu-abu, hover jadi merah
                    }`}
                  />
                </button>
              </div>

              {/* --- BAGIAN KANAN: KONTEN --- */}
              <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-1/2 overflow-y-auto bg-white">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#4158A6] mb-2 leading-tight">
                    {product.name}
                  </h2>
                  <div className="w-12 h-1.5 bg-[#4158A6] rounded-full mb-5" />

                  <p className="text-gray-600 mb-6 leading-relaxed text-base">
                    {product.description}
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#4158A6]">
                    <p className="text-sm text-gray-500 italic">
                      "Kombinasi sempurna antara warisan budaya dan gaya modern.
                      Dibuat dengan bahan premium untuk kenyamanan maksimal."
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mt-8 pt-6 border-t border-gray-100">
                  {/* Tombol Wishlist Besar */}
                  <Button
                    variant={isWishlisted ? "default" : "outline"}
                    className={`w-full py-6 text-lg font-semibold transition-all ${
                      isWishlisted
                        ? "bg-[#4158A6] hover:bg-[#2e3f7a]"
                        : "border-[#4158A6] text-[#4158A6] hover:bg-[#4158A6]/5"
                    }`}
                    onClick={() => onToggleWishlist(product.id)}
                  >
                    <Heart
                      className={`h-5 w-5 mr-2 transition-transform ${
                        isWishlisted ? "fill-white scale-110" : ""
                      }`}
                    />
                    {isWishlisted
                      ? "Tersimpan di Wishlist"
                      : "Simpan ke Wishlist"}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailModal;
