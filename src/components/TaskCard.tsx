import React from 'react';
import { Clock, Flag, Trash2 } from 'lucide-react';
import { Task } from '../types';
import { priorityColors } from '../utils/taskUtils';
import { TaskStatusSelect } from './TaskStatusSelect';

interface TaskCardProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: Task['status']) => void;
  onRemove: (taskId: string) => void;
}

export function TaskCard({ task, onStatusChange, onRemove }: TaskCardProps) {
  const { bg, text } = priorityColors[task.priority];
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium bg-indigo-50 px-3 py-1 rounded-md text-indigo-900">{task.title}</h3>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${bg} ${text}`}>
            <Flag className="w-3 h-3 inline-block mr-1" />
            {task.priority}
          </span>
          <button
            onClick={() => onRemove(task.id)}
            className="p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-gray-100 transition-colors"
            title="Remove task"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-3 bg-gray-50 px-3 py-2 rounded-md">{task.description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {new Date(task.createdAt).toLocaleDateString()}
        </div>
        
        <TaskStatusSelect
          currentStatus={task.status}
          onChange={(newStatus) => onStatusChange(task.id, newStatus)}
        />
      </div>
    </div>
  );
}