'use server';

/**
 * @fileOverview AI-powered content improvement suggestions for service descriptions and testimonials.
 *
 * - getContentImprovementSuggestions - A function that generates suggestions for improving content.
 * - ContentImprovementSuggestionsInput - The input type for the getContentImprovementSuggestions function.
 * - ContentImprovementSuggestionsOutput - The return type for the getContentImprovementSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentImprovementSuggestionsInputSchema = z.object({
  content: z.string().describe('The content to be improved (service description or testimonial).'),
});
export type ContentImprovementSuggestionsInput = z.infer<typeof ContentImprovementSuggestionsInputSchema>;

const ContentImprovementSuggestionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('An array of suggestions for improving the content.'),
});
export type ContentImprovementSuggestionsOutput = z.infer<typeof ContentImprovementSuggestionsOutputSchema>;

export async function getContentImprovementSuggestions(
  input: ContentImprovementSuggestionsInput
): Promise<ContentImprovementSuggestionsOutput> {
  return contentImprovementSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentImprovementSuggestionsPrompt',
  input: {schema: ContentImprovementSuggestionsInputSchema},
  output: {schema: ContentImprovementSuggestionsOutputSchema},
  prompt: `You are an AI-powered content improvement assistant. Your task is to provide suggestions for improving the given content, focusing on enhancing its appeal and SEO effectiveness.

Content to improve: {{{content}}}

Provide at least 3 suggestions in an array format. Each suggestion should be a string.
`,
});

const contentImprovementSuggestionsFlow = ai.defineFlow(
  {
    name: 'contentImprovementSuggestionsFlow',
    inputSchema: ContentImprovementSuggestionsInputSchema,
    outputSchema: ContentImprovementSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
