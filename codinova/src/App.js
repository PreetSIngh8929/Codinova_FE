import { useState } from "react";
import "./App.css";
import VerticalTable from "./components/Price_Calculator";
import Product from "./components/Product";
import ProductTable from "./components/Product_Table";
import products from "./data/data.json";
function App() {
  const data = [
    { label: "SubTotal", value: "0.000 EUR" },
    { label: "VAT tax", value: 30 },
    { label: "Discount", value: 10 },
    { label: "Total", value: "0.000 EUR" },
  ];
  const [cartItems, setCartItems] = useState("");
  console.log(cartItems);
  const handleItemsChange = (item) => {
    setCartItems(item);
  };

  return (
    <div className="App">
      <div className="Cart_Component">
        <ProductTable style={{ minHeight: "700px" }} products={cartItems} onItemChange={handleItemsChange} />
        {!cartItems && (
          <div
            style={{
              width: "36.5%",
              backgroundColor: "white",
              fontSize: "30px",
              marginTop: "20px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              color: "gray",
              height: "100px",
              position: "absolute",
              top: "40px",
            }}
          >
            THERE ARE NO PRODUCTS
          </div>
        )}
        <VerticalTable data={data} />
        <div style={{ width: "100%" }}>
          <button
            type="button"
            style={{
              width: "48.75%",
              margin: "2.5% 1.25% 2.5% 0",
              height: "45px",
              backgroundColor: "red",
              color: "white",
            }}
          >
            Cancel Sale
          </button>
          <button
            type="button"
            style={{
              width: "48.75%",
              margin: "2.5% 0 2.5% 1.25%",
              height: "45px",
              backgroundColor: "#4cbb17",
              color: "white",
            }}
          >
            Process Sale
          </button>
        </div>
      </div>
      <div className="Product_Component">
        <Product products={products} onItemChange={handleItemsChange} />
      </div>
    </div>
  );
}

export default App;
