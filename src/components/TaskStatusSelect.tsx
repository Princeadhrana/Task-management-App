import React from 'react';
import { TaskStatus } from '../types';

interface TaskStatusSelectProps {
  currentStatus: TaskStatus;
  onChange: (newStatus: TaskStatus) => void;
}

export function TaskStatusSelect({ currentStatus, onChange }: TaskStatusSelectProps) {
  return (
    <select
      value={currentStatus}
      onChange={(e) => onChange(e.target.value as TaskStatus)}
      className="text-sm border rounded px-2 py-1 bg-gray-50"
    >
      <option value="todo">Todo</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
  );
}