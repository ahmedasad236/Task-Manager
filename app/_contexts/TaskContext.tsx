'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Toast from '../_components/Toast';

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (id: string, updatedTask: Task) => void;
  deleteTask: (id: string) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error('useTaskContext must be used within TaskProvider');
  return context;
};

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [toast, setToast] = useState<{
    message: string;
    error?: boolean;
  } | null>(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const showToast = (message: string, error: boolean) => {
    setToast({ message, error });
    setTimeout(() => setToast(null), 3000); // Hide toast after 3 seconds
  };

  const addTask = (task: Task) => {
    // check if there is a task with the same title
    const taskExists = tasks.find((t) => t.title === task.title);
    if (taskExists) {
      showToast('Task with the same title already exists!', true);
      return;
    }

    setTasks([...tasks, task]);
    showToast('Task created successfully!', false);
  };

  const updateTask = (id: string, updatedTask: Task) => {
    // check if there is a task with the same title
    const task = tasks.find((t) => t.id === id);
    if (!task) {
      showToast('Task not found!', true);
      return;
    }

    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
    showToast('Task updated successfully!', false);
  };

  const deleteTask = (id: string) => {
    // check if there is a task with the same title
    const task = tasks.find((t) => t.id === id);
    if (!task) {
      showToast('Task not found!', true);
      return;
    }

    setTasks(tasks.filter((task) => task.id !== id));
    showToast('Task deleted successfully!', false);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          error={toast.error || false}
          onClose={() => setToast(null)}
        />
      )}
    </TaskContext.Provider>
  );
};
