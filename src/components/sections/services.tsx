"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { BrainCircuit, ThumbsUp, UserCheck, Mail, ArrowRightLeft } from 'lucide-react';

const serviceIcons = {
  consulting: <BrainCircuit className="h-8 w-8 text-primary" />,
  social: <ThumbsUp className="h-8 w-8 text-primary" />,
  assistants: <UserCheck className="h-8 w-8 text-primary" />,
  gworkspace: <Mail className="h-8 w-8 text-primary" />,
  migration: <ArrowRightLeft className="h-8 w-8 text-primary" />,
};

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language].services;

  const serviceKeys = Object.keys(t.items) as (keyof typeof t.items)[];

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold">{t.title}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map((key) => (
            <Card key={key} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  {serviceIcons[key]}
                </div>
                <CardTitle className="font-headline mt-4">{t.items[key].title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.items[key].description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
