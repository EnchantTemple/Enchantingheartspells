import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Ghost } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
      <Ghost className="h-24 w-24 text-primary animate-bounce" />
      <h1 className="mt-8 text-4xl font-bold font-headline text-primary">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you're looking for seems to have vanished into the ether.
      </p>
      <Button asChild className="mt-8 bg-accent hover:bg-accent/90">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  );
}
