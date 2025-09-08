
const ProductCard = ({ image, title, price, description, onAddToCart }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <img
        className="w-full h-56 object-cover"
        src={image}
        alt={title}
      />

      {/* Card Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        
        {/* Price */}
        <p className="text-xl font-bold text-indigo-600 mt-2">${price}</p>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>

        {/* Button */}
        <button
          onClick={onAddToCart}
          className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
