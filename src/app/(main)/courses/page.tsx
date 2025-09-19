import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { courses } from '@/lib/data';
import { ArrowRight, Book, Briefcase, GraduationCap, DollarSign, TrendingUp, Video, Users, Award, Building } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link';

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
        <Card key={stream} className="transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-[0_4px_30px_5px_hsl(var(--primary)/0.3)]">
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
                      
                      <Tabs defaultValue="careers" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="careers">Careers</TabsTrigger>
                          <TabsTrigger value="details">Details</TabsTrigger>
                          <TabsTrigger value="companies">Industry</TabsTrigger>
                          <TabsTrigger value="people">Journeys</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="careers" className="mt-6">
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
                        </TabsContent>

                        <TabsContent value="details" className="mt-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-2 flex items-center gap-2"><TrendingUp className="h-4 w-4"/>Career Growth</h4>
                                    <p className="text-sm text-muted-foreground">{course.careerGrowth}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 flex items-center gap-2"><DollarSign className="h-4 w-4"/>Salary Packages</h4>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between"><span>Entry Level:</span> <span className="font-medium">{course.packages.entry}</span></div>
                                        <div className="flex justify-between"><span>Experienced:</span> <span className="font-medium">{course.packages.experienced}</span></div>
                                    </div>
                                    {course.videos[0] && (
                                        <div className="mt-4">
                                            <h4 className="font-semibold mb-2 flex items-center gap-2"><Video className="h-4 w-4"/>Watch a Video</h4>
                                            <Link href={course.videos[0]} target="_blank" className="text-sm text-primary hover:underline flex items-center gap-2">
                                                Learn more about this field <ArrowRight className="h-3 w-3"/>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="companies" className="mt-6">
                            <h4 className="font-semibold mb-2 flex items-center gap-2"><Building className="h-4 w-4"/>Top Companies</h4>
                            <div className="flex flex-wrap gap-2">
                                {course.topCompanies.map(company => (
                                    <Badge key={company} variant="outline">{company}</Badge>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="people" className="mt-6">
                            <h4 className="font-semibold mb-2 flex items-center gap-2"><Users className="h-4 w-4"/>Inspirational Figures</h4>
                            <ul className="space-y-4">
                                {course.topPeople.map(person => (
                                    <li key={person.name} className="p-3 bg-muted/50 rounded-lg">
                                        <p className="font-semibold flex items-center gap-2"><Award className="h-4 w-4 text-accent"/>{person.name}</p>
                                        <p className="text-sm text-muted-foreground mt-1">{person.story}</p>
                                    </li>
                                ))}
                            </ul>
                        </TabsContent>

                      </Tabs>

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

    