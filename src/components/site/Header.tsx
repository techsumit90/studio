
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, CodeXml } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">AnnexSoft Digital Hub</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <CodeXml className="h-6 w-6 text-primary" />
                    <span className="font-bold">AnnexSoft</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close Menu</span>
                  </Button>
                </div>
                <nav className="mt-6 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
