
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

interface PostContentProps {
  slug: string;
}

export default function PostContent({ slug }: PostContentProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const post = t.blog.posts[slug as keyof typeof t.blog.posts];

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.blog.back_to_blog}
            </Link>
          </Button>

          <h1 className="text-4xl lg:text-5xl font-headline font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{post.description}</p>
          
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.aiHint}
              priority
            />
          </div>

          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  );
}
