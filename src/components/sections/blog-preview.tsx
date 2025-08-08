"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { ArrowRight } from 'lucide-react';

export default function BlogPreview() {
  const { language } = useLanguage();
  const t = translations[language].blogPreview;

  const blogPosts = [
    {
      slug: 'tech-trends-2024',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'technology trends',
    },
    {
      slug: 'google-workspace-tips',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'office collaboration',
    },
    {
      slug: 'social-media-smb',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'social media marketing',
    },
  ];

  return (
    <section id="blog" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold">{t.title}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={t.posts[post.slug as keyof typeof t.posts]?.title || ''}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={post.aiHint}
                />
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <CardTitle className="text-xl font-headline mb-2">{t.posts[post.slug as keyof typeof t.posts]?.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{t.posts[post.slug as keyof typeof t.posts]?.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="p-0">
                  <Link href={`/blog/${post.slug}`}>
                    {t.readMore} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/blog">{t.viewAll}</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
