
"use client";

import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { Target, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AboutFull() {
  const { language } = useLanguage();
  const t = translations[language].aboutPage;

  const teamMembers = [
    { name: "Jane Doe", role: t.team.role1, image: "https://placehold.co/300x300.png", aiHint: "professional woman" },
    { name: "John Smith", role: t.team.role2, image: "https://placehold.co/300x300.png", aiHint: "professional man" },
    { name: "Carlos Garcia", role: t.team.role3, image: "https://placehold.co/300x300.png", aiHint: "tech expert" },
  ];

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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold mb-6">{t.story.title}</h2>
              <p className="text-muted-foreground mb-4">{t.story.paragraph1}</p>
              <p className="text-muted-foreground">{t.story.paragraph2}</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://placehold.co/600x450.png"
                alt={t.story.imageAlt}
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                data-ai-hint="miami skyline"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                  <div className="bg-primary/20 text-primary p-3 rounded-full mb-4">
                      <Target className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-headline font-bold mb-4">{t.mission.title}</h2>
                  <p className="text-muted-foreground max-w-md mx-auto md:mx-0">{t.mission.text}</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                  <div className="bg-primary/20 text-primary p-3 rounded-full mb-4">
                      <MapPin className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-headline font-bold mb-4">{t.local.title}</h2>
                  <p className="text-muted-foreground max-w-md mx-auto md:mx-0">{t.local.text}</p>
              </div>
           </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold">{t.team.title}</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{t.team.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center p-8">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  width={300}
                  height={300}
                  className="rounded-full w-40 h-40 mx-auto mb-4 object-cover shadow-lg"
                  data-ai-hint={member.aiHint}
                />
                <h3 className="font-headline font-bold text-xl">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
