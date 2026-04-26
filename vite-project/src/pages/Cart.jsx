import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  // If cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
        <p className="text-6xl">🛒</p>
        <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
        <p className="text-gray-500">Go add some products!</p>
        <Link
          to="/"
          className="mt-4 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
          <span className="text-gray-500 text-sm">{totalItems} item{totalItems !== 1 ? "s" : ""}</span>
        </div>

        {/* Cart Items List */}
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
              />

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 font-bold"
                >
                  −
                </button>
                <span className="w-6 text-center font-semibold text-gray-900">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 font-bold"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-600 text-xl ml-2"
                title="Remove item"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Subtotal ({totalItems} items)</span>
            <span className="font-semibold text-gray-900">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-6 border-t pt-4">
            <span className="text-lg font-bold text-gray-900">Total</span>
            <span className="text-lg font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
          </div>

          {/* Action Buttons */}
          <button className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 mb-3">
            Checkout
          </button>
          <div className="flex gap-3">
            <Link
              to="/"
              className="flex-1 text-center border border-gray-300 py-2 rounded-xl text-gray-700 hover:bg-gray-50"
            >
              Continue Shopping
            </Link>
            <button
              onClick={clearCart}
              className="flex-1 text-center border border-red-200 py-2 rounded-xl text-red-500 hover:bg-red-50"
            >
              Clear Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cart;