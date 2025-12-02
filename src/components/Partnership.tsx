"use client";

import {
  Building2,
  Store,
  Shirt,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const partners = [
  {
    name: "Batik Indonesia",
    icon: Shirt,
    category: "Fashion Partner",
    desc: "Kolaborasi koleksi eksklusif",
  },
  {
    name: "Local Market",
    icon: Store,
    category: "Retail Partner",
    desc: "Jaringan distribusi lokal",
  },
  {
    name: "Fashion Week",
    icon: Sparkles,
    category: "Event Partner",
    desc: "Showcase tahunan",
  },
  {
    name: "Trade Center",
    icon: Building2,
    category: "Business Partner",
    desc: "Ekspansi pasar B2B",
  },
  {
    name: "Boutique Network",
    icon: ShoppingBag,
    category: "Distribution",
    desc: "Mitra butik premium",
  },
  {
    name: "Style Alliance",
    icon: TrendingUp,
    category: "Brand Partner",
    desc: "Strategic branding",
  },
];

const PartnershipSection = () => {
  return (
    <section id="partnership" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-primary tracking-widest uppercase mb-2 block">
            Kemitraan
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            PARTNER KAMI
          </h2>
          <div className="mt-4 h-1.5 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Bangga bekerja sama dengan para pemimpin industri untuk menghadirkan
            karya batik terbaik
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center border border-border shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer text-center h-48 md:h-56 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-colors duration-300 mb-3">
                <partner.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>

              <h3 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                {partner.name}
              </h3>
              <p className="text-xs font-medium text-primary mt-1 uppercase tracking-wider">
                {partner.category}
              </p>

              <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2 mt-2 border-t border-dashed border-border">
                  {partner.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground p-8 md:p-12 text-center shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Handshake className="w-48 h-48 -mr-12 -mt-12" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Tertarik Berkolaborasi?
              </h3>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
                Mari bertumbuh bersama. Kami terbuka untuk peluang kemitraan
                strategis dan inovasi bisnis.
              </p>

              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Bergabung Menjadi Mitra
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
