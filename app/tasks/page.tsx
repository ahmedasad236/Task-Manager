'use client';

import { useSearchParams } from 'next/navigation';
import { useTaskContext } from '@/app/_contexts/TaskContext';
import Filter from '@/app/_components/Filter';
import TaskCard from '@/app/_components/TaskCard';

export default function Page() {
  const { tasks } = useTaskContext();
  const searchParams = useSearchParams();

  const statusFilter = searchParams.get('status') || 'all';
  const priorityFilter = searchParams.get('priority') || 'all';

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      statusFilter === 'all' || task.status === statusFilter;
    const matchesPriority =
      priorityFilter === 'all' || task.priority === priorityFilter;
    return matchesStatus && matchesPriority;
  });

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">My Tasks</h2>

      {/* Filters */}
      <div className="flex justify-between items-center flex-wrap gap-8 mb-6">
        <Filter
          label="Status"
          options={[
            { label: 'All', value: 'all' },
            { label: 'Finished', value: 'finished' },
            { label: 'Not Finished', value: 'not finished' }
          ]}
          queryParam="status"
        />
        <Filter
          label="Priority"
          options={[
            { label: 'All', value: 'all' },
            { label: 'High', value: 'high' },
            { label: 'Normal', value: 'normal' },
            { label: 'Low', value: 'low' }
          ]}
          queryParam="priority"
        />
      </div>

      {/* Filtered Task List */}
      {filteredTasks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center p-6 bg-accent-500  rounded-md text-primary-800 text-lg ">
          No tasks found. Please adjust your filters.
        </div>
      )}
    </div>
  );
}
