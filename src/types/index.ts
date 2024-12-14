export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  dueDate?: Date;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

export type TaskStatus = Task['status'];
export type TaskPriority = Task['priority'];