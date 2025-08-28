import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Esther, UK",
    avatar: "https://picsum.photos/100/100?a=1",
    rating: 5,
    date: "4 days ago",
    text: "She helped me bring back my fiancé in just 4 days. I’m in tears of joy! Thank you, EnchantingHeartSpells.",
    aiHint: "happy woman"
  },
  {
    name: "Joy, Nigeria",
    avatar: "https://picsum.photos/100/100?a=2",
    rating: 5,
    date: "2 weeks ago",
    text: "My boyfriend started texting me again after 2 weeks of silence. The spell worked — it’s like a miracle.",
    aiHint: "smiling person"
  },
  {
    name: "Mike, Canada",
    avatar: "https://picsum.photos/100/100?a=3",
    rating: 4,
    date: "1 month ago",
    text: "I used to doubt spells, but her rituals are done with love and ethics. She is truly gifted and I feel a positive shift in my life.",
    aiHint: "thoughtful man"
  },
  {
    name: "Sophia, USA",
    avatar: "https://picsum.photos/100/100?a=4",
    rating: 5,
    date: "3 days ago",
    text: "The connection with my partner is stronger than ever. The 'Strengthen Relationship' spell worked wonders for us. Highly recommended!",
    aiHint: "content woman"
  },
  {
    name: "David, Australia",
    avatar: "https://picsum.photos/100/100?a=5",
    rating: 5,
    date: "1 week ago",
    text: "I was skeptical, but EnchantingHeartSpells's guidance was reassuring. My ex and I are talking again, and it feels like we have a real chance.",
    aiHint: "hopeful man"
  },
  {
    name: "Chloe, France",
    avatar: "https://picsum.photos/100/100?a=6",
    rating: 5,
    date: "5 days ago",
    text: "Amazing energy and a truly gifted spiritualist. The process was explained clearly and I felt supported throughout. Thank you!",
    aiHint: "peaceful woman"
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ))}
  </div>
);

export default function TestimonialsPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24 px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Words from Happy Clients</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            See what others have to say about their experience with Enchanting Heart Spells. Our average rating is 4.8/5 stars!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                  "{testimonial.text}"
                </blockquote>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground">{testimonial.date}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
