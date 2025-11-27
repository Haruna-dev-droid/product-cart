import React from "react";
import { useCart } from "./CartContext.jsx";
import CheckOut from "./CheckOut.jsx";

function Cart({ isOpen, onClose }) {
  if (!isOpen) return null;
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };
  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };
  const {
    addToCart,
    cart,
    removeFromCart,
    clearCart,
    decreaseQuantity,
    getTotalPrice,
    confirmCart,
  } = useCart();

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
      ></div>
      <div
        className={`fixed bottom-0 left-0 w-full bg-gray-900/95 text-white backdrop-blur-md
                    rounded-t-2xl shadow-2xl z-50 transition-transform duration-300 ease-in-out
                    transform translate-y-0 p-4`}
      >
        <h1 className="text-2xl font-bold">Your Cart ( {cart.length} )</h1>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b border-gray-300 items-center my-4 p-2  "
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                width="50"
                className="bg-gray-200 p-2 rounded-lg"
              />
              <h2>{item.title}</h2>
            </div>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => addToCart(item)}
                className=" w-5 h-5 flex items-center justify-center border rounded"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className=" w-5 h-5 flex items-center justify-center  rounded"
              >
                🚮
              </button>
              <button
                onClick={() => decreaseQuantity(item.id)}
                className=" w-5 h-5 flex items-center justify-center border rounded"
              >
                -
              </button>
            </div>
            <div>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          </div>
        ))}
        <h2 className="font-bold mb-5">Total: ${getTotalPrice()}</h2>
        <div className="flex justify-between gap-4">
          <button
            onClick={clearCart}
            className="bg-red-500 p-2 px-5 font-bold text-white rounded-full"
          >
            Clear Cart
          </button>
          <button
            onClick={handleOpenCheckout}
            className="bg-green-500 p-2 px-5 font-bold text-white rounded-full"
          >
            Confirm Order
          </button>
        </div>
      </div>
      <CheckOut
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        cart={cart}
        total={getTotalPrice()}
      />
    </>
  );
}

export default Cart;
