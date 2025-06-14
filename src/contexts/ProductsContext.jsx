import { createContext, useState, useEffect, useContext } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/products");
        const json = await res.json();
        const mappedProducts = json.data.map((product) => ({
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category.name,
          brand: product.brand.name,
          stock: product.quantity,
          rating: product.ratingsAverage,
          thumbnail: product.imageCover,
        }));
        setProducts(mappedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);