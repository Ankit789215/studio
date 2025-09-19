import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpen,
  CalendarClock,
  Compass,
  PencilRuler,
  School,
  Bot,
  User,
  Bell,
  Sparkles,
  Target,
  LineChart,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import UserNav from '@/components/user-nav';

const quickLinks = [
  {
    title: 'Career Tests',
    description: 'Discover your strengths.',
    href: '/quiz',
    icon: PencilRuler,
    label: 'Take Quiz',
  },
  {
    title: 'Courses',
    description: 'Map your journey to a career.',
    href: '/courses',
    icon: Compass,
    label: 'Explore',
  },
  {
    title: 'Mentor Chat',
    description: 'Get AI-powered guidance.',
    href: '/chat',
    icon: Bot,
    label: 'Chat Now',
  },
  {
    title: 'Progress Tracker',
    description: 'Monitor your goals.',
    href: '#',
    icon: LineChart,
    label: 'View Progress',
  },
];

const recommendations = [
    {
        title: 'B.Sc. in Computer Science',
        reason: 'Matches your interest in technology and problem-solving.',
        type: 'Course'
    },
    {
        title: 'Data Scientist',
        reason: 'High demand career aligning with your analytical skills.',
        type: 'Career'
    },
    {
        title: 'Python for Everybody Specialization',
        reason: 'A foundational course for your data science interest.',
        type: 'Resource'
    }
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            Welcome, Student!
          </h1>
          <p className="text-muted-foreground">
            Let&apos;s find the right path for your future.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1 transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-[0_4px_30px_5px_hsl(var(--primary)/0.3)]">
          <CardHeader className="flex flex-row items-center gap-4 pb-4">
            <User className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-xl">Your Profile</CardTitle>
              <CardDescription>Software Engineer Aspirant</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Profile Completion</span>
                <span className="font-semibold">75%</span>
              </div>
              <Progress value={75} />
              <Button variant="link" size="sm" className="p-0 h-auto">
                Complete your profile
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2 transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-[0_4px_30px_5px_hsl(var(--primary)/0.3)]">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <LineChart className="text-accent"/>
                    Impact of Education on Your Career
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                A strong educational foundation is the cornerstone of a successful career. It not only equips you with specialized knowledge but also develops critical thinking, problem-solving, and communication skills that are invaluable in any profession. Continuous learning is key to adapting to new challenges and seizing future opportunities.
                </p>
            </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
          {quickLinks.map((link) => (
              <Card key={link.href} className="transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-[0_4px_30px_5px_hsl(var(--primary)/0.3)] flex flex-col">
                  <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <link.icon className="w-6 h-6 text-muted-foreground" />
                        <CardTitle className="text-lg">{link.title}</CardTitle>
                      </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                  </CardContent>
                  <CardContent>
                      <Button size="sm" className="w-full" asChild>
                         <Link href={link.href}>
                           {link.label}
                           <ArrowUpRight className="h-4 w-4 ml-2" />
                          </Link>
                      </Button>
                  </CardContent>
              </Card>
          ))}
      </div>
      
      <Card className="transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-[0_4px_30px_5px_hsl(var(--primary)/0.3)]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="text-primary" />
            Personalized Recommendations
          </CardTitle>
          <CardDescription>
            Based on your profile and quiz results, here are some suggestions for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {recommendations.map((rec) => (
            <div key={rec.title} className="p-4 bg-muted/50 rounded-lg">
                <p className="text-xs font-semibold uppercase text-accent">{rec.type}</p>
                <h4 className="font-semibold mt-1">{rec.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{rec.reason}</p>
            </div>
          ))}
        </CardContent>
      </Card>

    </div>
  );
}
