import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Briefcase, Bot } from 'lucide-react';
import Logo from '@/components/logo';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-students');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline text-primary">
            Disha Darshan
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none font-headline text-primary">
                    Your Personalized Career & Education Mentor
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover your ideal career path, find the perfect courses,
                    and get expert guidance with our AI-powered platform.
                    Your future starts here.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/dashboard">
                      Get Started <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/courses">Explore Courses</Link>
                  </Button>
                </div>
              </div>
              {heroImage && (
                <div className="flex items-center justify-center">
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={600}
                    height={400}
                    data-ai-hint={heroImage.imageHint}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-24 lg:py-32 bg-muted/70">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Features to Guide Your Journey
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-lg">
                  Everything you need to make informed decisions about your
                  education and career, all in one place.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
              <div className="grid gap-1 text-center p-6 rounded-lg hover:bg-card transition-all">
                <GraduationCap className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-lg font-bold">Course & Career Matching</h3>
                <p className="text-sm text-muted-foreground">
                  Take our aptitude quiz and get AI-powered recommendations for
                  courses and careers that fit you best.
                </p>
              </div>
              <div className="grid gap-1 text-center p-6 rounded-lg hover:bg-card transition-all">
                <Briefcase className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-lg font-bold">Career Path Explorer</h3>
                <p className="text-sm text-muted-foreground">
                  Visualize your future with detailed roadmaps for various
                  professions, from required degrees to potential salaries.
                </p>
              </div>
              <div className="grid gap-1 text-center p-6 rounded-lg hover:bg-card transition-all">
                <Bot className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-lg font-bold">AI Mentor Chat</h3>
                <p className="text-sm text-muted-foreground">
                  Have a question? Our AI mentor is available 24/7 to provide
                  guidance and answer your queries.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t">
        <div className="container mx-auto py-6 px-4 md:px-6 flex justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Disha Darshan. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
