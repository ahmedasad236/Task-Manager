'use client';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TaskForm({ initialData, onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(
    initialData?.description || ''
  );
  const [priority, setPriority] = useState(initialData?.priority || 'normal');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submitting');
    onSubmit({
      id: initialData?.id || uuidv4(),
      title,
      description,
      priority,
      status: initialData?.status || 'not finished'
    });
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
        {initialData ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
}
