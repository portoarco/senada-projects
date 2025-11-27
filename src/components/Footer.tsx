"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden pt-16 md:pt-20 pb-8">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-foreground rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-5">
            <h3 className="text-3xl font-extrabold tracking-tighter">SENADA</h3>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              Menghadirkan keindahan warisan budaya Batik Indonesia dalam
              balutan desain modern yang elegan dan berkualitas tinggi.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Surakarta, Jawa Tengah, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+62 856 0290 7659</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                <span>hello@senada.id</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 tracking-wide">SHOP</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              {[
                "Koleksi Baru",
                "Best Sellers",
                "Batik Tulis",
                "Aksesoris",
                "Sale",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-primary-foreground hover:translate-x-1 transition-all inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 tracking-wide">SUPPORT</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              {[
                "Tentang Kami",
                "Kontak",
                "FAQ",
                "Pengiriman",
                "Pengembalian",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-primary-foreground hover:translate-x-1 transition-all inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-5 tracking-wide">NEWSLETTER</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Dapatkan info koleksi terbaru dan promo eksklusif langsung di
              inbox Anda.
            </p>

            <div className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Email Anda"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-white h-11 rounded-lg"
              />
              <Button className="w-full bg-white text-primary hover:bg-white/90 h-11 rounded-lg font-bold">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <p className="text-xs font-semibold tracking-widest mb-3 opacity-80">
                FOLLOW US
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-white/10 hover:bg-white hover:text-primary p-2.5 rounded-full transition-all hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/70">
          <p>&copy; {currentYear} SENADA. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
