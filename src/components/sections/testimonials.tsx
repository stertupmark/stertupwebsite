"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  const testimonialData = [
    {
      client: 'client1',
      image: 'https://placehold.co/100x100.png',
      aiHint: 'professional woman',
    },
    {
      client: 'client2',
      image: 'https://placehold.co/100x100.png',
      aiHint: 'business man',
    },
    {
      client: 'client3',
      image: 'https://placehold.co/100x100.png',
      aiHint: 'smiling person',
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold">{t.title}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonialData.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center text-center p-8">
                      <Image
                        src={testimonial.image}
                        alt={t.items[testimonial.client].name}
                        width={80}
                        height={80}
                        className="rounded-full mb-4"
                        data-ai-hint={testimonial.aiHint}
                      />
                      <p className="italic mb-4 text-foreground">"{t.items[testimonial.client].quote}"</p>
                      <p className="font-bold font-headline">{t.items[testimonial.client].name}</p>
                      <p className="text-sm text-muted-foreground">{t.items[testimonial.client].company}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
