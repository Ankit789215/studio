'use server';
/**
 * @fileOverview A friendly AI mentor for career and education advice.
 *
 * - chat - A function that handles the conversation with the AI mentor.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatInputSchema = z.object({
  history: z.array(
    z.object({
      role: z.enum(['user', 'model']),
      parts: z.array(z.object({text: z.string()})),
    })
  ).describe('The conversation history.'),
  message: z.string().describe('The user\'s latest message.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe('The AI\'s response.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatPrompt',
  input: {
    schema: ChatInputSchema,
  },
  output: {
    schema: ChatOutputSchema,
  },
  prompt: `You are a friendly and helpful AI career and education mentor named Disha.
Your goal is to provide personalized guidance to students and young professionals.
You can answer questions about career paths, suggest courses, and provide information about educational opportunities.
Keep your responses concise, friendly, and encouraging.

Here is the conversation history:
{{#each history}}
  {{#if (eq role 'user')}}
    User: {{parts.[0].text}}
  {{else}}
    AI: {{parts.[0].text}}
  {{/if}}
{{/each}}

User's new message: {{{message}}}

Your response:
`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
