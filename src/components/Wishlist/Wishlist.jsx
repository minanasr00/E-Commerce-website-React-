import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialWishlistItems = [
  {
    id: 1,
    name: "Nike Air Max",
    description: "Comfortable running shoes with modern design.",
    price: 3200,
    image: "https://placehold.co/300x200/EEE/333?text=Nike+Air+Max",
  },
  {
    id: 2,
    name: "Adidas Runner",
    description: "Perfect fit for sports and gym workouts.",
    price: 2900,
    image: "https://placehold.co/300x200/FFD700/000?text=Adidas+Runner",
  },
  {
    id: 3,
    name: "Puma Sneaker",
    description: "Lightweight and stylish everyday sneakers.",
    price: 3100,
    image: "https://placehold.co/300x200/87CEEB/000?text=Puma+Sneaker",
  },
  {
    id: 4,
    name: "Reebok Classic",
    description: "Timeless design with ultimate comfort.",
    price: 2700,
    image: "https://placehold.co/300x200/FF69B4/000?text=Reebok+Classic",
  },
];

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(initialWishlistItems);

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        My Wishlist 💖
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-lg text-gray-600">No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-base text-gray-700 font-bold mt-2">
                  {item.price} EGP
                </p>

                <div className="mt-4 flex justify-between gap-2">
                  <Link
                    to={`/products/${item.id}`}
                    className="w-1/2 bg-black text-white py-1 text-sm rounded-lg text-center hover:bg-gray-800"
                  >
                     View Details

                  </Link>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="w-1/2 bg-red-600 text-white py-1 text-sm rounded-lg hover:bg-red-700"
                  >
                    Remove From Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
