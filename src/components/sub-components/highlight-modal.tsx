"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HighlightModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
}

const HighlightModal = ({
  isOpen,
  onClose,
  image,
  title,
  description,
}: HighlightModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/80 z-60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-70 flex items-center justify-center p-4 pointer-events-none">
        <div
          className={cn(
            "bg-card rounded-2xl shadow-2xl pointer-events-auto relative overflow-hidden flex flex-col",
            "w-[95%] max-w-lg max-h-[90vh]",
            "md:flex-row md:max-w-4xl md:max-h-[550px] md:w-full",
            "animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
          )}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 bg-card/80 hover:bg-card text-foreground rounded-full backdrop-blur-sm shadow-md"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>

          {/* Image */}
          <div className="relative w-full h-56 md:h-auto md:w-1/2 shrink-0">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-b from-foreground/30 to-transparent md:hidden" />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 flex flex-col bg-card overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-3 leading-tight">
                {title}
              </h2>
              <div className="w-16 h-1.5 bg-primary rounded-full mb-5" />
              <p className="text-muted-foreground leading-relaxed text-base">
                {description}
              </p>
              <p className="mt-4 text-sm text-muted-foreground/70 italic">
                Produk ini tersedia dalam berbagai ukuran. Segera pesan sebelum
                kehabisan stok.
              </p>
            </div>
            <div className="p-6 border-t border-border">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-xl">
                Pesan Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HighlightModal;
