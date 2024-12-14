import { TaskPriority } from '../types';

export const priorityColors: Record<TaskPriority, { bg: string; text: string }> = {
  low: { bg: 'bg-blue-100', text: 'text-blue-800' },
  medium: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  high: { bg: 'bg-red-100', text: 'text-red-800' },
};