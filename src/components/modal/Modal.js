import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   backgroundColor: "white",
  //   padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0, .5)",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLE} />
      <div style={MODAL_STYLES}>
        <div>{children}</div>

        {/* <button onClick={onClose}>Close Modal</button> */}
      </div>
    </>,
    document.getElementById("portal")
  );
}

// const StModalSyle = styled.div`
//   background-color: green;
//   overflow: hidden;
//   width: 300px;
//   height: 300px;
//   border-radius: 10px;
// `;
