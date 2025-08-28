import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck, Shield, HeartHandshake } from 'lucide-react';

const certifications = [
  "Energy Healing License — Holistic Practitioner Board",
  "Spiritual Wellness Certification — Global Occult Council (G.O.C.)",
  "Registered Member — Spiritual Advisors Network (SAN)",
];

const coreValues = [
  {
    icon: <Shield className="h-6 w-6 text-accent" />,
    title: "Ethical Spell Casting",
    description: "All rituals are performed with pure intentions and positive energy.",
  },
  {
    icon: <BadgeCheck className="h-6 w-6 text-accent" />,
    title: "100% Confidentiality",
    description: "Your privacy is paramount. All consultations are kept strictly secret.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-accent" />,
    title: "No Black Magic",
    description: "We do not engage in harmful practices or intend any harm to others.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              About Lady Amina
            </h1>
            <p className="text-lg text-muted-foreground">
              Hello, I’m a spiritualist and 5th-generation African healer. I was born with the divine gift of energetic alignment and emotional healing. My journey began in the sacred lands of Benin, where my grandmother passed down secret ancestral rituals for love and harmony.
            </p>
            <p className="text-lg text-muted-foreground">
              For over a decade, I have dedicated my life to helping people find and restore love. My methods are a blend of ancient wisdom and modern spiritual understanding, ensuring that every spell is cast with the utmost care, respect, and ethical consideration.
            </p>
          </div>
          <div>
            <Card className="overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/600/700"
                alt="Lady Amina"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                data-ai-hint="spiritual woman portrait"
              />
            </Card>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <h2 className="text-3xl font-bold text-center mb-8 font-headline text-primary">
            Certifications & Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BadgeCheck className="text-primary" />
                  My Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-3 mt-1">✨</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeartHandshake className="text-primary" />
                  My Core Values
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {coreValues.map((value) => (
                  <div key={value.title} className="flex items-start space-x-4">
                    <div>{value.icon}</div>
                    <div>
                      <h4 className="font-semibold">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
