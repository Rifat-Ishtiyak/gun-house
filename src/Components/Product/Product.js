import React from "react";
import "./Product.css";
import { MdShoppingCart } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";

const Product = (props) => {
  const { name, img, bullet, price, category, capacity } = props.product;
  const addToCart = props.addToCart;
  
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card-container">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <div className="card-details">
          <h3>{name}</h3>
          <div className="common-details">
            <p>Bullet Type : {bullet}</p>
            <p>Capacity : {capacity}</p>
            <p>Category : {category}</p>
          </div>
          <div className="d-flex align-items-center justify-content-between mt-3">
            <div className="add-cart">
              <button
                className="btn btn-light buy-btn"
                onClick={() => addToCart(props.product)}
              >
                <MdShoppingCart className="cart-icon"></MdShoppingCart>
              </button>
            </div>
            <div>
              <div className="product-price">
                <ImPriceTags size={28}></ImPriceTags> ${price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
