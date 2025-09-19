'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
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
  ArrowRight,
  BrainCircuit,
  Briefcase,
  FlaskConical,
  Landmark,
  Palette,
  Sparkles,
  Target,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { RecommendCoursesAndCareersOutput } from '@/ai/flows/ai-powered-course-recommendations';

const streamIcons: { [key: string]: LucideIcon } = {
  Science: FlaskConical,
  Commerce: Landmark,
  Arts: Palette,
};

function ResultsDisplay() {
  const searchParams = useSearchParams();
  const recommendationsParam = searchParams.get('recommendations');

  if (!recommendationsParam) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Results Found</CardTitle>
          <CardDescription>
            It seems there was an issue fetching your results.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Please try taking the quiz again.</p>
          <Button asChild className="mt-4">
            <Link href="/quiz">Back to Quiz</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  const recommendations: RecommendCoursesAndCareersOutput = JSON.parse(recommendationsParam);
  const RecommendedStreamIcon = streamIcons[recommendations.recommendedStream] || BrainCircuit;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-headline">Your Personalized Recommendations</h1>
        <p className="text-muted-foreground mt-2">Based on your quiz results, here are some paths you might excel in.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-primary border-2 text-center flex flex-col justify-center">
            <CardHeader>
              <div className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center">
                <RecommendedStreamIcon className="h-8 w-8" />
              </div>
              <CardTitle className="mt-4">Your Recommended Stream</CardTitle>
              <CardDescription className="text-2xl font-bold text-primary">
                {recommendations.recommendedStream}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-accent border-2 text-center flex flex-col justify-center">
            <CardHeader>
              <div className="mx-auto bg-accent text-accent-foreground rounded-full h-16 w-16 flex items-center justify-center">
                <Target className="h-8 w-8" />
              </div>
              <CardTitle className="mt-4">Your Top Career Match</CardTitle>
              <CardDescription className="text-2xl font-bold text-accent">
                {recommendations.bestCareerOption}
              </CardDescription>
            </CardHeader>
          </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="text-primary" />
              Recommended Courses
            </CardTitle>
            <CardDescription>
              These courses align with your interests and strengths.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recommendations.recommendedCourses.map((course) => (
                <li key={course} className="flex items-center gap-3">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="font-medium">{course}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="text-primary" />
              Other Potential Career Paths
            </CardTitle>
            <CardDescription>
              Your skills could also be a great fit for these professions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recommendations.recommendedCareers.map((career) => (
                <li key={career} className="flex items-center gap-3">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="font-medium">{career}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Why These Recommendations?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{recommendations.reasoning}</p>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/courses">
            Explore Courses in Detail <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function QuizResultsPage() {
    return (
        <Suspense fallback={<div>Loading results...</div>}>
            <ResultsDisplay />
        </Suspense>
    )
}
