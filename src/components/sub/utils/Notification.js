import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  const notify = () => {
    toast.success("장바구니에 담겼습니다", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div>
      <button onClick={notify}>click me</button>
      <ToastContainer />
    </div>
  );
};

export default Notification;
