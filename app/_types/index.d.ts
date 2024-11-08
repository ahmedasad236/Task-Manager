type Task = {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'normal' | 'low';
  status: 'finished' | 'not finished';
};

type TaskCardProps = {
  task: {
    id: string;
    title: string;
    description: string;
    priority: 'high' | 'normal' | 'low';
    status: 'finished' | 'not finished';
  };
};

type TaskFormProps = {
  initialData?: Task;
  onSubmit: (task: Task) => void;
};
