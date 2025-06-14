import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";


const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState();
  const { token } = useAuth()

  async function deleteFromWish(id) {
    try {
      let res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
        headers: {
          token: token
        }
      })
      let data =await res.data
      console.log(data);
      if (data.status == 'success') {
        toast.success('Product removed Successfully')
        getUserWithList()
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong.")
    }
  }

  async function toggleWishlist(id) {
  try {
    let res= await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', {productId : id}, {
      headers: {
        token
      }
    })
    let data = res.data
    console.log(data);
    if (data.status == 'success') {
      toast.success('Product Added Successfully')
      getUserWithList()
      }
  } catch (error) {
    console.log(error);
    toast.error("Something Went Wrong.")
  }
    
  };
async function getUserWithList() {
      try {
        const response = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
          headers: {
            token: token 
          }
        });
        console.log(response.data);
        
        setWishlist(response.data?.data);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    }
 
  // حفظ في localStorage عند التغيير
  useEffect(() => {
    
     
    if (token) {
      
      getUserWithList();
    }
    
  }, [token]);
  

  // // التبديل بين الإضافة والإزالة

  // هل المنتج موجود؟
  const isInWishlist = (productId) => {
    return wishlist?.some((item) => item._id === productId);
  };

  return (
    <WishlistContext.Provider value={{ wishlist , toggleWishlist , isInWishlist , deleteFromWish ,setWishlist}}>
      {children}
    </WishlistContext.Provider>
  );
};


