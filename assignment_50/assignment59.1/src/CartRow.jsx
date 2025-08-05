function CartRow({ item, updateQuantity, removeFromCart }) {
  return (
    <tr className="text-center border-t">
      {/* ❌ Remove button */}
      <td className="p-2">
        <button onClick={() => removeFromCart(item.id)}>❌</button>
      </td>

      {/* 🖼️ Image + Name */}
      <td className="p-2">
        <div className="flex items-center gap-3 max-w-[200px]">
          <img
            src={item.photo || item.image}
            alt={item.name}
            className="w-12 h-12 object-cover rounded"
          />
          <span className="text-red-500">{item.name}</span>
        </div>
      </td>

      {/* 💲 Price */}
      <td className="p-2">${parseFloat(item.price)}</td>

      {/* 🔢 Quantity Input */}
      <td className="p-2">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => {
            const newQty = parseInt(e.target.value);
            if (!isNaN(newQty) && newQty > 0) {
              updateQuantity(item.id, newQty - item.quantity);
            }
          }}
          className="w-14 px-1 border rounded text-center"
        />
      </td>

      {/* 💵 Subtotal */}
      <td className="p-2 text-green-600 font-semibold">
        ${(parseFloat(item.price) * item.quantity).toFixed(2)}
      </td>

    </tr>
  );
}

export default CartRow;
