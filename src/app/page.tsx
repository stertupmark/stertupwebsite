import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import AboutPreview from '@/components/sections/about-preview';
import Testimonials from '@/components/sections/testimonials';
import BlogPreview from '@/components/sections/blog-preview';
import Faq from '@/components/sections/faq';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <Testimonials />
      <BlogPreview />
      <Faq />
      <Contact />
    </>
  );
}
