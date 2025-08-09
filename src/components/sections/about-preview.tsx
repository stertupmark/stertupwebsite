"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';

export default function AboutPreview() {
  const { language } = useLanguage();
  const t = translations[language].aboutPreview;

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/local-tech.jpeg"
              alt={t.imageAlt}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              data-ai-hint="diverse business team"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4">{t.title}</h2>
            <p className="text-muted-foreground mb-6">{t.description}</p>
            <Button asChild size="lg">
              <Link href="/about">{t.cta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
