import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    // console.log("products", products);
    const storedCart = getShoppingCart();
    const savedCart = [];
    //step 1: get the product using id
    for (const id in storedCart) {
      // console.log(storedCart);
      // step 2: find & get the product by using id
      const addedProduct = products.find((product) => product.id === id);
      // console.log(addedProduct);
      if (addedProduct) {
        //Step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // console.log(addedProduct);
        //step 4: add the aded priduct to th saved card
        savedCart.push(addedProduct);
      }
    }
    //step 5: set the cart
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    // console.log(product);
    // const newCart = [...cart, product];
    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id === product.id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);

    addToDb(product.id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="container shop">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link to='/orders'>
            <button className="btn-proceed">
              Review Order
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
