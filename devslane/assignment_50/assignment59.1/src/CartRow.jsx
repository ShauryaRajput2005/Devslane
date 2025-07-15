function CartRow({ item, updateQuantity, removeFromCart }) {
  return (
    <tr className="text-center border-t">
      <td className="p-2">
        <button onClick={() => removeFromCart(item.id)}>❌</button>
      </td>
      <td className="p-2">
        <div className="flex items-center gap-3">
          <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
          <span className="text-red-500">{item.name}</span>
        </div>
      </td>
      <td className="p-2">${item.price}</td>
      <td className="p-2">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) =>
            updateQuantity(item.id, parseInt(e.target.value) - item.quantity)
          }
          className="w-12 border text-center"
        />
      </td>
      <td className="p-2">${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  );
}

export default CartRow;
