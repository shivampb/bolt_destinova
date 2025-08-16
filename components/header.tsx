"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Product", href: "/product" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Collaborate", href: "/collaborate" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 bg-white shadow-lg border-b border-slate-200/80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Destinova AI Labs homepage"
          >
            <img
              src="https://destinovaailabs.com/wp-content/uploads/2024/11/logo-dark-1.png"
              alt="Destinova AI Labs"
              className="h-10 w-auto transform group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-[#FF7626] font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF7626] focus:ring-offset-2 rounded-md px-2 py-1"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              asChild
              className="bg-[#FF7626] hover:bg-[#FF7626]/90 text-white"
            >
              <Link href="/demo-form">Book Live Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-700 hover:text-[#FF7626]"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                <nav
                  className="flex flex-col space-y-4"
                  role="navigation"
                  aria-label="Mobile navigation"
                >
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-slate-700 hover:text-[#FF7626] font-medium text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF7626] focus:ring-offset-2 rounded-md px-2 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col space-y-3 pt-6 border-t border-slate-200">
                  <Button
                    variant="ghost"
                    asChild
                    className="text-slate-700 hover:text-[#FF7626] justify-start"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Try Demo
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-[#FF7626] hover:bg-[#FF7626]/90 text-white justify-start"
                  >
                    <Link href="/demo-form" onClick={() => setIsOpen(false)}>
                      Book Live Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
