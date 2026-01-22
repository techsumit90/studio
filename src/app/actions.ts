
'use server';

import { z } from 'zod';
import { getContentImprovementSuggestions } from '@/ai/flows/content-improvement-suggestions';

const suggestionSchema = z.object({
  content: z.string().min(10, { message: 'Content must be at least 10 characters long.' }),
});

type SuggestionState = {
  suggestions?: string[] | null;
  error?: string | null;
};

export async function getSuggestionsAction(
  prevState: SuggestionState,
  formData: FormData
): Promise<SuggestionState> {
  const parsed = suggestionSchema.safeParse({ content: formData.get('content') });

  if (!parsed.success) {
    return { error: parsed.error.errors[0].message };
  }

  try {
    const result = await getContentImprovementSuggestions({ content: parsed.data.content });
    if (!result.suggestions || result.suggestions.length === 0) {
      return { error: 'No suggestions could be generated. Try different content.' };
    }
    return { suggestions: result.suggestions };
  } catch (e) {
    console.error(e);
    return { error: 'An unexpected error occurred while generating suggestions.' };
  }
}

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    subject: z.string().min(5, "Subject must be at least 5 characters."),
    message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactState = {
    message?: string;
    error?: string;
}

export async function submitContactForm(prevState: ContactState, formData: FormData): Promise<ContactState> {
    const validatedFields = contactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors.message?.[0] || "Invalid form data."
        };
    }

    // Simulate sending data to a server
    console.log("New contact form submission:", validatedFields.data);

    // In a real app, you would send this to your backend, email service, or CRM.
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { message: "Thank you for your message! We'll get back to you soon." };
}
