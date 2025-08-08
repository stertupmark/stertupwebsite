"use client";

import Link from 'next/link';
import { Logo } from '@/components/logo';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { href: '/about', label: t.footer.about },
    { href: '/services', label: t.footer.services },
    { href: '/blog', label: t.footer.blog },
    { href: '/contact', label: t.footer.contact },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm">{t.footer.tagline}</p>
          </div>
          <div className="col-span-1">
            <h3 className="font-headline font-semibold uppercase">{t.footer.links}</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-headline font-semibold uppercase">{t.footer.contactInfo}</h3>
            <address className="mt-4 space-y-2 not-italic text-sm">
              <p>Miami, Florida, USA</p>
              <p>
                <a href="mailto:info@stertup.net" className="hover:text-primary transition-colors">
                  info@stertup.net
                </a>
              </p>
              <p>
                <a href="tel:+17863098161" className="hover:text-primary transition-colors">
                  +1 (786) 309-8161
                </a>
              </p>
            </address>
          </div>
          <div className="col-span-1">
            <h3 className="font-headline font-semibold uppercase">{t.footer.followUs}</h3>
            <div className="flex mt-4 space-x-4">
              <Link href="#" aria-label="Facebook" className="text-secondary-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-secondary-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-secondary-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
