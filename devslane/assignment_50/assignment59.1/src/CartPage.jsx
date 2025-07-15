import CartList from "./CartList";

function CartPage({ cartItems, updateQuantity, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <CartList
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />

          {/* Coupon + Update Section */}
          <div className="flex flex-wrap justify-between mb-6 gap-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon code"
                className="border px-3 py-1"
              />
              <button className="bg-red-500 text-white px-4 py-1 rounded">
                APPLY COUPON
              </button>
            </div>
            <button className="bg-gray-300 px-4 py-1 text-gray-500 rounded" disabled>
              UPDATE CART
            </button>
          </div>

          {/* Total Box */}
          <div className="border max-w-xs ml-auto p-4 rounded">
            <h3 className="font-bold mb-2">Cart totals</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="bg-red-500 text-white w-full mt-4 py-2 rounded">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
