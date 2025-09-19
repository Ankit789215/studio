'use server';

import {
  getPersonalizedLearningResources,
  PersonalizedLearningResourcesInput,
} from '@/ai/flows/personalized-learning-resources';

export async function getPersonalizedResources(input: PersonalizedLearningResourcesInput) {
  try {
    const resources = await getPersonalizedLearningResources(input);
    return resources;
  } catch (error) {
    console.error('Error getting personalized resources:', error);
    throw new Error('Failed to get resources from AI service.');
  }
}
