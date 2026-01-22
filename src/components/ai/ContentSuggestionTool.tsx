'use client';

import { useEffect, useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Wand2, Lightbulb, Loader, ServerCrash } from 'lucide-react';

import { getSuggestionsAction } from '@/app/actions';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '../ui/badge';

const initialState = {
  suggestions: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Get Suggestions
        </>
      )}
    </Button>
  );
}

export function ContentSuggestionTool({
  contentToImprove,
  trigger,
  title,
}: {
  contentToImprove: string;
  trigger: React.ReactNode;
  title: string;
}) {
  const [state, formAction] = useActionState(getSuggestionsAction, initialState);
  const [currentContent, setCurrentContent] = useState(contentToImprove);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      // Reset state when dialog closes
      state.suggestions = null;
      state.error = null;
      setCurrentContent(contentToImprove);
    }
  }, [open, contentToImprove, state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Wand2 className="mr-2 text-primary" />
            AI Content Suggester for "{title}"
          </DialogTitle>
        </DialogHeader>
        <form action={formAction} className="space-y-4">
          <Textarea
            name="content"
            placeholder="Enter content here..."
            className="min-h-[150px] text-base"
            value={currentContent}
            onChange={(e) => setCurrentContent(e.target.value)}
          />
          <DialogFooter>
            <SubmitButton />
          </DialogFooter>
        </form>

        {state.error && (
          <Alert variant="destructive">
            <ServerCrash className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.error}</AlertDescription>
          </Alert>
        )}

        {state.suggestions && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center">
              <Lightbulb className="mr-2 text-accent" />
              Suggestions
            </h3>
            <div className="space-y-3">
              {state.suggestions.map((suggestion, index) => (
                <div key={index} className="p-4 bg-secondary rounded-lg">
                  <p className="text-secondary-foreground">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
