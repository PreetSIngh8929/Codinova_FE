import React from "react";

const ProductTable = ({ products }) => {
  return (
    <table style={{ width: "100%",height:'700px' }}>
      <thead>
        <tr>
          <th style={{ width: "30%" }}>Products</th>
          <th style={{ width: "20%" }}>Price</th>
          <th style={{ width: "20%" }}>Quantity</th>
          <th style={{ width: "30%" }}>Total</th>
        </tr>
      </thead>
      
      <tbody style={{ width: "100%" }}>
        
        {/* {products.length > 0 && <>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>{product.quantity}</td>
            <td>${(product.price * product.quantity).toFixed(2)}</td>
          </tr>
        ))}
        </>
      } */}
      </tbody>
    </table>
   
  );
};

export default ProductTable;
