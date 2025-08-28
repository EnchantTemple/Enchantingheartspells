import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    slug: "5-signs-you-need-a-love-spell",
    title: "5 Signs You Need a Love Spell",
    excerpt: "Are you feeling lost in love? Sometimes, the universe sends us signals. Here are five signs that a love spell might be the answer to your heart's troubles.",
    image: "https://picsum.photos/400/250?a=1",
    aiHint: "mystical signs love",
  },
  {
    slug: "how-the-full-moon-affects-spell-energy",
    title: "How the Full Moon Affects Spell Energy",
    excerpt: "The lunar cycle has a profound impact on spiritual work. Discover how the full moon can amplify the power of your love spells and rituals.",
    image: "https://picsum.photos/400/250?a=2",
    aiHint: "full moon sky",
  },
  {
    slug: "why-african-love-spells-are-so-powerful",
    title: "Why African Love Spells Are So Powerful",
    excerpt: "Rooted in ancient traditions and deep spiritual understanding, African love spells are known for their potency. Learn what makes them so effective.",
    image: "https://picsum.photos/400/250?a=3",
    aiHint: "african patterns",
  },
  {
    slug: "truth-about-black-magic-what-i-will-never-do",
    title: "Truth About Black Magic: What I Will Never Do",
    excerpt: "There's a lot of misinformation about magic. I believe in ethical, positive spell casting. Here’s my commitment to never using black magic.",
    image: "https://picsum.photos/400/250?a=4",
    aiHint: "light dark contrast",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24 px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">From My Book of Shadows</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Insights on love, energy, and the art of ethical spell casting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={`/blog/${post.slug}`} className="block">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                  data-ai-hint={post.aiHint}
                />
              </Link>
              <CardHeader>
                <CardTitle>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="link" className="p-0">
                  <Link href={`/blog/${post.slug}`}>Read More &rarr;</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
