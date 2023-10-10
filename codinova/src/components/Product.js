import React, { useState } from "react";
import "../Products.css";
function Product({ products }) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.name === product.name);

    if (existingItem) {
      // If the item already exists in the cart, increase its quantity
      const updatedCart = cartItems.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      // If the item doesn't exist in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      {products.map((item, index) => (
        <div key={index} style={{ display: "inline-block", width: "16.6%" }}>
          <div
            className="container"
            style={{ backgroundImage: `url(${item.image})` }}
            onClick={() => {
              addToCart(item);
            }}
          >
            <div class="content">
              <p>{item.name}</p>
              <div class="tooltip">{item.price}</div>
              <div class="tooltip">{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
