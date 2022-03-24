import React from "react";
import ProductModal from "../Modal/ProductModal";

const Navbar = ({ cartItem }) => {
  return (
    <div className="bg-dark text-white sticky-top">
      <nav className="d-flex align-items-center justify-content-between container py-2">
        <div>
          <h3>Gun House</h3>
        </div>
        <div>
          <ProductModal cartItem={cartItem}></ProductModal>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
