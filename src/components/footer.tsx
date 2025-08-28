import Link from 'next/link';
import { Logo, DmcaBadge, GoogleSafeBrowsingBadge } from './icons';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-bold text-lg">EnchantingHeartSpells</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A sanctuary where love, energy, and intention align.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Spells</h3>
                <ul className="space-y-2">
                  <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">All Services</Link></li>
                  <li><Link href="/booking" className="text-sm text-muted-foreground hover:text-primary">Book a Spell</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">About Us</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Lady Amina</Link></li>
                  <li><Link href="/testimonials" className="text-sm text-muted-foreground hover:text-primary">Testimonials</Link></li>
                  <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
                </ul>
              </div>
               <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                  <li><Link href="/refund-policy" className="text-sm text-muted-foreground hover:text-primary">Refund Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EnchantingHeartSpells. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
             <DmcaBadge className="h-6" />
             <GoogleSafeBrowsingBadge />
          </div>
        </div>
      </div>
    </footer>
  );
}
