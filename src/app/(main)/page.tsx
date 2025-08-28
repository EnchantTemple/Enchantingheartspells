import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Globe, Heart, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Mystical background with candles and stars"
          fill
          className="object-cover -z-10"
          priority
          data-ai-hint="candles stars spiritual"
        />
        <div className="absolute inset-0 bg-primary/60 -z-10" />
        <div className="container px-4 md:px-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-headline">
            Restore Your Love Today 🌹
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            A sanctuary where love, energy, and intention align to reunite you with your true partner.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg text-lg px-8 py-6">
            <Link href="/booking">
              Book Your Spell Now
              <Heart className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Intro Message Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Welcome to Enchanting Heart Spells
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            I’m a licensed spiritual consultant with over 12 years of experience helping souls reunite with their true partners through ancient, ethical, and natural spell casting.
          </p>
        </div>
      </section>

      {/* Highlighted Stats Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold">1200+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Globe className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold">20+</h3>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MessageCircle className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-muted-foreground">Support via WhatsApp</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
