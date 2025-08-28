import Link from 'next/link';
import { WhatsAppIcon } from './icons';

export default function WhatsAppChat() {
  return (
    <Link
      href="https://wa.me/12494800550"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </Link>
  );
}
