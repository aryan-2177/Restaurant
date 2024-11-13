import React, { useState } from 'react';
import { ArmchairIcon } from 'lucide-react';

interface SeatInputProps {
  onSubmit: (seatNumber: string) => void;
}

const SeatInput: React.FC<SeatInputProps> = ({ onSubmit }) => {
  const [seatNumber, setSeatNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (seatNumber.trim()) {
      onSubmit(seatNumber);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
          <ArmchairIcon className="w-16 h-16 text-orange-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Desi Delights</h1>
          <p className="text-gray-600 mt-2">Please enter your seat number to continue</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="seat" className="block text-sm font-medium text-gray-700 mb-2">
              Seat Number
            </label>
            <input
              type="text"
              id="seat"
              value={seatNumber}
              onChange={(e) => setSeatNumber(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your seat number"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
          >
            View Menu
          </button>
        </form>
      </div>
    </div>
  );
}

export default SeatInput;