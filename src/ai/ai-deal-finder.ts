'use server';
/**
 * @fileOverview An AI deal finder flow that provides personalized computer recommendations based on user input.
 *
 * - aiDealFinder - A function that handles the deal recommendation process.
 * - AiDealFinderInput - The input type for the aiDealFinder function.
 * - AiDealFinderOutput - The return type for the aiDealFinder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiDealFinderInputSchema = z.object({
  useCase: z.string().describe('The primary use case for the computer.'),
  budget: z.string().optional().describe('The maximum budget for the computer.'),
  brand: z.string().optional().describe('The preferred brand of the computer.'),
});
export type AiDealFinderInput = z.infer<typeof AiDealFinderInputSchema>;

const AiDealFinderOutputSchema = z.object({
  recommendation: z.string().describe('A personalized recommendation for computer deals based on the provided user input.'),
});
export type AiDealFinderOutput = z.infer<typeof AiDealFinderOutputSchema>;

export async function aiDealFinder(input: AiDealFinderInput): Promise<AiDealFinderOutput> {
  return aiDealFinderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiDealFinderPrompt',
  input: {schema: AiDealFinderInputSchema},
  output: {schema: AiDealFinderOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized computer deal recommendations based on user preferences.

  Based on the following user input, provide a single, concise recommendation for a computer deal that would be relevant to the user.

  Primary Use Case: {{{useCase}}}
  {{#if budget}}Maximum Budget: {{{budget}}}{{/if}}
  {{#if brand}}Preferred Brand: {{{brand}}}{{/if}}
  
  Provide a recommendation for a specific computer model. Mention a key feature that makes it suitable for the user's use case.

  Recommendation:`,
});

const aiDealFinderFlow = ai.defineFlow(
  {
    name: 'aiDealFinderFlow',
    inputSchema: AiDealFinderInputSchema,
    outputSchema: AiDealFinderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
