"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import Container from "./Container";
import Button from "../ui/Button";
import { navLinks } from "@/lib/data/company";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5"
        : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3"
        }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg py-1"
            aria-label="Grow Nepal Home"
          >
            <Image
              src="/grow-nepal-logo.png"
              alt="Grow Nepal"
              width={200}
              height={250}
              priority
              className="h-10 sm:h-11 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/60">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${isActive
                    ? "bg-white text-emerald-700 shadow-sm font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-slate-100 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive
                      ? "bg-emerald-50 text-emerald-700 font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-5 pt-5 border-t border-slate-100 flex flex-col gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setIsOpen(false)}
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Start a Project
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Open for new client inquiries & partnerships</span>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
