"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/translations";

export default function BlogPreview() {
  const { language } = useLanguage();
  const t = translations[language].blogPreview;
  const blogPosts = translations[language].blog.posts;

  // Get the first 3 blog posts from the translations
  const postsToShow = Object.keys(t.posts).map(slug => ({
    slug,
    ...t.posts[slug as keyof typeof t.posts],
    image: blogPosts[slug as keyof typeof blogPosts]?.image || "https://placehold.co/600x400"
  }));

  return (
    <section id="blog-preview" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold">{t.title}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsToShow.map((post) => (
            <Card key={post.slug} className="flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="rounded-t-lg object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="flex-grow pt-6">
                <CardTitle className="text-xl font-bold font-headline mb-2">{post.title}</CardTitle>
                <p className="text-muted-foreground line-clamp-3">{post.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0">
                  <Link href={`/blog/${post.slug}`}>{t.readMore} &rarr;</Link>
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
