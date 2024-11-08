'use client';
import { useTaskContext } from '@/app/_contexts/TaskContext';
import TaskCard from '../_components/TaskCard';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';

export default function Page() {
  const { tasks } = useTaskContext();
  console.log(tasks);
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">My Tasks</h2>
      {tasks && tasks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center  text-center">
          <h3 className="text-2xl text-primary-50 mt-auto mb-5 tracking-tight font-normal">
            No tasks, yet !
          </h3>

          <Link
            href="/tasks/new"
            className="bg-accent-500 px-4 py-3 text-lg text-primary-800 font-semibold hover:bg-accent-600 transition-all w-fit"
          >
            <span>Add a Task</span>
            <FiPlus className="w-5 h-4 inline" />
          </Link>
        </div>
      )}
    </div>
  );
}
