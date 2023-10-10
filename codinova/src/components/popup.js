import React, { useEffect, useState } from "react";
import "./Popup.css"; // Import CSS for styling

function Popup({ setVisible, handleVisible, products, PsubTotal }) {
  console.log(setVisible);
  const [isOpen, setIsOpen] = useState(setVisible);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const formattedDateTime = currentDateTime.toLocaleString();

  useEffect(() => {
    setIsOpen(setVisible);
  }, [setVisible]);
  var x = PsubTotal + PsubTotal*(0.3)-PsubTotal*(0.1);
  x=x.toFixed(2);
  return (
    <div>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "30px",
                backgroundColor: "navy",
                color: "white",
              }}
            >
              Receipt
            </div>
            <div style={{ padding: "20px" }}>
              <h4
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Sale No - 68945
              </h4>
              <h4>Date - {formattedDateTime}</h4>

              <table>
                <thead style={{ border: "1px solid black" }}>
                  <tr style={{ border: "1px solid black" }}>
                    <th style={{ width: "20%" }}>#</th>
                    <th style={{ width: "40%" }}>Products</th>
                    <th style={{ width: "20%" }}>Quantity</th>
                    <th style={{ width: "20%" }}>SubTotal</th>
                  </tr>
                </thead>

                <tbody style={{ textAlign: "center" }}>
                  {products.length > 0 && (
                    <>
                      {products.map((product, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{product.name}</td>
                          <td>{" " + product.quantity + " "}</td>
                          <td>{product.price * product.quantity} INR</td>
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>
              </table>
              <hr />
              <div>
                <div style={{ display: "inline-block", width: "40%" }}>
                </div>
                <div style={{ display: "inline-block", width: "30%" }}>
                  Total
                </div>
                <div style={{ display: "inline-block", width: "30%" }}>
{x} INR
                </div>
              </div>
              <hr />
              <div>
                <div style={{ display: "inline-block", width: "40%" }}></div>
                <div style={{ display: "inline-block", width: "30%" }}>
                  Discount
                </div>
                <div style={{ display: "inline-block", width: "30%" }}>10%</div>
              </div>
              <hr />
              <div>
                <div style={{ display: "inline-block", width: "40%" }}></div>
                <div style={{ display: "inline-block", width: "30%" }}>VAT</div>
                <div style={{ display: "inline-block", width: "30%" }}>30%</div>
              </div>
              <hr />

              <button
                style={{ width: "100%" }}
                onClick={() => {
                  handleVisible(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
