import NewTaskForm from '@/app/_components/NewTaskForm';

export default function Page() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Add a New Task</h2>
      <NewTaskForm />
    </div>
  );
}
