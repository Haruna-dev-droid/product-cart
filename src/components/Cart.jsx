import React from "react";
import { useCart } from "./CartContext.jsx";
import CheckOut from "./CheckOut.jsx";

function Cart() {
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
      <div>
        <h1>Your Cart {cart.length}</h1>
        {cart.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>🚮</button>
          </div>
        ))}
        <h2>Total: ${getTotalPrice()}</h2>
        <button onClick={clearCart}>Clear Cart</button>
        <button onClick={handleOpenCheckout}>Confirm Order</button>
        <CheckOut
          isOpen={isCheckoutOpen}
          onClose={handleCloseCheckout}
          cart={cart}
          total={getTotalPrice()}
        />
      </div>
    </>
  );
}

export default Cart;
