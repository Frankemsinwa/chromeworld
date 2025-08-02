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
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturedProductsSection />
        <ValuePropsSection />
        <ReviewsSection />
        <CtaSection />
      </main>
      <PageFooter />
    </div>
  );
}
