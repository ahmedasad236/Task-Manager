'use client';
import { useState } from 'react';
import { useTaskContext } from '@/app/_contexts/TaskContext';
import { v4 as uuidv4 } from 'uuid';
function NewTaskForm() {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'high' | 'normal' | 'low'>('normal');
  const [status, setStatus] = useState<'finished' | 'not finished'>(
    'not finished'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title,
      description,
      priority,
      status
    };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setPriority('normal');
    setStatus('not finished');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 text-primary-900"
    >
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Priority</label>
        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as 'high' | 'normal' | 'low')
          }
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="high">High</option>
          <option value="normal">Normal</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-4 bg-accent-500 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
      >
        Add Task
      </button>
    </form>
  );
}

export default NewTaskForm;
