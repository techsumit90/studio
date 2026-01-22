import { services, type Service } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wand2 } from 'lucide-react';
import { ContentSuggestionTool } from '../ai/ContentSuggestionTool';

export default function Services() {
  return (
    <section id="services" className="bg-card">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/80 md:text-xl">
            We offer a comprehensive suite of IT services to bring your digital vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="flex-grow">{service.description}</CardDescription>
                 <div className="mt-4">
                  <ContentSuggestionTool 
                    contentToImprove={service.description}
                    title={service.title}
                    trigger={
                      <Button variant="ghost" size="sm" className="w-full">
                        <Wand2 className="mr-2 h-4 w-4 text-accent" />
                        Improve with AI
                      </Button>
                    }
                  />
                 </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
