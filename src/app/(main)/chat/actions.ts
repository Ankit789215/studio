'use server';

import {
  chat,
  ChatInput,
} from '@/ai/flows/chat-flow';

export async function sendMessage(input: ChatInput) {
  try {
    const response = await chat(input);
    return response;
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to get response from AI mentor.');
  }
}
