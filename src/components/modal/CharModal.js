import React, { useState } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import axios from "axios";

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

export default function Modal({
  product,
  fetchData,
  setTotalPrice,
  totalPrice,
  toggle,
}) {
  const [open, setOpen] = useState(false);
  console.log(product);

  const accesstoken = localStorage.getItem("accesstoken");
  const refreshtoken = localStorage.getItem("refreshtoken");

  const onClickConfirmHandler = async (productId) => {
    await axios.put(
      `https://dev.kimmand0o0.shop/api/users/carts/delete/${productId}`,
      {},
      {
        headers: {
          accesstoken: accesstoken,
          refreshtoken: refreshtoken,
        },
      }
    );
    if (toggle) {
      setTotalPrice(totalPrice - product.quantityPrice);
    } else {
      setTotalPrice(totalPrice);
    }
    fetchData();
  };

  if (!open) {
    return (
      <StCloseIcon
        style={{
          position: "absolute",
          right: "0",
        }}
        onClick={() => setOpen(true)}
      ></StCloseIcon>
    );
  }

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLE} />
      <div style={MODAL_STYLES}>
        <div>
          <StModalStyle>
            <p>선택하신 상품을 삭제하시겠습니까?</p>
            <div>
              <button onClick={() => setOpen(false)}>취소</button>
              <button onClick={() => onClickConfirmHandler(product.productId)}>
                확인
              </button>
            </div>
          </StModalStyle>
        </div>

        {/* <button onClick={() => setOpen(false)}>Close Modal</button> */}
      </div>
    </>,
    document.getElementById("portal")
  );
}

const StModalStyle = styled.div`
  width: 310px;
  height: 155px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;

  p {
    font-size: 16px;
    margin-top: 40px;
  }

  button {
    width: 155px;
    height: 51px;
    border: 1px solid #dedfe0;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
`;

const StCloseIcon = styled.div`
  display: block;
  overflow: hidden;
  font-size: 1px;
  line-height: 0;
  background: url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/ico_friends.png")
    0 0 no-repeat;
  background-size: 700px 1000px;
  color: transparent;
  width: 16px;
  height: 16px;
  background-position: -120px 0;

  border: 1px solid white;
  border-radius: 100%;

  cursor: pointer;
`;
