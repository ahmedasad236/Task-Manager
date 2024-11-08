'use client';
import TaskForm from '@/app/_components/TaskForm';
import { useTaskContext } from '@/app/_contexts/TaskContext';

export default function Page() {
  const { addTask } = useTaskContext();
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Add a New Task</h2>
      <TaskForm onSubmit={addTask} />
    </div>
  );
}
