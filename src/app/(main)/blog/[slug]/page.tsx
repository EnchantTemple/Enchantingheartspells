import Image from 'next/image';
import { notFound } from 'next/navigation';

// In a real app, you'd fetch this from a CMS
const blogPosts = {
  "5-signs-you-need-a-love-spell": {
    title: "5 Signs You Need a Love Spell",
    content: `
      <p>Are you feeling lost in love? Sometimes, the universe sends us signals. Here are five signs that a love spell might be the answer to your heart's troubles.</p>
      <h3 class="font-bold mt-4">1. Constant Thoughts of Them</h3>
      <p>If you can't get your ex-partner out of your head, it might be a sign of a lingering energetic connection that needs a nudge.</p>
      <h3 class="font-bold mt-4">2. Seeing 'Signs' Everywhere</h3>
      <p>Repetitive numbers, their name popping up unexpectedly... these aren't always coincidences. The universe might be telling you to act.</p>
      <h3 class="font-bold mt-4">3. A Feeling of Unfinished Business</h3>
      <p>If your breakup felt abrupt or unresolved, a spell can help bring closure or a second chance.</p>
      <h3 class="font-bold mt-4">4. Dreams About Them</h3>
      <p>The dream world is a powerful spiritual plane. Frequent dreams can indicate a strong soul tie that can be rekindled.</p>
      <h3 class="font-bold mt-4">5. A Gut Feeling</h3>
      <p>Never underestimate your intuition. If your heart tells you it's not over, a love spell can help align reality with your feelings.</p>
    `,
    image: "https://picsum.photos/800/400?a=1",
    aiHint: "mystical signs love",
  },
  "how-the-full-moon-affects-spell-energy": {
    title: "How the Full Moon Affects Spell Energy",
    content: `
      <p>The lunar cycle has a profound impact on spiritual work. The full moon, in particular, is a time of peak energy, manifestation, and heightened emotions. This makes it the most powerful time to cast love spells.</p>
      <p>During the full moon, the intentions you set are amplified. It's the perfect time for spells related to bringing something to fruition, like reuniting with a lover or attracting a new soulmate. The energy is ripe for completion and manifestation.</p>
    `,
    image: "https://picsum.photos/800/400?a=2",
    aiHint: "full moon sky",
  },
"why-african-love-spells-are-so-powerful": {
    title: "Why African Love Spells Are So Powerful",
    content: `
      <p>Rooted in ancient traditions and a deep connection to nature and ancestors, traditional African spirituality offers some of the most potent forms of spellwork. These spells are not just about chanting words; they involve herbs, roots, personal items, and a deep understanding of energy flows.</p>
      <p>As a 5th-generation healer from Benin, my practices are passed down through my lineage. This is not something learned from books, but a living tradition. This connection to ancestral power is what makes these spells so effective and life-changing.</p>
    `,
    image: "https://picsum.photos/800/400?a=3",
    aiHint: "african patterns",
  },
"truth-about-black-magic-what-i-will-never-do": {
    title: "The Truth About Black Magic: What I Will Never Do",
    content: `
      <p>There's a lot of fear and misinformation surrounding magic. True spiritual work, as I practice it, is about healing, alignment, and positive manifestation. It respects free will and aims to bring happiness, not to control or harm.</p>
      <p>I will never cast a spell to break up a happy relationship, force someone against their will, or cause any form of harm. My ethics are strict: I work only with light and love. My goal is to heal hearts and mend bonds, not to manipulate them. This ethical foundation is why my spells are safe and bring lasting, positive results without negative karmic consequences.</p>
    `,
    image: "https://picsum.photos/800/400?a=4",
    aiHint: "light dark contrast",
  },
};

type Post = {
    title: string;
    content: string;
    image: string;
    aiHint: string;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = (blogPosts as Record<string, Post>)[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24 px-4 md:px-6">
        <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
          <div className="mb-8">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full rounded-lg shadow-lg"
              data-ai-hint={post.aiHint}
            />
          </div>
          <h1 className="text-primary font-headline">{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
