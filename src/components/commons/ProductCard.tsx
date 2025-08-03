import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";
import { useWindowSize } from "../../utils/hooks/useWindowSize";

const ProductCard: React.FC<{ product: Shapes.TProduct }> = ({ product }) => {
  const { theme } = useContext(AppContext);
  const { width } = useWindowSize();

  // Minimalistic (theme1)
  if (theme === "theme1") {
    return (
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:border border-gray-200">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/3 h-56 object-contain p-4"
        />
        <div className="p-4 text-gray-700 flex flex-col justify-between">
          <h3 className="font-semibold text-lg mb-2">
            {product.title.length > 50
              ? `${product.title.substring(0, 50)}...`
              : product.title}
          </h3>
          <p className="text-sm mb-3 text-gray-500">
            {product.description.length > 100
              ? `${product.description.substring(0, 100)}...`
              : product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-blue-500 font-bold text-xl">
              ${product.price}
            </span>
            <div className="flex items-center space-x-1 text-sm text-yellow-500">
              <span>⭐</span>
              <span>{product.rating.rate}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dark Theme (theme2)
  if (theme === "theme2") {
    return (
      <div className="relative group bg-gray-800 border border-yellow-400 rounded-lg overflow-hidden shadow-md transition-all duration-300">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 object-contain p-4 bg-white"
        />

        {width < 640 ? (
          // Mobile view - Show details below the image
          <div className="bg-black bg-opacity-75 text-white p-4">
            <h3 className="text-lg font-bold mb-2">
              {product.title.length > 50
                ? `${product.title.substring(0, 50)}...`
                : product.title}
            </h3>
            <p className="text-sm mb-3 text-gray-300">
              {product.description.length > 100
                ? `${product.description.substring(0, 100)}...`
                : product.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-400 font-bold text-xl">
                ${product.price}
              </span>
              <div className="flex items-center space-x-1 text-yellow-300 text-sm">
                <span>⭐</span>
                <span>{product.rating.rate}</span>
              </div>
            </div>
          </div>
        ) : (
          // Desktop view - Show overlay on hover
          <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-white flex flex-col justify-center">
            <h3 className="text-lg font-bold mb-2">
              {product.title.length > 50
                ? `${product.title.substring(0, 50)}...`
                : product.title}
            </h3>
            <p className="text-sm mb-3 text-gray-300">
              {product.description.length > 100
                ? `${product.description.substring(0, 100)}...`
                : product.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-400 font-bold text-xl">
                ${product.price}
              </span>
              <div className="flex items-center space-x-1 text-yellow-300 text-sm">
                <span>⭐</span>
                <span>{product.rating.rate}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Colorful Theme (theme3)
  return (
    <div className="bg-gradient-to-br from-pink-200 to-purple-100 border-2 border-purple-200 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-56 object-contain mb-4 bg-white rounded-t-box"
      />
      <div className="p-4">
        <h3 className='font-["Pacifico"] text-lg font-bold text-pink-700 mb-2'>
          {product.title.length > 50
            ? `${product.title.substring(0, 50)}...`
            : product.title}
        </h3>
        <p className="text-sm mb-3 text-purple-700">
          {product.description.length > 100
            ? `${product.description.substring(0, 100)}...`
            : product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-pink-600 font-extrabold text-xl">
            ${product.price}
          </span>
          <div className="flex items-center space-x-1 text-yellow-600 text-sm">
            <span>⭐</span>
            <span>{product.rating.rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
