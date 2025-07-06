function Product({ name, category, price, photo }) {
  return (
    <div className="bg-gray-100 flex flex-col rounded shadow-md w-full max-w-sm h-80 overflow-hidden">
      <div className="w-full h-3/5">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start gap-2 px-2 h-2/5">
        <p className="text-gray-400 text-sm">{category}</p>
          <p className="text-black text-lg font-bold leading-tight break-words line-clamp-2">
            {name}
          </p>
          <div className="flex gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src="https://codeyogi.io/star.png"
                alt="star"
                className="w-4"
              />
            ))}
          </div>
          <p className="text-black text-sm font-semibold">{price}</p>
      
      </div>
    </div>
  )
}

export default Product
