'use server';
import { config } from 'dotenv';
config();

import '@/ai/flows/ai-powered-course-recommendations.ts';
import '@/ai/flows/personalized-learning-resources.ts';
import '@/ai/flows/chat-flow.ts';
