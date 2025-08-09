"use client";

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  type Testimonial = {
    client: keyof typeof t.items;
  };

  const testimonialData: Testimonial[] = [
    { client: 'client1' },
    { client: 'client2' },
    { client: 'client3' },
  ];

  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[1][0]}`;
    }
    return names[0].substring(0, 2);
  };

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
                      <Avatar className="h-20 w-20 mb-4">
                        <AvatarFallback className="text-2xl bg-primary/20 text-primary font-bold">
                          {getInitials(t.items[testimonial.client].name)}
                        </AvatarFallback>
                      </Avatar>
                      <p className="italic mb-4 text-foreground">&quot;{t.items[testimonial.client].quote}&quot;</p>
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
