import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { courses } from '@/lib/data';
import { ArrowRight, Book, Briefcase, GraduationCap } from 'lucide-react';

export default function CoursesPage() {
  const streams = ['Science', 'Commerce', 'Arts'];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Course-to-Career Explorer
        </h1>
        <p className="text-muted-foreground">
          Discover where each degree can take you.
        </p>
      </div>

      {streams.map((stream) => (
        <Card key={stream}>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">{stream}</CardTitle>
            <CardDescription>Courses and career paths in the {stream.toLowerCase()} stream.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {courses
                .filter((c) => c.stream === stream)
                .map((course) => (
                  <AccordionItem key={course.id} value={course.id}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      <div className="flex items-center gap-4">
                        <course.icon className="h-6 w-6 text-primary" />
                        {course.name}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
                      <p className="text-muted-foreground">{course.description}</p>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2"><Briefcase className="h-4 w-4"/>Career Paths</h4>
                          <ul className="space-y-2">
                            {course.careerPaths.map(path => (
                              <li key={path.name} className="flex items-center gap-2 text-sm">
                                <path.icon className="h-4 w-4 text-muted-foreground"/> {path.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2"><GraduationCap className="h-4 w-4"/>Further Studies</h4>
                          <ul className="space-y-2">
                          {course.furtherStudies.map(study => (
                              <li key={study} className="flex items-center gap-2 text-sm">
                                <ArrowRight className="h-4 w-4 text-muted-foreground"/> {study}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2"><Book className="h-4 w-4"/>Govt. Exams</h4>
                          <div className="flex flex-wrap gap-2">
                            {course.govExams.map(exam => (
                              <Badge key={exam} variant="secondary">{exam}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
