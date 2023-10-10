import React, { useEffect, useState } from "react";

const ProductTable = ({ products, onItemChange }) => {
  var x = products.length * 20.45;

  var [cartItems, setCartItems] = useState(products);
  const addToCart = (x, operator) => {
    if (operator === "+") {
      const updatedCart = products.map((y) =>
        y.name === x.name ? { ...y, quantity: y.quantity + 1 } : y
      );

      setCartItems(updatedCart);
      onItemChange(updatedCart);
    } else {
      if (x.quantity > 1) {
        const updatedCart = products.map((item) =>
          item.name === x.name ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedCart);
        onItemChange(updatedCart);
      } else {
        var updatedCart = products.map((item) =>
          item.name === x.name ? { ...item, quantity: item.quantity - 1 } : item
        );
        updatedCart = products.filter((obj) => obj.name !== x.name);

        setCartItems(updatedCart);
        onItemChange(updatedCart);
      }
    }
  };
  useEffect(() => {}, [cartItems]);
  return (
    <table style={{ width: "100%", height: { x }, paddingBottom: 500 - x }}>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Products</th>
          <th style={{ width: "20%" }}>Price</th>
          <th style={{ width: "20%" }}>Quantity</th>
          <th style={{ width: "20%" }}>Total</th>
        </tr>
      </thead>

      <tbody style={{ width: "100%", textAlign: "center" }}>
        {products.length > 0 && (
          <>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  {" "}
                  <button
                    onClick={function () {
                      addToCart(product, "-");
                    }}
                  >
                    -
                  </button>
                  {" " + product.quantity + " "}
                  <button
                    onClick={function () {
                      addToCart(product, "+");
                    }}
                  >
                    +
                  </button>
                </td>
                <td>${product.price * product.quantity}</td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;
