import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActivityDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
}

const ActivityDetailModal = ({
  isOpen,
  onClose,
  image,
  title,
  description,
}: ActivityDetailModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 z-50 animate-fade-in"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-background rounded-3xl max-w-4xl w-full overflow-hidden animate-scale-in shadow-2xl">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>
            <Sparkles className="absolute top-4 right-16 h-8 w-8 text-white opacity-80" />
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-square md:aspect-auto order-2 md:order-1 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-primary mb-2">
                  {title}
                </h2>
                <p className="text-muted-foreground mb-4">{description}</p>
                <p className="text-sm text-muted-foreground">
                  Discover the story behind our latest collection and the
                  inspiration that drives our creative process. Each piece is
                  carefully crafted with attention to detail and quality.
                </p>
              </div>
              <div className="aspect-square md:aspect-auto order-1 md:order-2">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityDetailModal;
