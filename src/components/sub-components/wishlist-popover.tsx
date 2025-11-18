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

export default function WishlistItem({
  items,
  count,
  onRemove,
}: IWishlistPopoverProps) {
  const handleAskMore = () => {
    const message = `Hi! I'm interested in these products:\n${items
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
        <Button variant="ghost" size="icon" className="hover:bg-muted relative">
          <Heart className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
              {count}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold text-lg text-primary">Wishlist</h3>
          <p className="text-sm text-muted-foreground">
            {count} {count === 1 ? "item" : "items"}
          </p>
        </div>

        <ScrollArea className="h-[300px]">
          <div className="p-4 space-y-3">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-2 opacity-50" />
                <p className="text-muted-foreground">Your wishlist is empty</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-md overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
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
                    className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0"
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
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
              onClick={handleAskMore}
            >
              Ask via WhatsApp
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
