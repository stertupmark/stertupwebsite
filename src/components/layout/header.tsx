
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/language-toggle';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const navLinks = [
    { href: '/services', label: t.header.services },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled || !isHomePage
          ? 'bg-background/80 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <Button asChild>
            <Link href="/contact">{t.header.getQuote}</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      <div
        className={cn(
          'md:hidden bg-background/95 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
           <Link
              href="/contact"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.header.contact}
            </Link>
          <LanguageToggle />
          <Button asChild className="w-full mt-4">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              {t.header.getQuote}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
