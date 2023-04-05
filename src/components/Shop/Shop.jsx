import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(()=>{
        // console.log("products", products);
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step 1: get the product using id
        for (const id in storedCart){
            // console.log(storedCart);
            // step 2: find & get the product by using id
            const addedProduct = products.find(product => product.id === id)
            // console.log(addedProduct);
            if(addedProduct){
                //Step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);


    }, [products])

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart)

        addToDb(product.id)
    }

    return (
        <div className='container shop'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }
            </div>  
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;

