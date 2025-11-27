"use client";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import Highlight from "@/components/Highlight";
import LatestActivitySection from "@/components/LatestActivity";
import LiveChat from "@/components/LiveChat";
import Navbar from "@/components/Navbar";
import PartnershipSection from "@/components/Partnership";
import ProductsSection from "@/components/Products";
import SocialMediaSection from "@/components/SocialMedia";
import TestimonialsSection from "@/components/Testimonials";
import { useState } from "react";
const allProducts = [
  { id: 1, name: "Nama Produk", image: "/assets/1.jpeg" },
  { id: 2, name: "Nama Produk", image: "/assets/1.jpeg" },
  { id: 3, name: "Nama Produk", image: "/assets/1.jpeg" },
  { id: 4, name: "Nama Produk", image: "/assets/1.jpeg" },
  { id: 5, name: "Nama Produk", image: "/assets/1.jpeg" },
  { id: 6, name: "Nama Produk", image: "/assets/1.jpeg" },
];
export default function Home() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item !== id));
  };

  const wishlistItems = wishlist.map(
    (id) => allProducts.find((p) => p.id === id)!
  );
  return (
    <section className="h-1000">
      <Navbar
        wishlistCount={wishlist.length}
        wishlistItems={wishlistItems}
        onRemoveWishlist={removeFromWishlist}
      />
      <HeroCarousel />
      <Highlight />
      <ProductsSection wishlist={wishlist} onToggleWishlist={toggleWishlist} />
      <LatestActivitySection />
      <PartnershipSection />
      <TestimonialsSection />
      <SocialMediaSection />
      <Footer />
      <LiveChat />
    </section>
  );
}
