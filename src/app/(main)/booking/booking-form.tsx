"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { bookSpell, type State } from './actions';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90">
      {pending ? 'Submitting...' : 'Pay & Book Spell'}
    </Button>
  );
}

const spellTypes = [
  "Reunite Lovers Spell",
  "Attract New Love Spell",
  "Strengthen Relationship Spell",
  "Stop Break-Up / Divorce Spell",
  "Custom Spell Work",
];

export default function BookingForm() {
  const initialState: State = { message: null, errors: {}, success: false };
  const [state, dispatch] = useFormState(bookSpell, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Booking Successful!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message) {
      toast({
        variant: "destructive",
        title: "Booking Failed",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={dispatch} className="space-y-6">
      {state.success && (
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" name="fullName" placeholder="Your full name" required />
          {state.errors?.fullName && <p className="text-sm text-destructive">{state.errors.fullName[0]}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
          <Input id="whatsappNumber" name="whatsappNumber" placeholder="Your WhatsApp number" required />
          {state.errors?.whatsappNumber && <p className="text-sm text-destructive">{state.errors.whatsappNumber[0]}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" type="email" placeholder="Your email for confirmation" required />
        {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
         <div className="space-y-2">
          <Label htmlFor="spellType">Type of Spell</Label>
          <Select name="spellType">
              <SelectTrigger id="spellType">
                  <SelectValue placeholder="Select a spell" />
              </SelectTrigger>
              <SelectContent>
                  {spellTypes.map(spell => (
                      <SelectItem key={spell} value={spell}>{spell}</SelectItem>
                  ))}
              </SelectContent>
          </Select>
          {state.errors?.spellType && <p className="text-sm text-destructive">{state.errors.spellType[0]}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="targetPerson">Target Person's First Name</Label>
          <Input id="targetPerson" name="targetPerson" placeholder="e.g., John" required />
          {state.errors?.targetPerson && <p className="text-sm text-destructive">{state.errors.targetPerson[0]}</p>}
        </div>
      </div>

       <div className="space-y-2">
          <Label htmlFor="message">Describe your situation</Label>
          <Textarea id="message" name="message" placeholder="Tell me about your situation in detail." rows={5} required />
          {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
      </div>
      
      <div className="space-y-2">
          <Label htmlFor="photo">Upload Optional Photo</Label>
          <Input id="photo" name="photo" type="file" accept="image/*" />
          <p className="text-xs text-muted-foreground">A photo of you and/or the target person can help strengthen the spell. (Optional, max 5MB)</p>
          {state.errors?.photo && <p className="text-sm text-destructive">{state.errors.photo[0]}</p>}
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox id="terms" name="terms" />
        <div className="grid gap-1.5 leading-none">
          <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Accept Terms & Conditions
          </label>
          <p className="text-sm text-muted-foreground">
            You agree to our <a href="/refund-policy" className="underline">Refund Policy</a> and <a href="/privacy" className="underline">Privacy Policy</a>.
          </p>
          {state.errors?.terms && <p className="text-sm text-destructive">{state.errors.terms[0]}</p>}
        </div>
      </div>

      <div>
        <p className="text-center text-sm text-muted-foreground mb-4">Select your payment method</p>
        <div className="grid grid-cols-3 gap-4 mb-4">
            <Button type="button" variant="outline">PayPal</Button>
            <Button type="button" variant="outline">Crypto</Button>
            <Button type="button" variant="outline">Bank</Button>
        </div>
        <SubmitButton />
      </div>

    </form>
  );
}
