"use client";

import { Button } from "@/components/ui/button";
import { MoreHorizontal, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ActivityDetailModal from "./sub-components/activity-detail-modal";

const activities = [
  {
    id: 1,
    title: "WORKSHOP BATIK",
    image: "/assets/1.jpeg",
    description:
      "Mengikuti proses pembuatan batik tulis secara langsung bersama para pengrajin lokal di studio kami.",
  },
  {
    id: 2,
    title: "FASHION SHOW 2025",
    image: "/assets/1.jpeg",
    description:
      "Peluncuran koleksi terbaru 'Nusantara' yang memadukan motif tradisional dengan potongan modern.",
  },
  {
    id: 3,
    title: "COMMUNITY GATHERING",
    image: "/assets/1.jpeg",
    description:
      "Temu kangen komunitas pecinta wastra nusantara sambil berdiskusi tentang pelestarian budaya.",
  },
  {
    id: 4,
    title: "BEHIND THE SCENE",
    image: "/assets/1.jpeg",
    description:
      "Intip keseruan di balik layar pemotretan katalog terbaru kami bersama talenta muda berbakat.",
  },
];

const LatestActivitySection = () => {
  const [selectedActivity, setSelectedActivity] = useState<
    (typeof activities)[0] | null
  >(null);

  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col items-center mb-12">
            <span className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
              Kegiatan Terbaru
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground">
              AKTIVITAS KAMI
            </h2>
            <div className="mt-4 h-1.5 w-20 bg-primary rounded-full" />
          </div>

          {/* Grid with Center Decoration */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center Sparkle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center pointer-events-none">
              <div className="bg-background p-3 rounded-full shadow-lg">
                <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="relative h-[220px] md:h-[280px] rounded-2xl overflow-hidden cursor-pointer group shadow-md"
                  onClick={() => setSelectedActivity(activity)}
                >
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {activity.title}
                    </h3>
                    <p className="text-white/90 text-sm mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 line-clamp-2">
                      {activity.description}
                    </p>
                  </div>

                  {/* Options Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 text-white hover:bg-white/20 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedActivity(activity);
                    }}
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ActivityDetailModal
        isOpen={!!selectedActivity}
        onClose={() => setSelectedActivity(null)}
        image={selectedActivity?.image || ""}
        title={selectedActivity?.title || ""}
        description={selectedActivity?.description || ""}
      />
    </>
  );
};

export default LatestActivitySection;
