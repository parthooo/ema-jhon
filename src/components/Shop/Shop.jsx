import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='container shop'>
            <div className="product-container">
                {
                    products.map(product => console.log(product))
                }
            </div>
            <div className="cart-container">Hello</div>
        </div>
    );
};

export default Shop;