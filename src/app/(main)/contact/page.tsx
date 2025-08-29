import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';

const contactMethods = [
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: 'WhatsApp Live Chat',
    description: 'For the fastest response, send me a message on WhatsApp.',
    cta: 'Chat Now',
    href: siteConfig.whatsappLink,
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: 'Email',
    description: 'Send your questions to my personal email. I reply within 24 hours.',
    cta: 'Send Email',
    href: `mailto:${siteConfig.email}`,
  },
];

export default function ContactPage() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://artoftheroot.com/cdn/shop/articles/backup-article-558517944397_8d42cd6d-90d2-4224-9721-861522dd9c9e.jpg?v=1732551887')" }}
    >
      <div className="bg-background/80 backdrop-blur-sm">
        <div className="container py-16 md:py-24 px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Get In Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm here to help you on your journey to love and happiness. Reach out through any of the methods below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <Card key={method.title} className="text-center flex flex-col items-center p-6 shadow-lg bg-card/70">
                <CardHeader className="items-center">
                  {method.icon}
                  <CardTitle className="mt-4">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{method.description}</p>
                </CardContent>
                <Button asChild className="mt-4 bg-accent hover:bg-accent/90">
                  <Link href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.cta}
                  </Link>
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-sm mx-auto p-6 shadow-lg bg-card/70">
              <div className="flex items-center justify-center space-x-4">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-bold text-lg">Working Hours</h3>
                  <p className="text-muted-foreground">24/7 Remote Spell Work</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
