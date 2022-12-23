import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MyPageLayout = () => {
  const [clickedBasket, setClickedBasket] = useState(true);
  const [clickedOrderList, setClickedOrderList] = useState(false);
  const navigate = useNavigate();

  const orderlist = (list) => {
    navigate("/mypage/orderlist");
    setClickedOrderList(true);
    setClickedBasket(false);
  };

  const basket = (list) => {
    navigate("/mypage/basket");
    setClickedBasket(true);
    setClickedOrderList(false);
  };

  return (
    <StMypage>
      {clickedBasket ? (
        <StClicked color="black" onClick={() => basket()}>
          장바구니
        </StClicked>
      ) : (
        <StClicked color="#909092" onClick={() => basket()}>
          장바구니
        </StClicked>
      )}

      {clickedOrderList ? (
        <StClicked color="black" onClick={() => orderlist()}>
          주문내역
        </StClicked>
      ) : (
        <StClicked color="#909092" onClick={() => orderlist()}>
          주문내역
        </StClicked>
      )}
    </StMypage>
  );
};

export default MyPageLayout;

const StMypage = styled.div`
  display: flex;

  width: 100%;

  div {
    width: 50%;
    text-align: center;

    padding: 10px 0;
    background-color: #fcf1f3;

    cursor: pointer;
  }
`;

const StClicked = styled.div`
  color: ${(prop) => prop.color || null};
`;
