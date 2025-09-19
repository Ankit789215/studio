import { timelineEvents } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, GraduationCap, PenSquare } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

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

      <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-border after:left-0">
        {sortedEvents.map((event, index) => {
          const config = categoryConfig[event.category];
          const Icon = config?.icon || CalendarIcon;
          const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

          return (
            <div key={event.id} className="relative grid grid-cols-[auto_1fr] items-start gap-x-6 pb-8">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background -left-[2.8rem] mt-1 ring-8 ring-background">
                <Icon className={`h-5 w-5 ${config.color}`} />
              </div>

              <div className="flex-grow pt-1">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-muted-foreground">{formattedDate}</p>
                    <Badge variant="secondary">{event.category}</Badge>
                </div>
                <h3 className="mt-1 text-lg font-semibold">{event.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
