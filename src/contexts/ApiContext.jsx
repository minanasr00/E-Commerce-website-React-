import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ApiContext = createContext();

export function ApiContextProvider({ children }) {
    const baseUrl = 'https://ecommerce.routemisr.com/api/v1';

    const [homeData, setHomeData] = useState(null);
    async function fetchHomeData() {
        try {
            const res = await axios.get(`${baseUrl}/products`);
            if (res.status === 200) {
                const data = await res.data?.data;
                console.log('Home data fetched successfully:', data);
                setHomeData(data.slice(0, 4));
                console.log('Home data:', data.slice(0, 4));
                
            } else {
                console.error('Failed to fetch home data:', res.status);
            }

        } catch (error) {
            console.error('Error fetching home data:', error);
        }
    }
    useEffect(() => {
       fetchHomeData();
    }, []);
     return <>
            <ApiContext.Provider value={{homeData}}>
                {children}
            </ApiContext.Provider>
        </>

}
