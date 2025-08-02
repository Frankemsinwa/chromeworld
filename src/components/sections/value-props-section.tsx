import { Store, BadgePercent, ShieldCheck, Truck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

const valueProps: ValueProp[] = [
  {
    icon: Store,
    title: 'Multiple Brands, One Store',
    description: 'Find all your favorite brands under one roof, from Apple to Dell and more.',
  },
  {
    icon: BadgePercent,
    title: 'Competitive Prices',
    description: 'We offer the best prices and deals on a wide range of products.',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty & Support',
    description: 'Shop with confidence with our comprehensive warranty and after-sales support.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Get your new computer delivered to your doorstep quickly and safely.',
  },
];

export function ValuePropsSection() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Why Shop With Us?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Experience the ChromeWorld Central difference.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => (
            <div key={prop.title} className="text-center p-6 bg-background rounded-lg shadow-md transition-shadow hover:shadow-xl hover:shadow-primary/20">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-4">
                <prop.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{prop.title}</h3>
              <p className="mt-2 text-muted-foreground">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
