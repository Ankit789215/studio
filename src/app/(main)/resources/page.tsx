'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Sparkles, ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { getPersonalizedResources } from './actions';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  interests: z.string().min(3, {
    message: 'Please enter at least one interest.',
  }),
});

export default function ResourcesPage() {
  const [resources, setResources] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResources([]);
    try {
      const result = await getPersonalizedResources(values);
      setResources(result.resources);
    } catch (error) {
      console.error(error);
      toast({
        title: 'An error occurred',
        description: 'Failed to fetch learning resources. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Personalized Learning Resources
        </h1>
        <p className="text-muted-foreground">
          Enter your interests to get a curated list of free learning materials.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Find Resources</CardTitle>
          <CardDescription>
            For example: "Quantum Physics, Web Development, Ancient History"
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Interests</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter topics you want to learn about" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Get Resources
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {(isLoading || resources.length > 0) && (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Sparkles className="text-accent" />
                    Your Curated Resources
                </CardTitle>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <div className="flex justify-center items-center py-8">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        <p className="ml-4">Our AI is finding the best resources for you...</p>
                    </div>
                ) : (
                    <ul className="space-y-3">
                        {resources.map((url, index) => (
                            <li key={index}>
                                <a 
                                  href={url} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="flex items-center gap-3 p-3 rounded-md bg-muted/50 hover:bg-muted transition-colors"
                                >
                                    <span className="truncate text-primary hover:underline">{url}</span>
                                    <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto shrink-0" />
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </CardContent>
        </Card>
      )}

    </div>
  );
}
