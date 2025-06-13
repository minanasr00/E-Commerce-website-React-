import { Link } from "react-router-dom";
import { useWishlist } from "../../contexts/WishlistContext.jsx"; 

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]">
      {wishlist.length === 0 ? (
  <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6">
    <p className="text-6xl font-bold text-center text-black-600 tracking-tight mt-20 mb-20">
      Your Wishlist is Empty...
    </p>
    <Link
      to="/products"
      className="bg-neutral-300 text-black font-semibold px-6 py-2 text-3xl hover:bg-black hover:text-white transition"
    >
      Browse Products
    </Link>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl font-bold mt-20 mb-10 text-center text-black-600 tracking-tight">
            Your Wishlist
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg hover:shadow-xl transition duration-300 overflow-hidden relative "
              >
                {/* X Icon to remove item */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-3 right-3 text-gray-500 text-4xl hover:text-black cursor-pointer font-bold"
                  aria-label="Remove from wishlist"
                >
                  &times;
                </button>

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1 line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {product.description}
                  </p>

                  <p className="text-2xl font-bold text-green-600 mb-4">
                    ${product.price}
                  </p>

                  <Link
                    to={`/products/${product.id}`}
                    className="block bg-neutral-300 text-black font-semibold text-center py-2 hover:bg-black hover:text-white transition "
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
