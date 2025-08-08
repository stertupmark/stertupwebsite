
import PostContent from '@/components/blog/post-content';
import { translations } from '@/lib/translations';

type Props = {
  params: { slug: string };
};

// Generate static pages for each blog post
export async function generateStaticParams() {
  const postSlugs = Object.keys(translations.en.blog.posts);
  return postSlugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  // Assuming 'en' has all posts, which should be the case.
  const post = translations.en.blog.posts[slug as keyof typeof translations.en.blog.posts];
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: `${post.title} | Stertup Consulting Blog`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: Props) {
  return <PostContent slug={params.slug} />;
}
