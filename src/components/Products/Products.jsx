import React, { useState, useMemo } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import Filters from "./Filters";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "../../contexts/WishlistContext";
import { useLocation } from "react-router-dom";
import { addToCart } from "../../services/cart-service";

const Products = () => {
  const { products, loading } = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const { state } = useLocation();
  console.log(state);

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    brands: [],
    priceRange: { min: 0, max: 10000 },
    availability: null,
    minRating: 0,
  });

  const handleFilterChange = (type, value) => {
    setSelectedFilters((prev) => {
      if (type === "categories" || type === "brands") {
        const values = prev[type];
        return {
          ...prev,
          [type]: values.includes(value)
            ? values.filter((v) => v !== value)
            : [...values, value],
        };
      } else {
        return { ...prev, [type]: value };
      }
    });
    setCurrentPage(1);
  };

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products]
  );
  const brands = useMemo(
    () => [...new Set(products.map((p) => p.brand))],
    [products]
  );
const { toggleWishlist, isInWishlist ,deleteFromWish } = useWishlist();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedFilters.categories.length === 0 ||
        selectedFilters.categories.includes(product.category);

      const brandMatch =
        selectedFilters.brands.length === 0 ||
        selectedFilters.brands.includes(product.brand);

      const priceMatch =
        product.price >= selectedFilters.priceRange.min &&
        product.price <= selectedFilters.priceRange.max;

      const availabilityMatch =
        selectedFilters.availability === null ||
        (selectedFilters.availability === true && product.stock > 0) ||
        (selectedFilters.availability === false && product.stock === 0);

      const ratingMatch = product.rating >= (selectedFilters.minRating || 0);

      return (
        categoryMatch &&
        brandMatch &&
        priceMatch &&
        availabilityMatch &&
        ratingMatch
      );
    });
  }, [products, selectedFilters]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  if (loading) {
    return <div className="text-center text-xl py-10">Loading products...</div>;
  }

  const handleAddToCart = async (id) => {
    try {
      await addToCart(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] min-h-screen p-6 pt-20">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white p-4 rounded-xl shadow-md max-h-[80vh] overflow-y-auto sticky top-24">
            <Filters
              categories={categories}
              brands={brands}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4  shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 relative"
            >
              <div className="relative">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

<button  className="absolute top-2 right-2 text-xl cursor-pointer">
  {isInWishlist(product.id) ? (
    <FaHeart onClick={()=>{deleteFromWish(product.id)}}  className="text-black-500 " />
  ) : (
    <FaRegHeart onClick={() => toggleWishlist(product.id)} className="text-black-400" />
  )}
</button>
</div>
              <h3 className="text-lg font-semibold mb-1 line-clamp-1">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                {product.description}
              </p>
              <p className="text-2xl font-bold text-green-600 mb-1">
                ${product.price}
              </p>
              <p
                className={`text-sm mb-1 ${
                  product.stock > 0
                    ? "text-green-600"
                    : "text-red-600 font-[beatrice]"
                }`}
              >
                In Stock: {product.stock > 0 ? "Yes" : "No"}
              </p>
              <p className="text-sm text-yellow-600 mb-4">
                Rating: {product.rating} ★
              </p>
              <div className="flex justify-between mt-4 space-x-2">
                <Link
                  to={`/products/${product.id}`}
                  className=" bg-neutral-300 text-black font-semibold text-center py-2 hover:bg-black hover:text-white transition  flex-1"
                >
                  View Details
                </Link>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="bg-black text-white px-4 py-2  hover:bg-gray-800 transition cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-400"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
