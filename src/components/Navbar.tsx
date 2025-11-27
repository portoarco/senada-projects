"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import WishlistPopover from "./sub-components/wishlist-popover";
import ProfileDropdown from "./sub-components/profile-dropdown";
import { cn } from "@/lib/utils";

interface NavbarProps {
  wishlistCount: number;
  wishlistItems: Array<{ id: number; name: string; image: string }>;
  onRemoveWishlist: (id: number) => void;
}

const menuLinks = [
  { id: 1, name: "Beranda", link: "#" },
  { id: 2, name: "Produk", link: "#products" },
  { id: 3, name: "Tentang", link: "#about" },
  { id: 4, name: "Kontak", link: "#contact" },
];

export default function Navbar({
  wishlistCount,
  wishlistItems,
  onRemoveWishlist,
}: NavbarProps) {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Logo & Desktop Menu */}
        <section className="flex items-center gap-8 lg:gap-12">
          <Link href="/" className="shrink-0">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-primary">
              SENADA
            </h1>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {menuLinks.map((menu) => (
              <li key={menu.id}>
                <Link
                  href={menu.link}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Actions */}
        <section className="flex items-center gap-2 md:gap-3">
          {/* Desktop Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Cari produk..."
              className="h-10 w-48 rounded-full border-border bg-muted/50 pl-10 pr-4 text-sm transition-all focus:w-64 focus:bg-card lg:w-56"
            />
          </div>

          {/* Mobile Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:bg-muted"
            onClick={() => {
              setShowMobileSearch(!showMobileSearch);
              setIsMobileMenuOpen(false);
            }}
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Wishlist */}
          <WishlistPopover
            items={wishlistItems}
            count={wishlistCount}
            onRemove={onRemoveWishlist}
          />

          {/* Profile */}
          <div className="hidden sm:block">
            <ProfileDropdown />
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:bg-muted"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setShowMobileSearch(false);
            }}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </section>
      </nav>

      {/* Mobile Search */}
      {showMobileSearch && (
        <div className="border-b border-border bg-card px-4 py-3 md:hidden animate-in slide-in-from-top-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              autoFocus
              placeholder="Cari produk batik..."
              className="w-full pl-10 bg-muted/50"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-card px-4 py-4 shadow-lg lg:hidden animate-in slide-in-from-top-5">
          <ul className="flex flex-col gap-1">
            {menuLinks.map((menu) => (
              <li key={menu.id}>
                <Link
                  href={menu.link}
                  className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
            <li className="pt-3 mt-2 border-t border-border sm:hidden">
              <div className="px-4">
                <ProfileDropdown />
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
