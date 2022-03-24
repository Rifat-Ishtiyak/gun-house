import React from "react";
import "./ProductModalDesign.css";

const ProductModalDesign = ({ item }) => {
  const { name, price, img } = item;
  console.log(name);
  return (
    <div className="modal-container">
      <div className="modal-img">
        <img src={img} alt=""/>
      </div>
      <div className="item-details">
        <p className="mb-1 fs-4 fw-bold">{name}</p>
        <p className="mb-0 fs-5">Price : ${price}</p>
      </div>
    </div>
  );
};

export default ProductModalDesign;
