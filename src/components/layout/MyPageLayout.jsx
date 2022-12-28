import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MyPageLayout = () => {
  const [clickedBasket, setClickedBasket] = useState(false);
  const [clickedOrderList, setClickedOrderList] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useSelector((store) => store.routes.route);

  useEffect(() => {
    if (pathname === "/mypage/basket") {
      setClickedBasket(true);
      setClickedOrderList(false);
    } else {
      setClickedOrderList(true);
      setClickedBasket(false);
    }
  }, [pathname]);

  const orderlist = () => {
    navigate("/mypage/orderlist");
    setClickedOrderList(true);
    setClickedBasket(false);
  };

  const basket = () => {
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
    background-color: #f9f9fa;

    cursor: pointer;
  }
`;

const StClicked = styled.div`
  color: ${(prop) => prop.color || null};
`;
