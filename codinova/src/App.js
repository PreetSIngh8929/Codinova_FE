import { useEffect, useState } from "react";
import "./App.css";
import VerticalTable from "./components/Price_Calculator";
import Product from "./components/Product";
import ProductTable from "./components/Product_Table";
import products from "./data/data.json";
import Popup from "./components/popup";
function App() {
 
  const [cartItems, setCartItems] = useState("");
  const [subTotal, setSubTotal] = useState(0);

  console.log(cartItems);
  const handleItemsChange = (item) => {
    setCartItems(item);
  };
  const handleSubTotalChange = (x) => {
    console.log(x);
    setSubTotal(x);
  };
  const handleVisible = (x) => {
    setIsVisible(x);
  };
  console.log(subTotal);
useEffect(() => {
console.log('called');
}, [cartItems])
const data = [
  { label: "SubTotal", value: subTotal },
  { label: "VAT tax", value: "30%" },
  { label: "Discount", value: "10%" },
  { label: "Total", value: subTotal+subTotal*(30/100)-subTotal*(10/100) },
];
const cancelSale=()=>{
  console.log("cancelSale");
setCartItems("");
setSubTotal(0);
}
const [isVisible,setIsVisible]=useState(false);
useEffect(() => {
  
}, [cartItems])
useEffect(() => {
  
}, [isVisible])

  return (
    <div className="App">
      <div className="Cart_Component">
        <ProductTable style={{ minHeight: "500px" }} products={cartItems} onItemChange={handleItemsChange} PsubTotal={subTotal}  subTotalChange={handleSubTotalChange}/>
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

        <VerticalTable data={data} subTotal={subTotal}/>
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
            onClick={cancelSale}
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
            onClick={()=>setIsVisible(true)}
          >
            Process Sale
          </button>
        </div>
      </div>
      
      <div className="Product_Component">
        <Product products={products} x={cartItems} onItemChange={handleItemsChange} PsubTotal={subTotal} subTotalChange={handleSubTotalChange}/>
      </div>
      <Popup setVisible={isVisible} handleVisible={handleVisible} products={cartItems} PsubTotal={subTotal} />

    </div>
  );
}

export default App;
