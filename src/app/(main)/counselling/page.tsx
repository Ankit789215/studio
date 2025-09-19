
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Book, Briefcase, Calendar, Star } from 'lucide-react';

const mentors = [
  {
    name: 'Ananya Sharma',
    avatar: 'https://i.pravatar.cc/150?u=mentor1',
    expertise: ['Career Coaching', 'Software Engineering', 'Interview Prep'],
    experience: '10+ Years at Google & Amazon',
    rating: 4.9,
    sessions: 250,
  },
  {
    name: 'Rohan Verma',
    avatar: 'https://i.pravatar.cc/150?u=mentor2',
    expertise: ['Higher Education', 'Study Abroad', 'Data Science'],
    experience: 'Harvard Alumnus, Education Consultant',
    rating: 4.8,
    sessions: 180,
  },
  {
    name: 'Priya Mehta',
    avatar: 'https://i.pravatar.cc/150?u=mentor3',
    expertise: ['Entrepreneurship', 'Business Strategy', 'Marketing'],
    experience: 'Founder of a successful tech startup',
    rating: 5.0,
    sessions: 300,
  },
];

export default function CounsellingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          One-to-One Counselling
        </h1>
        <p className="text-muted-foreground">
          Book a personalized session with an expert mentor.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor) => (
          <Card key={mentor.name} className="flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader className="items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={mentor.avatar} alt={mentor.name} />
                <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle>{mentor.name}</CardTitle>
              <CardDescription className="flex items-center gap-2 pt-1">
                <Briefcase className="h-4 w-4" /> {mentor.experience}
              </CardDescription>
              <div className="flex items-center gap-1 pt-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="font-bold">{mentor.rating}</span>
                <span className="text-sm text-muted-foreground">({mentor.sessions}+ sessions)</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Book className="h-4 w-4" />
                  Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                Book a Session
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
