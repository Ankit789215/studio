'use server';

import {
  recommendCoursesAndCareers,
  RecommendCoursesAndCareersInput,
} from '@/ai/flows/ai-powered-course-recommendations';

export async function recommendCourses(input: RecommendCoursesAndCareersInput) {
  try {
    const recommendations = await recommendCoursesAndCareers(input);
    return recommendations;
  } catch (error) {
    console.error('Error getting recommendations:', error);
    throw new Error('Failed to get recommendations from AI service.');
  }
}
