"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/translations";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language].contact;

  const formSchema = z.object({
    name: z.string().min(2, { message: t.validation.name }),
    email: z.string().email({ message: t.validation.email }),
    subject: z.string().min(5, { message: t.validation.subject }),
    message: z.string().min(10, { message: t.validation.message }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would send this data to a server
    console.log(values);
    toast({
      title: t.toast.title,
      description: t.toast.description,
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold">{t.title}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.form.name.label}</FormLabel>
                      <FormControl>
                        <Input placeholder={t.form.name.placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.form.email.label}</FormLabel>
                      <FormControl>
                        <Input placeholder={t.form.email.placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.form.subject.label}</FormLabel>
                      <FormControl>
                        <Input placeholder={t.form.subject.placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.form.message.label}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t.form.message.placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" size="lg">{t.form.submit}</Button>
              </form>
            </Form>
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
