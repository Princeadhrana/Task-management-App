import React, { useState } from 'react';
import { Layout, CheckSquare } from 'lucide-react';
import { Column as ColumnType, Task } from './types';
import { Column } from './components/Column';
import { NewTaskForm } from './components/NewTaskForm';

function App() {
  const [columns, setColumns] = useState<ColumnType[]>([
    { id: 'todo', title: 'To Do', tasks: [] },
    { id: 'in-progress', title: 'In Progress', tasks: [] },
    { id: 'completed', title: 'Completed', tasks: [] },
  ]);

  const handleAddTask = (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };

    setColumns(columns.map(column => 
      column.id === 'todo'
        ? { ...column, tasks: [...column.tasks, newTask] }
        : column
    ));
  };

  const handleStatusChange = (taskId: string, newStatus: Task['status']) => {
    const task = columns.flatMap(col => col.tasks).find(t => t.id === taskId);
    if (!task) return;

    setColumns(columns.map(column => ({
      ...column,
      tasks: column.id === newStatus
        ? [...column.tasks, { ...task, status: newStatus }]
        : column.tasks.filter(t => t.id !== taskId)
    })));
  };

  const handleRemoveTask = (taskId: string) => {
    setColumns(columns.map(column => ({
      ...column,
      tasks: column.tasks.filter(task => task.id !== taskId)
    })));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Layout className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Task Management</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <NewTaskForm onAddTask={handleAddTask} />
        
        <div className="flex gap-6 overflow-x-auto pb-6">
          {columns.map(column => (
            <Column
              key={column.id}
              column={column}
              onStatusChange={handleStatusChange}
              onRemoveTask={handleRemoveTask}
            />
          ))}
        </div>

        {columns.every(col => col.tasks.length === 0) && (
          <div className="text-center py-12">
            <CheckSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No tasks yet</h3>
            <p className="text-gray-500">Get started by adding a new task above</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;