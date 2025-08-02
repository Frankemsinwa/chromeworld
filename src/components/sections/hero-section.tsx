import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[700px] flex items-center justify-center text-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Modern tech store display wall"
        data-ai-hint="modern computer store"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-4xl px-4 animate-fade-in" style={{animation: 'fadeIn 1s ease-out forwards'}}>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Top Computer Brands in One Place
        </h1>
        <p className="mt-6 text-lg text-primary-foreground/80 md:text-xl">
          Welcome to ChromeWorld Central: Your go-to store for quality, variety, and great deals.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link href="#featured-products">Browse Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
