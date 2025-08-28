import BookingForm from './booking-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Lock, Gift } from 'lucide-react';

export default function BookingPage() {
  return (
    <div className="bg-secondary">
      <div className="container py-16 md:py-24 px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Book Your Spell</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Take the first step towards restoring your love life. Fill out the confidential form below to begin your journey.
            </p>
            <div className="mt-8">
              <BookingForm />
            </div>
          </div>
          <div className="lg:col-span-2">
            <Card className="sticky top-24 shadow-lg">
              <CardHeader>
                <CardTitle>Why Book With Us?</CardTitle>
                <CardDescription>Your privacy and success are our top priorities.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <ShieldCheck className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Ethical & Safe</h4>
                    <p className="text-sm text-muted-foreground">All spells are 100% safe and cast with positive intentions. No bad karma.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Lock className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Completely Confidential</h4>
                    <p className="text-sm text-muted-foreground">Your information is never shared. We respect your privacy above all else.</p>
                  </div>
                </div>
                 <div className="flex items-start space-x-4">
                  <Gift className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Personalized Ritual</h4>
                    <p className="text-sm text-muted-foreground">Each spell is customized to your specific situation for maximum effectiveness.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
