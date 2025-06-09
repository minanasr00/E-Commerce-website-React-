// src/Context/ProductsContext.jsx
import { createContext, useState, useEffect, useContext } from "react";

// 1. إنشاء الـ context
const ProductsContext = createContext();

// 2. إنشاء Provider اللي هيلف حوالين التطبيق
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 3. جلب البيانات من الـ API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
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

// 4. Hook جاهز للاستخدام داخل أي مكون
export const useProducts = () => useContext(ProductsContext);
