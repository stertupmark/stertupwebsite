
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function PostList() {
  const { language } = useLanguage();
  const t = translations[language];
  const blogPosts = t.blog.posts;
  const postKeys = Object.keys(blogPosts) as (keyof typeof blogPosts)[];

  return (
    <>
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-headline font-bold mb-4">{t.blog.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{t.blog.subtitle}</p>
        </div>
      </section>
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postKeys.map((slug) => (
              <Card key={slug} className="overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Link href={`/blog/${slug}`}>
                    <Image
                      src={blogPosts[slug].image}
                      alt={blogPosts[slug].title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                      data-ai-hint={blogPosts[slug].aiHint}
                    />
                  </Link>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <CardTitle className="text-xl font-headline mb-2 leading-tight">
                    <Link href={`/blog/${slug}`} className="hover:text-primary transition-colors">
                      {blogPosts[slug].title}
                    </Link>
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{blogPosts[slug].description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0 text-primary">
                    <Link href={`/blog/${slug}`}>
                      {t.blogPreview.readMore} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
