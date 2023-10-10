import React, { useEffect, useState } from "react";

const ProductTable = ({ products, onItemChange ,PsubTotal ,subTotalChange}) => {
  var x = products.length * 20.45;
  const [subTotal,setSubTotal] = useState(PsubTotal);
console.log(subTotal);
  var [cartItems, setCartItems] = useState(products);
  const addToCart = (x, operator) => {
    if (operator === "+") {
      const updatedCart = products.map((y) =>
        y.name === x.name ? { ...y, quantity: y.quantity + 1 } : y
      );
      setSubTotal(subTotal+x.price);
      subTotalChange(subTotal+x.price);
      setCartItems(updatedCart);
      onItemChange(updatedCart);
    } else if (operator === "-") {
      if (x.quantity > 1) {
        const updatedCart = products.map((item) =>
          item.name === x.name ? { ...item, quantity: item.quantity - 1 } : item
        );
        setSubTotal(subTotal-x.price);
        subTotalChange(subTotal-x.price);
        setCartItems(updatedCart);
        onItemChange(updatedCart);
      } else {
        var updatedCart = products.map((item) =>
          item.name === x.name ? { ...item, quantity: item.quantity - 1 } : item
        );
        setSubTotal(subTotal-x.price);
        subTotalChange(subTotal-x.price);
        updatedCart = products.filter((obj) => obj.name !== x.name);
       
        setCartItems(updatedCart);
        onItemChange(updatedCart);
      }
    }
    else{
        var z = products.map((item) =>
          item.name === x.name ? { ...item, quantity: 0 } : item
        );
        z = products.filter((obj) => obj.name !== x.name);
        setSubTotal(subTotal-(x.price*x.quantity));
        subTotalChange(subTotal-(x.price*x.quantity));
        setCartItems(z);
        onItemChange(z);
    }
  };
  
  useEffect(() => {
    if(products.length >0){
    setSubTotal(PsubTotal)
    }
    else{
        setSubTotal(0);
        subTotalChange(0);
    }
  }, [products])
  
  return (
    <table style={{ width: "100%", height: { x }, paddingBottom: 500 - x }}>
      <thead >
        <tr style={{paddingBottom:'120px'}}>
        <th style={{ width: "5%" ,paddingBottom:'10px'}}></th>
          <th style={{ width: "35%",paddingBottom:'10px' }}>Products</th>
          <th style={{ width: "20%",paddingBottom:'10px' }}>Price</th>
          <th style={{ width: "20%",paddingBottom:'10px' }}>Quantity</th>
          <th style={{ width: "20%",paddingBottom:'10px' }}>Total</th>
        </tr>
      </thead>

      <tbody style={{ width: "100%", textAlign: "center",backgroundColor:'white' }}>
        {products.length > 0 && (
          <>
            {products.map((product, index) => (
              <tr key={index}>
             <td> <button
                    onClick={function () {
                      addToCart(product, "/");
                    }}
                  >
                    x
                  </button></td>
                <td>{product.name}</td>
                <td>{product.price} INR</td>
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
                <td>{product.price * product.quantity} INR</td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;
