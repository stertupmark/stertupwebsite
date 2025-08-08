"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-sky-100 dark:from-gray-900 dark:to-blue-900/50 py-24 md:py-40 lg:py-56">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground mb-4">
          {t.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          {t.subtitle}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild size="lg">
            <Link href="/contact">{t.ctaPrimary}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">{t.ctaSecondary}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
