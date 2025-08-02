'use server';
/**
 * @fileOverview An AI deal finder flow that provides personalized computer recommendations based on landing page content.
 *
 * - aiDealFinder - A function that handles the deal recommendation process.
 * - AiDealFinderInput - The input type for the aiDealFinder function.
 * - AiDealFinderOutput - The return type for the aiDealFinder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiDealFinderInputSchema = z.object({
  heroHeadline: z.string().describe('The main headline of the hero section.'),
  heroSubtext: z.string().describe('The subtext of the hero section.'),
  aboutSection: z.string().describe('The content of the about section.'),
  featuredProducts: z.string().describe('A description of the featured products.'),
  customerReviews: z.string().describe('A summary of customer reviews.'),
  valueProps: z.array(z.string()).describe('A list of value propositions.'),
  ctaText: z.string().describe('The call to action text.'),
});
export type AiDealFinderInput = z.infer<typeof AiDealFinderInputSchema>;

const AiDealFinderOutputSchema = z.object({
  recommendation: z.string().describe('A personalized recommendation for computer deals based on the provided content.'),
});
export type AiDealFinderOutput = z.infer<typeof AiDealFinderOutputSchema>;

export async function aiDealFinder(input: AiDealFinderInput): Promise<AiDealFinderOutput> {
  return aiDealFinderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiDealFinderPrompt',
  input: {schema: AiDealFinderInputSchema},
  output: {schema: AiDealFinderOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized computer deal recommendations based on website landing page content.

  Based on the following information from the ChromeWorld landing page, provide a single, concise recommendation for a computer deal that would be relevant to the user.

  Hero Section Headline: {{{heroHeadline}}}
  Hero Section Subtext: {{{heroSubtext}}}
  About ChromeWord Section: {{{aboutSection}}}
  Featured Products: {{{featuredProducts}}}
  Customer Reviews: {{{customerReviews}}}
  Value Propositions: {{#each valueProps}}- {{{this}}}
{{/each}}
  Call to Action Text: {{{ctaText}}}

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
