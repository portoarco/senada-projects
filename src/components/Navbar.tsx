"use client";
import { Menu, Search, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SplitText from "./gsap-animated/SplitText";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import WishlistItem from "./sub-components/wishlist-popover";
import ProfileDropdown from "./sub-components/profile-dropdown";

interface NavbarProps {
  wishlistCount: number;
  wishlistItems: Array<{ id: number; name: string; image: string }>;
  onRemoveWishlist: (id: number) => void;
}

const menuLink = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Products",
    link: "#",
  },
  {
    id: 3,
    name: "Blog",
    link: "#",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "#",
  },
];

export default function Navbar({
  wishlistCount,
  wishlistItems,
  onRemoveWishlist,
}: NavbarProps) {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <nav className="flex z-50   justify-between items-center px-4 py-5 md:px-10 lg:px-20   ">
      <section className="flex lg:gap-20 items-center">
        <div>
          <SplitText
            text="SENADA"
            className="max-sm:text-xl text-2xl mt-2 font-bold "
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="center"
          />
        </div>
        <div>
          <ul className="flex gap-10 max-lg:hidden">
            {menuLink.map((menu, idx) => (
              <li key={idx}>
                <Link href={menu.link} className=" ">
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="cta" className="flex gap-1 lg:gap-3 ">
        {/* Phone */}
        <div>
          <Button variant={"ghost"} className="md:hidden">
            <Search></Search>
          </Button>
        </div>
        {/* Desktop */}
        <div className="relative max-sm:hidden ">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors text-p" />
          <Input
            type="text"
            placeholder="Search products..."
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 w-48 md:w-64 transition-all duration-300 focus:w-56 md:focus:w-80  border-border focus:border-primary bg-white"
          />
        </div>

        <WishlistItem
          items={wishlistItems}
          count={wishlistCount}
          onRemove={onRemoveWishlist}
        />
        <ProfileDropdown />
        <Button variant={"secondary"} className="lg:hidden">
          <Menu />
        </Button>
      </section>
    </nav>
  );
}
