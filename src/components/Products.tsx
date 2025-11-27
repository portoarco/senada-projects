"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Heart } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import ProductDetailModal from "./sub-components/product-detail-modal"; // Pastikan path import benar

// Data dummy dengan likes statis
const allProducts = [
  {
    id: 1,
    name: "Kemeja Batik Modern",
    description: "Kemeja batik dengan motif kontemporer untuk tampilan elegan.",
    image: "/assets/1.jpeg",
    likes: 124,
  },
  {
    id: 2,
    name: "Blouse Tenun",
    description: "Blouse wanita bahan tenun asli yang nyaman.",
    image: "/assets/2.jpeg",
    likes: 85,
  },
  {
    id: 3,
    name: "Celana Kulot",
    description: "Celana kulot santai dengan sentuhan etnik.",
    image: "/assets/1.jpeg",
    likes: 342,
  },
  {
    id: 4,
    name: "Scarf Sutra",
    description: "Scarf lembut berbahan sutra motif batik.",
    image: "/assets/2.jpeg",
    likes: 99,
  },
  {
    id: 5,
    name: "Tas Handmade",
    description: "Tas tangan anyaman buatan pengrajin lokal.",
    image: "/assets/1.jpeg",
    likes: 210,
  },
  {
    id: 6,
    name: "Outer Viscose",
    description: "Outer ringan bahan viscose yang mewah.",
    image: "/assets/2.jpeg",
    likes: 156,
  },
  {
    id: 7,
    name: "Outer Viscose",
    description: "Outer ringan bahan viscose yang mewah.",
    image: "/assets/2.jpeg",
    likes: 156,
  },
  {
    id: 8,
    name: "Outer Viscose",
    description: "Outer ringan bahan viscose yang mewah.",
    image: "/assets/2.jpeg",
    likes: 156,
  },
  {
    id: 9,
    name: "Outer Viscose",
    description: "Outer ringan bahan viscose yang mewah.",
    image: "/assets/2.jpeg",
    likes: 156,
  },
];

interface ProductsSectionProps {
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
}

const ProductsSection = ({
  wishlist,
  onToggleWishlist,
}: ProductsSectionProps) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof allProducts)[0] | null
  >(null);

  const displayedProducts = showAll ? allProducts : allProducts.slice(0, 6);

  return (
    <>
      <section id="products" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-primary tracking-widest uppercase mb-2 block">
              Koleksi Terbaru
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              PRODUK KAMI
            </h2>
            <div className="mt-4 h-1.5 w-20 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Temukan koleksi batik modern yang memadukan tradisi dengan gaya
              kontemporer
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="relative aspect-square overflow-hidden cursor-pointer group bg-card rounded-xl shadow-sm"
                onClick={() => setSelectedProduct(product)}
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(product.id);
                  }}
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-card/80 backdrop-blur-sm shadow-md hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`h-5 w-5 transition-colors ${
                      wishlist.includes(product.id)
                        ? "fill-destructive text-destructive"
                        : "text-muted-foreground hover:text-destructive"
                    }`}
                  />
                </button>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Heart className="h-5 w-5 fill-white" />
                      <span className="font-bold">{product.likes}</span>
                    </div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-white/70 mt-2">
                      Klik untuk detail
                    </p>
                  </div>
                </div>

                {/* Mobile Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-foreground/80 to-transparent md:hidden">
                  <p className="text-white text-sm font-medium truncate">
                    {product.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          {!showAll && allProducts.length > 6 && (
            <div className="text-center mt-10">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 font-semibold bg-transparent"
                onClick={() => setShowAll(true)}
              >
                Lihat Semua Produk
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      <ProductDetailModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
        isWishlisted={
          selectedProduct ? wishlist.includes(selectedProduct.id) : false
        }
        onToggleWishlist={onToggleWishlist}
      />
    </>
  );
};

export default ProductsSection;
