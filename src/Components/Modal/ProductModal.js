import React, { useState } from "react";
import Modal from "react-modal";
import { MdShoppingCart } from "react-icons/md";
import ProductModalDesign from "./ProductModalDesign";

const ProductModal = ({ cartItem }) => {
  const customStyles = {
    content: {
      width: "50%",
      height: "500px",
      overFlow: "scroll",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  let totalPrice = 0;
  cartItem.forEach((element) => {
    totalPrice += parseFloat(element.price);
  });


  return (
    <div>
      <button onClick={openModal} className="btn btn-dark">
        <MdShoppingCart className="cart-icon"></MdShoppingCart>
        <sup>{cartItem.length}</sup>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="btn btn-dark">
          close
        </button>
        <h2 className="text-center">Total Item : {cartItem.length}</h2>
        <h2 className="text-center">Total Price: ${totalPrice}</h2>
        <hr />
        {cartItem.map((item) => (
          <ProductModalDesign item={item}></ProductModalDesign>
        ))}
      </Modal>
    </div>
  );
};

export default ProductModal;
