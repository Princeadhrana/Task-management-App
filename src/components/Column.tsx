import React from 'react';
import { TaskCard } from './TaskCard';
import { Column as ColumnType, Task } from '../types';

interface ColumnProps {
  column: ColumnType;
  onStatusChange: (taskId: string, newStatus: Task['status']) => void;
  onRemoveTask: (taskId: string) => void;
}

export function Column({ column, onStatusChange, onRemoveTask }: ColumnProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg min-w-[300px]">
      <h2 className="font-semibold text-lg mb-4 text-gray-700">{column.title}</h2>
      <div className="space-y-3">
        {column.tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onRemove={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}