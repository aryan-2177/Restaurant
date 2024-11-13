import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50">
      <CheckCircle className="w-5 h-5" />
      {message}
    </div>
  );
};

export default Toast;