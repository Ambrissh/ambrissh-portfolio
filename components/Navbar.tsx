"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "My Podcasts!", href: "/podcasts" },
    { label: "Blog", href: "/blog" },
    { label: "Let's Chat", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-center px-8 py-5 border-b border-white/[0.05] bg-black/60 backdrop-blur-[24px]">
      <div className="flex items-center gap-6 md:gap-8 font-sans text-[0.85rem] font-medium text-white/60">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors duration-200 hover:text-white ${
                isActive ? "text-white font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}