import React from "react";

const Modal = ({ toggle, body }) => {
  return (
    <>
      <div className="modal" id="modal" />
      <div className="modal-background">
        <div className="modal-content">
          <div className="box">{body}</div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={toggle}
        ></button>
      </div>
    </>
  );
};

export default Modal;
