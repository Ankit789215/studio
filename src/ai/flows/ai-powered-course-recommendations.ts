'use server';
/**
 * @fileOverview AI-powered course and career recommendations based on aptitude quiz results and student profile.
 *
 * - recommendCoursesAndCareers - A function that takes quiz results and student profile data to recommend suitable courses and careers.
 * - RecommendCoursesAndCareersInput - The input type for the recommendCoursesAndCareers function.
 * - RecommendCoursesAndCareersOutput - The return type for the recommendCoursesAndCareers function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendCoursesAndCareersInputSchema = z.object({
  quizResults: z.record(z.any()).describe('The results from the aptitude quiz, mapping question IDs to answers.'),
  studentProfile: z
    .object({
      age: z.number().describe('The age of the student.'),
      gender: z.string().describe('The gender of the student.'),
      class: z.number().describe('The current class of the student.'),
      academicInterests: z.array(z.string()).describe('The academic interests of the student.'),
    })
    .describe('The profile information of the student.'),
});
export type RecommendCoursesAndCareersInput = z.infer<
  typeof RecommendCoursesAndCareersInputSchema
>;

const RecommendCoursesAndCareersOutputSchema = z.object({
  recommendedStream: z
    .enum(['Science', 'Commerce', 'Arts'])
    .describe(
      'The recommended field of study (Science, Commerce, or Arts) based on the aptitude test.'
    ),
  recommendedCourses: z
    .array(z.string())
    .describe('The list of recommended courses based on the quiz results and student profile.'),
  recommendedCareers: z
    .array(z.string())
    .describe('The list of recommended careers based on the quiz results and student profile.'),
  bestCareerOption: z.string().describe('The single best career option from the recommended list.'),
  reasoning: z.string().describe('Explanation of how courses and the best career were recommended.'),
});
export type RecommendCoursesAndCareersOutput = z.infer<
  typeof RecommendCoursesAndCareersOutputSchema
>;

export async function recommendCoursesAndCareers(
  input: RecommendCoursesAndCareersInput
): Promise<RecommendCoursesAndCareersOutput> {
  return recommendCoursesAndCareersFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendCoursesAndCareersPrompt',
  input: {
    schema: RecommendCoursesAndCareersInputSchema,
  },
  output: {
    schema: RecommendCoursesAndCareersOutputSchema,
  },
  prompt: `Based on the aptitude quiz results and the student's profile, recommend the most suitable field of study (Science, Commerce, or Arts) and a list of suitable courses and careers.

Aptitude Quiz Results: {{{JSON.stringify quizResults}}}
Student Profile: {{{JSON.stringify studentProfile}}}

1. First, analyze the quiz answers and student profile to determine which of the three streams - Science, Commerce, or Arts - is the best fit.
2. Then, recommend a few specific courses and a list of career paths that align with that stream and the student's profile.
3. From the list of recommended careers, identify the single best career option that is the strongest match.
4. Finally, provide a clear and concise reasoning for your recommendations, explaining why the stream, courses, and especially the best career option are a good fit for the student.

Output the recommended stream, a list of courses, a list of careers, the single best career option, and the reasoning.
`,
});

const recommendCoursesAndCareersFlow = ai.defineFlow(
  {
    name: 'recommendCoursesAndCareersFlow',
    inputSchema: RecommendCoursesAndCareersInputSchema,
    outputSchema: RecommendCoursesAndCareersOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
