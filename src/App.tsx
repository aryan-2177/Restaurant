import React, { useState } from 'react';
import { ShoppingCart, UtensilsCrossed } from 'lucide-react';
import Menu from './components/Menu';
import CartPopup from './components/CartPopup';
import SeatInput from './components/SeatInput';
import { MenuItem } from './types';

function App() {
  const [seatNumber, setSeatNumber] = useState<string>('');
  const [isSeated, setIsSeated] = useState(false);
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const handleSeatSubmit = (seat: string) => {
    setSeatNumber(seat);
    setIsSeated(true);
  };

  const addToCart = (item: MenuItem) => {
    setCart([...cart, { ...item, id: Date.now() }]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const cancelOrder = () => {
    setCart([]);
    setShowCart(false);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {!isSeated ? (
        <SeatInput onSubmit={handleSeatSubmit} />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <header className="fixed top-0 right-0 left-0 z-20 bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <UtensilsCrossed className="w-8 h-8 text-orange-600" />
                <h1 className="text-3xl font-bold text-gray-800">Desi Delights</h1>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-gray-600">
                  Seat #: <span className="font-semibold">{seatNumber}</span>
                </div>
                <button
                  onClick={() => setShowCart(!showCart)}
                  className="relative bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors"
                >
                  <ShoppingCart className="w-6 h-6" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </header>

          <div className="mt-24">
            <Menu onAddToCart={addToCart} />
          </div>

          {showCart && (
            <CartPopup
              items={cart}
              onClose={() => setShowCart(false)}
              onRemove={removeFromCart}
              total={getTotalAmount()}
              onCancelOrder={cancelOrder}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;