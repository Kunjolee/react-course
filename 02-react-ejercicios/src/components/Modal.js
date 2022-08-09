import React from "react";
import "./Modal.css";

const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <article className={isOpen ? "modal isOpen" : "modal"} onClick={closeModal}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
