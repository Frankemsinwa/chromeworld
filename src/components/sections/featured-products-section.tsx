import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Inspiron 15',
    brand: 'Dell',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'dell laptop',
    specs: '15.6" FHD, Intel i7, 16GB RAM, 512GB SSD',
    price: 899.99,
    oldPrice: 1099.99,
    badge: '20% OFF'
  },
  {
    id: 2,
    name: 'MacBook Air M3',
    brand: 'Apple',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'apple macbook',
    specs: '13.6" Liquid Retina, 8GB RAM, 256GB SSD',
    price: 1099.00,
    badge: 'New'
  },
  {
    id: 3,
    name: 'Yoga 7i',
    brand: 'Lenovo',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'lenovo laptop',
    specs: '16" 2.5K Touch, Intel i5, 16GB RAM, 1TB SSD',
    price: 949.99,
  },
  {
    id: 4,
    name: 'Pavilion Aero',
    brand: 'HP',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'hp laptop',
    specs: '13.3" WQXGA, AMD Ryzen 5, 16GB RAM, 512GB SSD',
    price: 699.99,
    oldPrice: 849.99,
    badge: 'Hot Deal'
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="featured-products" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Featured Products
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Check out our hand-picked selection of trending laptops and desktops.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
              <CardHeader className="p-0 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  data-ai-hint={product.dataAiHint}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-video"
                />
                {product.badge && <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground border-transparent">{product.badge}</Badge>}
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardDescription className="text-sm">{product.brand}</CardDescription>
                <CardTitle className="text-xl mt-1 mb-2 font-headline">{product.name}</CardTitle>
                <CardDescription>{product.specs}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6 pt-0">
                <div>
                  <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
                  {product.oldPrice && <p className="text-sm text-muted-foreground line-through">${product.oldPrice.toFixed(2)}</p>}
                </div>
                <Button asChild>
                  <Link href="#">View</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
