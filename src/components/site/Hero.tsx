import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section id="hero">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Innovate, Create, Elevate Your Digital Presence
          </h1>
          <p className="max-w-2xl mx-auto text-foreground/80 md:text-xl lg:mx-0">
            AnnexSoft Digital Hub is your expert partner in navigating the digital landscape. We craft bespoke IT solutions that drive growth, enhance efficiency, and deliver exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild size="lg">
              <Link href="#services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
        <div className="w-full max-w-xl mx-auto lg:max-w-none">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={1200}
              height={800}
              className="rounded-lg shadow-2xl"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
