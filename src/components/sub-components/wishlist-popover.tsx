"use client";

import { Heart, X } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ScrollArea } from "../ui/scroll-area";
import Image from "next/image";

interface IWishlistItem {
  id: number;
  name: string;
  image: string;
}

interface IWishlistPopoverProps {
  items: IWishlistItem[];
  count: number;
  onRemove: (id: number) => void;
}

export default function WishlistPopover({
  items,
  count,
  onRemove,
}: IWishlistPopoverProps) {
  const handleAskMore = () => {
    const message = `Halo SENADA! Saya tertarik dengan produk berikut:\n${items
      .map((item) => `- ${item.name}`)
      .join("\n")}`;
    const whatsappUrl = `https://wa.me/6285602907659?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative hover:bg-muted">
          <Heart className="h-5 w-5 text-foreground" />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-in zoom-in">
              {count}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 border-b border-border">
          <h3 className="font-bold text-lg text-foreground">Wishlist</h3>
          <p className="text-sm text-muted-foreground">
            {count} {count === 1 ? "item" : "items"}
          </p>
        </div>

        <ScrollArea className="h-[280px]">
          <div className="p-4 space-y-3">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-2 opacity-30" />
                <p className="text-muted-foreground text-sm">Wishlist kosong</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-muted">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">
                      {item.name}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:bg-destructive/10 shrink-0"
                    onClick={() => onRemove(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </ScrollArea>

        {items.length > 0 && (
          <div className="p-4 border-t border-border">
            <Button
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold"
              onClick={handleAskMore}
            >
              Tanya via WhatsApp
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
