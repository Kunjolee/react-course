import ReactDOM from "react-dom";
import React from "react";
import "./Modal.css";

const ModalPortal = ({ children, isOpen, closeModal }) => {
  return ReactDOM.createPortal(
    <article className={isOpen ? "modal isOpen" : "modal"} onClick={closeModal}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById("modal")
  );
};

export default ModalPortal;
