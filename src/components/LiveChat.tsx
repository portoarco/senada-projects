"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendWhatsApp = () => {
    if (!message.trim()) return;
    const whatsappUrl = `https://wa.me/6285602907659?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Widget */}
      <div
        className={cn(
          "fixed bottom-24 right-4 md:right-6 z-50 w-[320px] md:w-[360px] transition-all duration-300 origin-bottom-right",
          isOpen
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="CS Avatar"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-primary-foreground font-bold text-sm">
                SENADA Support
              </h4>
              <p className="text-primary-foreground/70 text-xs">
                Online - Siap membantu!
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-muted/30 min-h-[180px]">
            <div className="bg-card rounded-xl p-3 shadow-sm max-w-[85%]">
              <p className="text-sm text-foreground">
                Halo! Selamat datang di SENADA. Ada yang bisa kami bantu?
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Ketik pesan dan kirim via WhatsApp
              </p>
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border flex gap-2">
            <Input
              placeholder="Tulis pesan..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendWhatsApp()}
              className="flex-1 bg-muted/50 border-0"
            />
            <Button
              size="icon"
              className="bg-[#25D366] hover:bg-[#20bd5a] shrink-0"
              onClick={handleSendWhatsApp}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-4 md:right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110",
          isOpen
            ? "bg-foreground text-background rotate-90"
            : "bg-[#25D366] text-white"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Pulse Animation */}
      {!isOpen && (
        <div className="fixed bottom-6 right-4 md:right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] animate-ping opacity-30" />
      )}
    </>
  );
}
