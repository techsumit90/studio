import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { WhatsAppIcon } from '../icons/whatsapp';
import { Button } from '../ui/button';

export default function FloatingSocials() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <Button
        asChild
        size="icon"
        className="rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white"
        aria-label="Contact on WhatsApp"
      >
        <Link href="https://wa.me/918308848771" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="h-7 w-7" />
        </Link>
      </Button>
      <Button
        asChild
        size="icon"
        className="rounded-full w-14 h-14 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white"
        aria-label="Follow on Instagram"
      >
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-7 w-7" />
        </Link>
      </Button>
    </div>
  );
}
