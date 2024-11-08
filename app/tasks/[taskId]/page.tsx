'use client';

import { useParams, useRouter } from 'next/navigation';
import { useTaskContext } from '@/app/_contexts/TaskContext';

export default function Page() {
  const { tasks } = useTaskContext();
  const params = useParams();
  const router = useRouter();
  console.log(params);
  const { taskId } = params;
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl">Task not found!</h1>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">{task.title}</h1>

        <div className="flex items-center mb-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              task.priority === 'high'
                ? 'bg-red-500 text-white'
                : task.priority === 'normal'
                ? 'bg-yellow-500 text-black'
                : 'bg-green-500 text-white'
            }`}
          >
            Priority: {task.priority}
          </span>
          <span
            className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${
              task.status === 'finished'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-black'
            }`}
          >
            Status: {task.status === 'finished' ? 'Finished' : 'Not Finished'}
          </span>
        </div>

        <p className="text-lg text-gray-700 mb-6">{task.description}</p>

        <button
          onClick={() => router.push('/tasks')}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Back to Tasks
        </button>
      </div>
    </div>
  );
}
