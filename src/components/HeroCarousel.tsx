"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
}

const slides: Slide[] = [
  {
    image: "/herobg1.jpg",
    title: "Warisan Budaya",
    subtitle: "Koleksi batik tulis premium dari pengrajin Surakarta",
    cta: "Lihat Koleksi",
  },
  {
    image: "/herobg1.jpg",
    title: "Karya Autentik",
    subtitle: "Setiap helai dibuat dengan cinta dan ketelitian tinggi",
    cta: "Cerita Kami",
  },
  {
    image: "/herobg1.jpg",
    title: "Modern Heritage",
    subtitle: "Tradisi bertemu gaya kontemporer dalam setiap desain",
    cta: "Koleksi Baru",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!showAbout) {
      timerRef.current = setInterval(nextSlide, 6000);
    }
  }, [nextSlide, showAbout]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  };

  return (
    <section className="relative w-full h-[400px] md:h-[430px] lg:h-[600px] bg-foreground overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-out",
            currentSlide === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          )}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-foreground/90 via-foreground/40 to-foreground/20" />

      {/* Content */}
      <div className="flex flex-col">
        <div
          className={cn(
            "absolute inset-0 z-20 flex flex-col items-center justify-center px-4 transition-opacity duration-500",
            showAbout ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        >
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center",
                  currentSlide === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none"
                )}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none drop-shadow-2xl">
                  {slide.title}
                </h2>
                <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  {/* <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-base rounded-full shadow-xl hover:scale-105 transition-transform"
                  >
                    {slide.cta}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-foreground font-semibold px-8 py-6 text-base rounded-full backdrop-blur-sm"
                    onClick={() => setShowAbout(true)}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Tentang Kami
                  </Button> */}
                </div>
              </div>
            ))}
            <div className="absolute z-30 top-[65%]  left-1/2 -translate-x-1/2 flex gap-4">
              <Link href="#products">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-base rounded-full shadow-xl hover:scale-105 transition-transforms max-sm:text-xs max-sm:p-3"
                >
                  Our Products
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-foreground font-semibold px-8 py-6 text-base rounded-full backdrop-blur-sms max-sm:text-xs max-sm:p-3"
                onClick={() => setShowAbout(true)}
              >
                <Play className="mr-2 h-4 w-4" />
                Tentang Kami
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* About Modal */}
      {showAbout && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-foreground/95 backdrop-blur-md animate-in fade-in duration-500">
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer"
            onClick={() => setShowAbout(false)}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-3xl text-center px-6 text-white space-y-6">
            <h2 className="text-3xl md:text-7xl font-black">SENADA</h2>
            <p className="text-sm md:text-xl text-primary uppercase tracking-[0.3em] font-medium">
              Harmoni dalam Kreasi
            </p>
            <div className="h-1 w-20 bg-primary mx-auto" />
            <p className="text-sm md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
              Berdiri sejak 2020 di Surakarta, SENADA lahir dari visi untuk
              memadukan keahlian tradisional dengan desain kontemporer. Setiap
              karya kami adalah persembahan untuk melestarikan warisan budaya
              Indonesia.
            </p>
          </div>
        </div>
      )}

      {/* Navigation Controls */}
      {!showAbout && (
        <div>
          <div className="max-md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:scale-110 transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:scale-110 transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex ">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  resetTimer();
                }}
                className="group p-2"
              >
                <div
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    currentSlide === index
                      ? "w-10 bg-primary"
                      : "w-6 bg-white/40 hover:bg-white/60"
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroCarousel;
