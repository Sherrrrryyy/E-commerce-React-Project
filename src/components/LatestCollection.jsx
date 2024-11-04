import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'


const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    console.log(products);
    
    if (!products) {
        console.log("Products not loaded yet");
        return null;
    }

    return (
        <div>

        </div>
    )
}

export default LatestCollection