import { PageHeader } from '@/components/page-header';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { FeaturedProductsSection } from '@/components/sections/featured-products-section';
import { ValuePropsSection } from '@/components/sections/value-props-section';
import { ReviewsSection } from '@/components/sections/reviews-section';
import { CtaSection } from '@/components/sections/cta-section';
import { PageFooter } from '@/components/page-footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHeader />
      <main className="flex-grow space-y-16 pb-16">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="features">
          <ValuePropsSection />
        </section>
        <section id="products">
          <FeaturedProductsSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="reviews">
          <ReviewsSection />
        </section>
        <section id="cta">
          <CtaSection />
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
