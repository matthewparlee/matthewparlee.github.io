import { useCallback, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface LightboxProps {
  images: { src: string; alt: string; caption: string }[];
  currentIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (index: number) => void;
}

const Lightbox = ({ images, currentIndex, open, onOpenChange, onNavigate }: LightboxProps) => {
  const image = images[currentIndex];

  const goNext = useCallback(() => {
    if (currentIndex < images.length - 1) onNavigate(currentIndex + 1);
  }, [currentIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) onNavigate(currentIndex - 1);
  }, [currentIndex, onNavigate]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, goNext, goPrev]);

  if (!image) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl border-none bg-foreground/95 p-0 shadow-2xl sm:rounded-xl">
        <VisuallyHidden><DialogTitle>Image viewer</DialogTitle></VisuallyHidden>
        <div className="relative flex flex-col items-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-10 text-background hover:bg-background/20"
            onClick={() => onOpenChange(false)}
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </Button>

          <div className="relative flex w-full items-center justify-center px-12 py-8">
            {currentIndex > 0 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 text-background hover:bg-background/20"
                onClick={goPrev}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            )}
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[70vh] rounded-lg object-contain"
              loading="lazy"
            />
            {currentIndex < images.length - 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 text-background hover:bg-background/20"
                onClick={goNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            )}
          </div>

          <p className="px-6 pb-6 text-center text-sm text-background/70">{image.caption}</p>
          <p className="pb-4 text-xs text-background/40">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Lightbox;
