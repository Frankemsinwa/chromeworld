import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah L.',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait',
    rating: 5,
    review: "Incredible selection and the staff were so helpful in finding the perfect laptop for my work. Fast delivery too!",
  },
  {
    id: 2,
    name: 'Mike D.',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait',
    rating: 5,
    review: "ChromeWorld Central is my go-to for all things tech. Their prices are unbeatable and the customer service is top-notch.",
  },
  {
    id: 3,
    name: 'Jessica P.',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'person smiling',
    rating: 4,
    review: "A great experience overall. Found a fantastic deal on a gaming desktop. I'll definitely be back for future upgrades.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`}
      />
    ))}
  </div>
);

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Real stories from satisfied shoppers.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-secondary border-none shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src={review.avatar} alt={review.name} data-ai-hint={review.dataAiHint}/>
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{review.review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
