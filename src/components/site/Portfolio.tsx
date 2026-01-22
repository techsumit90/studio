
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolioItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const categories = ['All', ...Array.from(new Set(portfolioItems.map((item) => item.category)))];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredItems =
    activeTab === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Our Portfolio
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/80 md:text-xl">
            A glimpse into the successful projects we've delivered for our clients.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 md:grid-cols-5 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => {
              const image = PlaceHolderImages.find((img) => img.id === item.image.id);
              return (
                <Card key={item.id} className="overflow-hidden group">
                  <CardContent className="p-0">
                    {image && (
                      <div className="relative aspect-video">
                        <Image
                          src={image.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          data-ai-hint={item.image.hint}
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h3 className="font-bold text-lg">{item.title}</h3>
                          <p className="text-sm">{item.category}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
