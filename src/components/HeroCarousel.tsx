"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/herobg.jpg",
    title: "Discover Your Style",
    subtitle: "Explore our curated collection",
  },
  {
    image: "/herobg2.jpg",
    title: "New Arrivals",
    subtitle: "Fresh designs for every season",
  },
  {
    image: "/herobg3.jpg",
    title: "Limited Edition",
    subtitle: "Exclusive pieces you'll love",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[470px] bg-muted overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index && !showAbout ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className=" object-cover brightness-35"
          />

          <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-transparent" />
        </div>
      ))}

      {/* About Us Section */}
      <div
        className={`absolute inset-0 bg-linear-to-br from-primary via-primary/90 to-ocean-teal transition-opacity duration-1000 ${
          showAbout ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white hover:bg-white/20 z-20"
          onClick={() => setShowAbout(false)}
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-4xl text-center space-y-6 text-white">
            <h2 className="text-6xl md:text-7xl font-bold drop-shadow-lg">
              SENADA
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-accent drop-shadow-md">
              Harmony in Every Creation
            </p>
            <div className="h-1 w-24 bg-accent mx-auto my-6" />
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p className="drop-shadow-md">
                Founded in 2020, SENADA emerged from a vision to blend
                traditional craftsmanship with contemporary design. Our name,
                meaning harmony in Indonesian, reflects our commitment to
                creating pieces that resonate with both style and purpose.
              </p>
              <p className="drop-shadow-md">
                Each product tells a story of dedication, quality, and timeless
                elegance. We believe in sustainable fashion that honors both our
                artisans and our planet, creating collections that transcend
                fleeting trends.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          showAbout ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="text-center space-y-6 z-10 px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            {slides[currentSlide].title}
          </h2>
          <p className="text-xl text-white drop-shadow-md">
            {slides[currentSlide].subtitle}
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            onClick={() => setShowAbout(true)}
          >
            ABOUT US
          </Button>
        </div>
      </div>

      {!showAbout && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white"
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
          >
            <ChevronLeft className="h-8 w-8 " />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white"
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-white w-8" : "bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default HeroCarousel;
