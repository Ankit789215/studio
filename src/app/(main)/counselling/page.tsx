
'use client';

import { useState } from 'react';
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Book, Briefcase, Calendar as CalendarIcon, Star, Clock, Video, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import Link from 'next/link';

const mentors = [
  {
    name: 'Ananya Sharma',
    avatar: 'https://picsum.photos/seed/professional-woman/150/150',
    avatarHint: 'professional woman',
    expertise: ['Career Coaching', 'Software Engineering', 'Interview Prep'],
    experience: '10+ Years at Google & Amazon',
    rating: 4.9,
    sessions: 250,
  },
  {
    name: 'Rohan Verma',
    avatar: 'https://picsum.photos/seed/professional-man/150/150',
    avatarHint: 'professional man',
    expertise: ['Higher Education', 'Study Abroad', 'Data Science'],
    experience: 'Harvard Alumnus, Education Consultant',
    rating: 4.8,
    sessions: 180,
  },
  {
    name: 'Priya Mehta',
    avatar: 'https://picsum.photos/seed/business-woman/150/150',
    avatarHint: 'business woman',
    expertise: ['Entrepreneurship', 'Business Strategy', 'Marketing'],
    experience: 'Founder of a successful tech startup',
    rating: 5.0,
    sessions: 300,
  },
  {
    name: 'Vikram Singh',
    avatar: 'https://picsum.photos/seed/academic-man/150/150',
    avatarHint: 'academic man',
    expertise: ['UPSC/Civil Services', 'Public Policy', 'Government Jobs'],
    experience: 'Retired IAS Officer',
    rating: 4.9,
    sessions: 400,
  },
  {
    name: 'Dr. Aisha Khan',
    avatar: 'https://picsum.photos/seed/doctor-woman/150/150',
    avatarHint: 'doctor woman',
    expertise: ['Medical Admissions', 'NEET Prep', 'Healthcare Careers'],
    experience: 'Doctor & Medical College Professor',
    rating: 4.8,
    sessions: 220,
  },
  {
    name: 'Sameer Desai',
    avatar: 'https://picsum.photos/seed/creative-man/150/150',
    avatarHint: 'creative man',
    expertise: ['Design Careers', 'Portfolio Building', 'UI/UX'],
    experience: 'Lead Designer at Adobe',
    rating: 4.9,
    sessions: 150,
  },
];

const timeSlots = ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'];

type Mentor = typeof mentors[0];
type BookedSession = {
  mentor: Mentor;
  date: Date;
  time: string;
}

export default function CounsellingPage() {
  const [bookedSessions, setBookedSessions] = useState<BookedSession[]>([]);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [joiningSession, setJoiningSession] = useState<BookedSession | null>(null);

  const { toast } = useToast();
  
  const handleBookClick = (mentor: Mentor) => {
    setSelectedMentor(mentor);
  };

  const handleConfirmBooking = () => {
    if (selectedMentor && selectedDate && selectedTime) {
      const newBooking: BookedSession = {
        mentor: selectedMentor,
        date: selectedDate,
        time: selectedTime
      };
      setBookedSessions(prev => [...prev, newBooking].sort((a,b) => a.date.getTime() - b.date.getTime()));
      toast({
        title: 'Session Booked!',
        description: `Your session with ${selectedMentor.name} is confirmed for ${format(selectedDate, 'PPP')} at ${selectedTime}.`,
      });
      setSelectedMentor(null);
      setSelectedDate(new Date());
      setSelectedTime(null);
    } else {
      toast({
        title: 'Incomplete Selection',
        description: 'Please select a date and a time slot.',
        variant: 'destructive',
      })
    }
  }


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

      {bookedSessions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Your Upcoming Sessions</CardTitle>
            <CardDescription>Manage your scheduled mentorship sessions here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {bookedSessions.map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={session.mentor.avatar} />
                    <AvatarFallback>{session.mentor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">{session.mentor.name}</p>
                    <p className="text-sm text-muted-foreground">{session.mentor.experience}</p>
                  </div>
                </div>
                <div className="text-right">
                    <p className="font-semibold flex items-center gap-2"><CalendarIcon className="h-4 w-4" /> {format(session.date, 'EEEE, LLL do')}</p>
                    <p className="text-sm text-muted-foreground flex items-center justify-end gap-2"><Clock className="h-4 w-4" /> {session.time}</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => setJoiningSession(session)}>
                  <Video className="mr-2 h-4 w-4"/>Join Call
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}


      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor) => (
          <Card key={mentor.name} className="flex flex-col text-center transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-[0_4px_30px_5px_hsl(var(--primary)/0.3)]">
            <CardHeader className="items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={mentor.avatar} alt={mentor.name} data-ai-hint={mentor.avatarHint} />
                <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle>{mentor.name}</CardTitle>
              <CardDescription className="flex items-center justify-center gap-2 pt-1">
                <Briefcase className="h-4 w-4" /> {mentor.experience}
              </CardDescription>
              <div className="flex items-center gap-1 pt-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="font-bold">{mentor.rating}</span>
                <span className="text-sm text-muted-foreground">({mentor.sessions}+ sessions)</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="text-left">
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
              <Button className="w-full" onClick={() => handleBookClick(mentor)}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                Book a Session
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedMentor} onOpenChange={() => setSelectedMentor(null)}>
        <DialogContent className="sm:max-w-2xl">
          {selectedMentor && (
            <>
              <DialogHeader>
                <DialogTitle>Book a session with {selectedMentor.name}</DialogTitle>
                <DialogDescription>
                  Select a date and time that works for you. All sessions are 45 minutes.
                </DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-8 py-4">
                <div className="flex justify-center">
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() -1))}
                        className="rounded-md border"
                    />
                </div>
                <div className="space-y-4">
                    <h4 className="font-semibold text-center md:text-left">
                        {selectedDate ? format(selectedDate, 'EEEE, LLLL d') : 'Select a date'}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((time) => (
                            <Button
                                key={time}
                                variant={selectedTime === time ? 'default' : 'outline'}
                                onClick={() => setSelectedTime(time)}
                            >
                                <Clock className="mr-2 h-4 w-4" />
                                {time}
                            </Button>
                        ))}
                    </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="ghost" onClick={() => setSelectedMentor(null)}>Cancel</Button>
                <Button onClick={handleConfirmBooking} disabled={!selectedDate || !selectedTime}>
                  Confirm Booking
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      <Dialog open={!!joiningSession} onOpenChange={() => setJoiningSession(null)}>
        <DialogContent>
          {joiningSession && (
            <>
              <DialogHeader>
                <DialogTitle>Joining Session</DialogTitle>
                <DialogDescription>
                  You are about to join your mentorship session with {joiningSession.mentor.name}.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4">
                  <p>Your session is scheduled for <span className="font-semibold">{format(joiningSession.date, 'PPP')} at {joiningSession.time}</span>.</p>
                  <p className="text-sm text-muted-foreground">In a real application, clicking the button below would open the Zoom application or a new browser tab.</p>
                  <Button asChild className="w-full">
                    <Link href={`https://zoom.us/j/${Math.floor(100000000 + Math.random() * 900000000)}`} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Join Dummy Zoom Meeting
                    </Link>
                  </Button>
              </div>
               <DialogFooter>
                <Button variant="outline" onClick={() => setJoiningSession(null)}>Close</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );

    

    