
"use client";

import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { BrainCircuit, ThumbsUp, UserCheck, Mail, ArrowRightLeft } from 'lucide-react';

const serviceIcons = {
  consulting: <BrainCircuit className="h-10 w-10 text-primary" />,
  social: <ThumbsUp className="h-10 w-10 text-primary" />,
  assistants: <UserCheck className="h-10 w-10 text-primary" />,
  gworkspace: <Mail className="h-10 w-10 text-primary" />,
  migration: <ArrowRightLeft className="h-10 w-10 text-primary" />,
};

const serviceImages = {
  consulting: { src: "https://placehold.co/600x400.png", hint: "business meeting strategy" },
  social: { src: "https://placehold.co/600x400.png", hint: "social media feed" },
  assistants: { src: "https://placehold.co/600x400.png", hint: "person working laptop" },
  gworkspace: { src: "https://placehold.co/600x400.png", hint: "collaborative workspace" },
  migration: { src: "https://placehold.co/600x400.png", hint: "cloud data transfer" },
}

export default function ServicesDetailed() {
  const { language } = useLanguage();
  const t = translations[language].servicesPage;
  const serviceKeys = Object.keys(t.items) as (keyof typeof t.items)[];

  return (
    <>
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-headline font-bold mb-4">{t.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{t.subtitle}</p>
        </div>
      </section>
      
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {serviceKeys.map((key, index) => (
              <div key={key} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-last' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      {serviceIcons[key]}
                    </div>
                    <h2 className="text-3xl font-headline font-bold">{t.items[key].title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{t.items[key].description}</p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {t.items[key].points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={serviceImages[key].src}
                    alt={t.items[key].title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint={serviceImages[key].hint}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
