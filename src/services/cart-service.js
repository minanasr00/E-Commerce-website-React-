import axios from "axios";
import { getAuthToken } from "../utils/token-utils";

import { SERVICES } from "../constants/api";

export const getCartItems = async () => {
  const token = getAuthToken();

  try {
    const res = await axios.get(SERVICES.CART_ENDPOINT, {
      headers: {
        token,
      },
    });
    if (res.status === 200) {
      const data = await res.data?.data;
      return data;
    } else {
      console.error("Failed to fetch home data:", res.status);
    }
  } catch (error) {
    console.error("Error fetching home data:", error);
  }
};

export const addToCart = async (productId) => {
  const token = getAuthToken();

  try {
    const res = await axios.post(
      SERVICES.CART_ENDPOINT,
      {
        productId,
      },
      {
        headers: {
          token,
        },
      }
    );
    if (res.status === 200) {
      const data = await res.data?.data;
      return data;
    } else {
      console.error("Failed to fetch home data:", res.status);
    }
  } catch (error) {
    console.error("Error fetching home data:", error);
  }
};
