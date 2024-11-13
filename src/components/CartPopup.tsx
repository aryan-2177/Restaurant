import React from 'react';
import { X } from 'lucide-react';
import Cart from './Cart';
import Bill from './Bill';
import { MenuItem } from '../types';

interface CartPopupProps {
  items: MenuItem[];
  onClose: () => void;
  onRemove: (id: number) => void;
  total: number;
  onCancelOrder: () => void;
}

const CartPopup: React.FC<CartPopupProps> = ({
  items,
  onClose,
  onRemove,
  total,
  onCancelOrder,
}) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={onClose} />
      <div className="fixed right-4 top-24 bottom-4 w-full max-w-md z-40 transform transition-transform duration-300 ease-in-out">
        <div className="relative bg-white rounded-lg shadow-xl h-full overflow-auto">
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors z-50"
          >
            <X className="w-5 h-5" />
          </button>
          <Cart
            items={items}
            onRemove={onRemove}
            total={total}
            onCancelOrder={onCancelOrder}
          />
        </div>
      </div>
    </>
  );
};

export default CartPopup;