'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Product', href: '/product' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/80'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            aria-label="Destinova AI Labs homepage"
          >
            <div className="w-8 h-8 bg-[#FF7626] rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-105 transition-transform duration-200">
              D
            </div>
            <span className="text-xl font-bold text-slate-900 group-hover:text-[#FF7626] transition-colors duration-200">
              Destinova AI Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
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
            <Button variant="ghost" asChild className="text-slate-700 hover:text-[#FF7626]">
              <Link href="/contact">Try Demo</Link>
            </Button>
            <Button asChild className="bg-[#FF7626] hover:bg-[#FF7626]/90 text-white">
              <Link href="/contact">Book Live Demo</Link>
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
                <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
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
                  <Button variant="ghost" asChild className="text-slate-700 hover:text-[#FF7626] justify-start">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Try Demo</Link>
                  </Button>
                  <Button asChild className="bg-[#FF7626] hover:bg-[#FF7626]/90 text-white justify-start">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Book Live Demo</Link>
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