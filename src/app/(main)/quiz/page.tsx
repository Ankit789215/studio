'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { quizQuestions } from '@/lib/data';
import { recommendCourses } from './actions';
import { useToast } from '@/hooks/use-toast';

type Answers = Record<string, string>;

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const progress = ((currentStep + 1) / quizQuestions.length) * 100;
  const currentQuestion = quizQuestions[currentStep];

  const handleAnswerChange = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleNext = () => {
    if (answers[currentQuestion.id]) {
      if (currentStep < quizQuestions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    } else {
      toast({
        title: 'Please select an option',
        description: 'You must select an answer to continue.',
        variant: 'destructive',
      });
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const studentProfile = {
        age: 17,
        gender: 'Not specified',
        class: 12,
        academicInterests: ['Science', 'Technology'],
      };

      const recommendations = await recommendCourses({ quizResults: answers, studentProfile });

      const params = new URLSearchParams();
      params.set('recommendations', JSON.stringify(recommendations));
      router.push(`/quiz/results?${params.toString()}`);

    } catch (error) {
      console.error(error);
      toast({
        title: 'An error occurred',
        description: 'Failed to get recommendations. Please try again.',
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-start py-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Aptitude Quiz</CardTitle>
          <CardDescription>
            Answer these questions to find your best-fit courses.
          </CardDescription>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
        <CardContent className="min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-semibold mb-4">
                {currentQuestion.question}
              </h2>
              <RadioGroup
                value={answers[currentQuestion.id]}
                onValueChange={handleAnswerChange}
                className="space-y-3"
              >
                {currentQuestion.options.map((option) => (
                  <div
                    key={option.id}
                    className="flex items-center space-x-2 p-3 rounded-md border border-transparent has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-accent/20"
                  >
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id} className="text-base font-normal cursor-pointer">
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </motion.div>
          </AnimatePresence>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleNext}
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : currentStep === quizQuestions.length - 1 ? (
              'Finish & See Results'
            ) : (
              'Next Question'
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
