import React, { createContext, useContext, useEffect, useState } from "react";

// 1. إنشاء السياق
const WishlistContext = createContext();

// 2. هوك مخصص للاستخدام بسهولة
export const useWishlist = () => useContext(WishlistContext);

// 3. مزود السياق
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  // حفظ في localStorage عند التغيير
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // التبديل بين الإضافة والإزالة
  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.find((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  // هل المنتج موجود؟
  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};


