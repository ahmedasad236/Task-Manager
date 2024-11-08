import { useState } from 'react';
import { FiCheck, FiEdit, FiTrash, FiX } from 'react-icons/fi';

import Modal from '@/app/_components/Modal';
import TaskForm from '@/app/_components/TaskForm';
import { useTaskContext } from '@/app/_contexts/TaskContext';

const priorityColors = {
  high: 'bg-red-500 text-white',
  normal: 'bg-yellow-500 text-black',
  low: 'bg-green-500 text-white'
};

const TaskCard = ({ task }: TaskCardProps) => {
  const { deleteTask, updateTask } = useTaskContext();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const openDeleteModal = () => setDeleteModalOpen(true);
  const closeDeleteModal = () => setDeleteModalOpen(false);

  const openEditModal = () => setEditModalOpen(true);
  const closeEditModal = () => setEditModalOpen(false);

  const handleDelete = () => {
    deleteTask(task.id);
    closeDeleteModal();
  };

  const markAsFinished = () => {
    updateTask(task.id, { ...task, status: 'finished' });
  };

  const markAsNotFinished = () => {
    updateTask(task.id, { ...task, status: 'not finished' });
  };
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white relative">
      {/* Delete and Edit Icons */}
      <div className="absolute top-2 right-2 flex space-x-2">
        {task.status === 'not finished' ? (
          <button
            onClick={markAsFinished}
            title="Mark as Finished"
          >
            <FiCheck className="w-5 h-4 text-green-500" />
          </button>
        ) : (
          <button
            onClick={markAsNotFinished}
            title="Mark as Finished"
          >
            <FiX className="w-5 h-4 text-red-500" />
          </button>
        )}
        <button onClick={openEditModal}>
          <FiEdit className="w-5 h-5 text-blue-500" />
        </button>
        <button onClick={openDeleteModal}>
          <FiTrash className="w-5 h-5 text-red-500" />
        </button>
      </div>

      {/* Task Details */}
      <h3 className="text-xl text-primary-900 font-semibold mb-2">
        {task.title}
      </h3>
      <p className="text-sm text-gray-500 mb-4">{task.description}</p>

      <div className="mt-2">
        <span
          className={`inline-block px-2 py-1 text-sm rounded-full ${
            priorityColors[task.priority]
          }`}
        >
          {task.priority}
        </span>
        <span
          className={`inline-block px-2 py-1 text-sm rounded-full ml-2 ${
            task.status === 'finished'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-black'
          }`}
        >
          {task.status === 'finished' ? 'Finished' : 'Not Finished'}
        </span>
      </div>

      {/* Show Task Button */}
      <a
        href={`/tasks/${task.id}`}
        className="mt-4 inline-block text-blue-500 hover:underline"
      >
        Show Task
      </a>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
      >
        <p className="text-primary-800">
          Are you sure you want to delete this task?
        </p>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={closeDeleteModal}
            className="px-4 py-2 bg-gray-200 rounded text-primary-900"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Confirm
          </button>
        </div>
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
      >
        <TaskForm
          initialData={task}
          onSubmit={(updatedTask) => {
            updateTask(task.id, updatedTask);
            closeEditModal();
          }}
        />
      </Modal>
    </div>
  );
};

export default TaskCard;
