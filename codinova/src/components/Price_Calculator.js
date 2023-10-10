import React from "react";
import "../Price_Calculator.css";
function VerticalTable({ data ,subTotal}) {
  console.log(subTotal);
  return (
    <>
      <div className="vertical-table">
        {data.map((item, index) => (
          <div key={index} className="table-row">
            <div className="table-label">{item.label}:</div>
            <div className="table-value">{item.value}</div>
          </div>
        ))}
      </div>
     
    </>
  );
}

export default VerticalTable;
