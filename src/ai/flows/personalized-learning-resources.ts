'use server';

/**
 * @fileOverview An AI agent that curates a personalized set of links to open-source educational resources based on user interests.
 *
 * - getPersonalizedLearningResources - A function that handles the process of retrieving personalized learning resources.
 * - PersonalizedLearningResourcesInput - The input type for the getPersonalizedLearningResources function.
 * - PersonalizedLearningResourcesOutput - The return type for the getPersonalizedLearningResources function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLearningResourcesInputSchema = z.object({
  interests: z
    .string()
    .describe('A comma-separated list of the student\'s academic interests.'),
});
export type PersonalizedLearningResourcesInput = z.infer<
  typeof PersonalizedLearningResourcesInputSchema
>;

const PersonalizedLearningResourcesOutputSchema = z.object({
  resources: z
    .array(z.string())
    .describe('A list of URLs to open-source educational resources.'),
});
export type PersonalizedLearningResourcesOutput = z.infer<
  typeof PersonalizedLearningResourcesOutputSchema
>;

export async function getPersonalizedLearningResources(
  input: PersonalizedLearningResourcesInput
): Promise<PersonalizedLearningResourcesOutput> {
  return personalizedLearningResourcesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLearningResourcesPrompt',
  input: {schema: PersonalizedLearningResourcesInputSchema},
  output: {schema: PersonalizedLearningResourcesOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized learning resources to students.

  Based on the student's interests, curate a list of open-source educational resources.
  These resources can include websites, articles, videos, and online courses.
  Provide direct links to the resources.

  Student Interests: {{{interests}}}
  `,
});

const personalizedLearningResourcesFlow = ai.defineFlow(
  {
    name: 'personalizedLearningResourcesFlow',
    inputSchema: PersonalizedLearningResourcesInputSchema,
    outputSchema: PersonalizedLearningResourcesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
