import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, CalendarClock, Compass, PencilRuler, School } from 'lucide-react';

const quickLinks = [
    {
        title: "Take the Aptitude Quiz",
        description: "Discover your strengths and get course recommendations.",
        href: "/quiz",
        icon: PencilRuler,
    },
    {
        title: "Explore Courses",
        description: "Map your journey from course to career.",
        href: "/courses",
        icon: Compass,
    },
    {
        title: "Find Colleges",
        description: "Search for government colleges near you.",
        href: "/colleges",
        icon: School,
    },
    {
        title: "Check Timeline",
        description: "Stay updated on important dates and deadlines.",
        href: "/timeline",
        icon: CalendarClock,
    },
    {
        title: "Learning Resources",
        description: "Get personalized study materials and links.",
        href: "/resources",
        icon: BookOpen,
    }
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Welcome, Student!
        </h1>
        <p className="text-muted-foreground">
          Let&apos;s find the right path for your future.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {quickLinks.map((link) => (
            <Card key={link.href} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">{link.title}</CardTitle>
                    <link.icon className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <p className="text-xs text-muted-foreground mb-4">{link.description}</p>
                    <Button size="sm" className="w-full" asChild>
                       <Link href={link.href}>
                         Go to {link.label || link.title.split(' ')[1]}
                         <ArrowUpRight className="h-4 w-4 ml-2" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
