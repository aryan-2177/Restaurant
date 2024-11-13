import React, { useState } from 'react';
import { Trash2, Receipt, XCircle } from 'lucide-react';
import { MenuItem } from '../types';
import Bill from './Bill';

interface CartProps {
  items: MenuItem[];
  onRemove: (id: number) => void;
  total: number;
  onCancelOrder: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, total, onCancelOrder }) => {
  const [showBill, setShowBill] = useState(false);

  if (showBill) {
    return (
      <div className="h-full overflow-auto">
        <Bill 
          items={items} 
          total={total} 
          onBack={() => setShowBill(false)}
          onCancelOrder={onCancelOrder}
        />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Your Order</h2>
        {items.length > 0 && (
          <button
            onClick={onCancelOrder}
            className="text-red-500 hover:text-red-700 flex items-center gap-2"
          >
            <XCircle className="w-5 h-5" />
            Cancel Order
          </button>
        )}
      </div>
      
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4 mb-6 max-h-[calc(100vh-300px)] overflow-y-auto">
            {items.map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-gray-800">Total:</span>
              <span className="text-2xl font-bold text-orange-600">₹{total}</span>
            </div>
            <button
              onClick={() => setShowBill(true)}
              className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
            >
              <Receipt className="w-5 h-5" />
              Generate Bill
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;