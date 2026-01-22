
'use client';

import { testimonials } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { User, Wand2 } from 'lucide-react';
import { Button } from '../ui/button';
import { ContentSuggestionTool } from '../ai/ContentSuggestionTool';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-card">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/80 md:text-xl">
            Real stories from satisfied partners who have achieved success with us.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                        <blockquote className="mb-6 text-lg italic text-foreground/80">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-muted rounded-full">
                            <User className="w-8 h-8 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-foreground/60">{testimonial.company}</p>
                          </div>
                        </div>
                        <ContentSuggestionTool 
                          contentToImprove={testimonial.quote}
                          title="Testimonial"
                          trigger={
                            <Button variant="ghost" size="sm">
                              <Wand2 className="mr-2 h-4 w-4 text-accent" />
                              Improve with AI
                            </Button>
                          }
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
