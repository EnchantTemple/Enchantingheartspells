import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Globe, Heart, MessageCircle, Clock, Sparkles, Users, Zap } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const services = [
  {
    title: "Reunite Lovers Spell",
    description: "Bring back an ex-lover or reconnect emotionally with your partner. This spell is designed to mend broken hearts and open lines of communication.",
    delivery: "Within 3 days",
    icon: <Heart className="h-8 w-8 text-accent" />,
    image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/160281278/original/0b5e5011a795ed18f8185caee189ca66666d2f2a/cast-a-spell-to-retrieve-and-reunite-your-lover.jpeg",
    aiHint: "reuniting couple",
    href: "/booking"
  },
  {
    title: "Attract New Love Spell",
    description: "Manifest a soulmate or attract a serious, committed partner into your life. This ritual helps align your energy to draw in true love.",
    delivery: "Within 5 days",
    icon: <Sparkles className="h-8 w-8 text-accent" />,
    image: "https://dhwaniastro.com/public/cms-images/products/SKU2023M2LNHFJTC_love%20spells%20that%20work%20overnight%20-%20featured%20image-0.jpg",
    aiHint: "love spell candle",
    href: "/booking"
  },
  {
    title: "Strengthen Relationship",
    description: "Eliminate third parties, remove negative influences, and restore peace and harmony in your current relationship.",
    delivery: "Within 48 hours",
    icon: <Users className="h-8 w-8 text-accent" />,
    image: "https://picsum.photos/400/250?a=7",
    aiHint: "happy couple together",
    href: "/booking"
  },
];

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Results vary depending on the complexity of the situation and the energies involved. Some clients see results within a few days, while for others it may take a few weeks. I provide a timeline estimate during our consultation."
  },
  {
    question: "Are your spells safe? Is there any negative karma?",
    answer: "Absolutely. My practice is built on a foundation of ethical, positive energy work. I do not engage in black magic or any rituals that intend harm. All spells are 100% safe and will not create negative karma for you or anyone else."
  },
  {
    question: "What do you need from me to start?",
    answer: "To begin, I typically require the full names of the people involved, their birth dates (if known), and a recent photo. Most importantly, I need a detailed description of your situation and your desired outcome. This information remains completely confidential."
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://welovespells.net/cdn/shop/articles/what-should-i-write-in-my-intentions-for-a-love-spell-322773_1022x.jpg?v=1732339645"
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

      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://artoftheroot.com/cdn/shop/articles/backup-article-558517944397_8d42cd6d-90d2-4224-9721-861522dd9c9e.jpg?v=1732551887')" }}
      >
        <div className="bg-background/90 backdrop-blur-sm">
          {/* Services Section */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Love Spells</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Each spell is a sacred ritual performed with your name and photo, including a personalized consultation and post-spell follow-up support.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {services.map((service) => (
                  <Card key={service.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/70">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover rounded-t-lg"
                      data-ai-hint={service.aiHint}
                    />
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
                        <Link href={service.href}>Book Now &rarr;</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button asChild size="lg">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Highlighted Stats Section */}
          <section className="py-16 md:py-24">
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

          {/* FAQ Section */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Frequently Asked Questions</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Have questions? Here are some of the most common things clients ask.
                </p>
              </div>
              <div className="max-w-3xl mx-auto mt-12">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="mt-12 text-center">
                <Button asChild size="lg">
                  <Link href="/faq">View More Questions</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
