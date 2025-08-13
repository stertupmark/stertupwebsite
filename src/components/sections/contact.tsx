"use client";

import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/translations";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold">{t.title}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <iframe 
              src="https://forms.monday.com/forms/embed/03b1d63d24f7a53efc08384a8c01a00c?r=use1" 
              className="w-full h-[500px] border-0 shadow-2xl rounded-lg"
              style={{ minHeight: '500px' }}
            ></iframe>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 text-primary p-3 rounded-full">
                <MapPin className="h-6 w-6"/>
              </div>
              <div>
                <h3 className="font-headline font-semibold text-lg">{t.address.title}</h3>
                <p className="text-muted-foreground">{t.address.value}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 text-primary p-3 rounded-full">
                <Mail className="h-6 w-6"/>
              </div>
              <div>
                <h3 className="font-headline font-semibold text-lg">{t.email.title}</h3>
                <a href={`mailto:${t.email.value}`} className="text-muted-foreground hover:text-primary transition-colors">{t.email.value}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 text-primary p-3 rounded-full">
                <Phone className="h-6 w-6"/>
              </div>
              <div>
                <h3 className="font-headline font-semibold text-lg">{t.phone.title}</h3>
                <a href={`tel:${t.phone.value.replace(/[()\s-]/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">{t.phone.value}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
