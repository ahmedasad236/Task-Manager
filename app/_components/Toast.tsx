import { useEffect } from 'react';

type ToastProps = {
  message: string;
  onClose: () => void;
  duration?: number;
  error?: boolean;
};

export default function Toast({
  message,
  onClose,
  duration = 3000,
  error = false
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-md shadow-lg
        transition-opacity duration-300 ease-in-out
        ${error ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}
      `}
      style={{
        opacity: 1,
        animation: 'fade-in 0.3s ease-in-out'
      }}
    >
      {message}
    </div>
  );
}
