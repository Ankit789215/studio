'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  BookOpen,
  CalendarClock,
  Compass,
  LayoutDashboard,
  PencilRuler,
  School,
  Settings,
  User,
  Bot,
} from 'lucide-react';
import Logo from './logo';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/quiz', icon: PencilRuler, label: 'Aptitude Quiz' },
  { href: '/courses', icon: Compass, label: 'Course Explorer' },
  { href: '/colleges', icon: School, label: 'College Directory' },
  { href: '/timeline', icon: CalendarClock, label: 'Timeline' },
  { href: '/resources', icon: BookOpen, label: 'Learning Resources' },
  { href: '/chat', icon: Bot, label: 'Mentor Chat' },
];

const bottomNavItems = [
  { href: '/profile', icon: User, label: 'Profile' },
];

export default function MainSidebar() {
  const pathname = usePathname();

  const renderNavItem = (item: typeof navItems[0]) => (
    <Tooltip key={item.href}>
      <TooltipTrigger asChild>
        <Link
          href={item.href}
          className={cn(
            'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
            pathname.startsWith(item.href) && 'bg-accent text-accent-foreground'
          )}
        >
          <item.icon className="h-5 w-5" />
          <span className="sr-only">{item.label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{item.label}</TooltipContent>
    </Tooltip>
  );

  return (
    <TooltipProvider>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/dashboard"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Logo className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Disha Darshan</span>
          </Link>
          {navItems.map(renderNavItem)}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          {bottomNavItems.map(renderNavItem)}
        </nav>
      </aside>
    </TooltipProvider>
  );
}
