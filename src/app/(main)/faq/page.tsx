import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
  {
    question: "Is my situation too difficult for a spell?",
    answer: "I have successfully worked with a wide range of complex situations over the past 12 years. No case is too hopeless. The most important factor is your belief and the positive intention we set together. I recommend booking a consultation to discuss your specific circumstances."
  },
  {
    question: "Is my privacy protected?",
    answer: "100%. All consultations, personal details, and the work we do together are kept in the strictest confidence. Your privacy is a cornerstone of my practice. Please see my Privacy Policy page for more details."
  },
  {
    question: "What if the spell doesn't work?",
    answer: "While I have a very high success rate, the spiritual realm is not an exact science. The fee for a spell covers the time, materials, and intensive energy work I perform on your behalf. While I cannot guarantee a specific outcome, I do guarantee that I will perform your ritual with the utmost skill and dedication. I also offer post-spell support to help guide you."
  }
];

export default function FaqPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24 px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Answers to your questions about my spiritual services.
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
      </div>
    </div>
  );
}
