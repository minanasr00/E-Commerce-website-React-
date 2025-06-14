import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ApiContext = createContext();

export function ApiContextProvider({ children }) {
    const baseUrl = 'https://ecommerce.routemisr.com/api/v1';

    const [homeData, setHomeData] = useState(null);
    const [count, setCount] = useState(0);
    async function fetchHomeData(count=0) {
        try {
            const res = await axios.get(`${baseUrl}/products`);
            if (res.status === 200) {
                const data = await res.data?.data;
                if (count < 0) {
                    setCount(0)
                    
                } else if (count > (data?.length-4)) {
                    setCount((data?.length)-4)  
                } else {
                    setCount(count)
                }
                setHomeData(data.slice(count, count+4 ));
                console.log(data);
                
            } else {
                console.error('Failed to fetch home data:', res.status);
            }

        } catch (error) {
            console.error('Error fetching home data:', error);
        }
    }
    useEffect(() => {
       fetchHomeData(count);
    }, [count]);
     return <>
            <ApiContext.Provider value={{homeData ,setCount , count}}>
                {children}
            </ApiContext.Provider>
        </>

}
