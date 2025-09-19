'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Bot, Loader2, Send, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { sendMessage } from './actions';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  message: z.string().min(1),
});

type Message = {
  role: 'user' | 'model';
  parts: { text: string }[];
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  });
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const userMessage: Message = { role: 'user', parts: [{ text: values.message }] };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    form.reset();

    try {
      const result = await sendMessage({ history: messages, message: values.message });
      const aiMessage: Message = { role: 'model', parts: [{ text: result.response }] };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      toast({
        title: 'An error occurred',
        description: 'Failed to get a response. Please try again.',
        variant: 'destructive',
      });
      setMessages(prev => prev.slice(0, -1)); // Remove the user message if API fails
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          AI Mentor Chat
        </h1>
        <p className="text-muted-foreground">
          Your personal guide for career and education questions.
        </p>
      </div>

      <Card className="flex-grow flex flex-col">
        <CardContent className="flex-grow p-4 md:p-6 overflow-y-auto space-y-6">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Bot className="h-16 w-16 text-muted-foreground/50 mb-4" />
              <h2 className="text-xl font-semibold">Welcome to the AI Mentor Chat!</h2>
              <p className="text-muted-foreground max-w-md mt-2">
                You can ask me anything about careers, courses, or skills. For example: "What are some good careers for someone who likes art?"
              </p>
            </div>
          )}
          
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}
            >
              {msg.role === 'model' && (
                <Avatar className="h-9 w-9 border">
                  <AvatarFallback><Bot className="h-5 w-5"/></AvatarFallback>
                </Avatar>
              )}
              <div className={`rounded-lg p-3 max-w-lg ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                <p className="text-sm">{msg.parts[0].text}</p>
              </div>
              {msg.role === 'user' && (
                <Avatar className="h-9 w-9 border">
                    <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Student"/>
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div
                className="flex items-start gap-4"
            >
                <Avatar className="h-9 w-9 border">
                    <AvatarFallback><Bot className="h-5 w-5"/></AvatarFallback>
                </Avatar>
                <div className="rounded-lg p-3 max-w-lg bg-muted flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin"/>
                    <span className="text-sm text-muted-foreground">Thinking...</span>
                </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>
        <CardContent className="border-t pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-4">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <Input placeholder="Ask your question..." {...field} autoComplete="off" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} size="icon" className="shrink-0">
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
