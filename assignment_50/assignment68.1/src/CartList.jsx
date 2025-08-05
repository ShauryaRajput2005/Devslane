import CartRow from "./CartRow";

function CartList({ cartItems, updateQuantity, removeFromCart }) {
  return (
    <table className="w-full border mb-4">
      <thead>
        <tr className="bg-gray-200 text-center">
          <th className="p-2">Remove</th>
          <th className="p-2">Product</th>
          <th className="p-2">Price</th>
          <th className="p-2">Quantity</th>
          <th className="p-2">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <CartRow
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </tbody>
    </table>
  );
}

export default CartList;
