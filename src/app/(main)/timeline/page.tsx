import { timelineEvents } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, GraduationCap, PenSquare } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const categoryConfig: {
  [key: string]: { icon: LucideIcon; color: string };
} = {
  Admissions: { icon: GraduationCap, color: 'text-blue-500' },
  Scholarships: { icon: CalendarIcon, color: 'text-green-500' },
  Exams: { icon: PenSquare, color: 'text-orange-500' },
};

export default function TimelinePage() {
  const sortedEvents = [...timelineEvents].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Important Dates & Timeline
        </h1>
        <p className="text-muted-foreground">
          Keep track of admissions, exams, and scholarship deadlines.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {sortedEvents.map((event) => {
          const config = categoryConfig[event.category];
          const Icon = config?.icon || CalendarIcon;
          const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

          return (
            <AccordionItem key={event.id} value={event.id} className="border-b-0">
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background ring-8 ring-background">
                  <Icon className={`h-5 w-5 ${config.color}`} />
                </div>

                <AccordionTrigger className="flex-row-reverse justify-end gap-x-4 rounded-lg bg-muted/50 p-4 text-left hover:no-underline hover:bg-muted">
                    <div className="flex-grow">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-muted-foreground">{formattedDate}</p>
                            <Badge variant="secondary">{event.category}</Badge>
                        </div>
                        <h3 className="mt-1 text-lg font-semibold">{event.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-2">
                    <p className="text-sm text-muted-foreground">{event.details}</p>
                </AccordionContent>
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
