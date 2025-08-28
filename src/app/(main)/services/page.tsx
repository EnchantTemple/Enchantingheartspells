import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Heart, Sparkles, Zap, Users } from "lucide-react";

const services = [
  {
    title: "Reunite Lovers Spell",
    description: "Bring back an ex-lover or reconnect emotionally with your partner. This spell is designed to mend broken hearts and open lines of communication.",
    delivery: "Within 3 days",
    icon: <Heart className="h-8 w-8 text-accent" />,
  },
  {
    title: "Attract New Love Spell",
    description: "Manifest a soulmate or attract a serious, committed partner into your life. This ritual helps align your energy to draw in true love.",
    delivery: "Within 5 days",
    icon: <Sparkles className="h-8 w-8 text-accent" />,
  },
  {
    title: "Strengthen Relationship",
    description: "Eliminate third parties, remove negative influences, and restore peace and harmony in your current relationship.",
    delivery: "Within 48 hours",
    icon: <Users className="h-8 w-8 text-accent" />,
  },
  {
    title: "Stop Break-Up / Divorce",
    description: "Protect your marriage or relationship from falling apart. This powerful spell works to prevent separation and rebuild your bond.",
    delivery: "Within 2-4 days",
    icon: <Zap className="h-8 w-8 text-accent" />,
  },
  {
    title: "Custom Spell Work",
    description: "A spell tailored to your unique love situation. After a personal consultation, I will design a ritual specifically for your needs.",
    delivery: "Time varies",
    icon: <Zap className="h-8 w-8 text-accent" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-secondary">
      <div className="container py-16 md:py-24 px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Love Spells</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Each spell is a sacred ritual performed with your name and photo, including a personalized consultation and post-spell follow-up support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{service.delivery}</span>
                </div>
                <Button asChild variant="ghost" className="text-primary hover:text-primary">
                  <Link href="/booking">Book Now &rarr;</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
           <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg text-lg px-8 py-6">
            <Link href="/booking">
              Book a Custom Spell
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
