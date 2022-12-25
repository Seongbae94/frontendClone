import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  addProductCount,
  subProductCount,
  addPriceByCount,
  subPriceByCount,
  addEachCheckedTotal,
  subEachCheckedTotal,
  autoToggleAll,
  toggleEach,
} from "../../redux/modules/basketSlice";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ setTotalPrice, id }) => {
  const dispatch = useDispatch();
  const baskets = useSelector((store) => store.basket.dummyInfo);

  const basket = baskets.find((basket) => basket.id === id);
  const priceAll = useSelector((store) => store.basket.totalPrice);

  //props로 받은 값을 initial value로 업데이트 하기 위해선 useEffect써야함
  useEffect(() => {
    setTotalPrice(priceAll);
  }, [priceAll]);

  useEffect(() => {
    dispatch(autoToggleAll());
  }, [basket.toggle]);

  const noChecked = () => {
    dispatch(toggleEach(id));
    dispatch(subEachCheckedTotal(id));
  };

  const Checked = () => {
    dispatch(toggleEach(id));
    dispatch(addEachCheckedTotal(id));
  };

  const addCountWithSum = () => {
    dispatch(addProductCount(id));
    dispatch(addPriceByCount(id));
  };

  const subCountWithSum = () => {
    dispatch(subProductCount(id));
    dispatch(subPriceByCount(id));
  };

  const addCountOnly = () => {
    dispatch(addProductCount(id));
  };
  const subCountOnly = () => {
    dispatch(subProductCount(id));
  };

  return (
    <div>
      <StCard style={{ display: "flex", padding: "10px", width: "100%" }}>
        <StCloseIcon
          style={{
            position: "absolute",
            right: "0",
          }}
        ></StCloseIcon>

        {basket.toggle ? (
          <StCheckIcon onClick={noChecked}></StCheckIcon>
        ) : (
          <StCheckIcon
            bgPosition="-160px -220px"
            onClick={Checked}
          ></StCheckIcon>
        )}
        <img src={require("../../amu.png")} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p style={{ margin: "0", fontSize: "15px" }}>{basket.title}</p>

          <h3 style={{ margin: "10px 0", fontSize: "16px" }}>
            {basket.price}원
          </h3>

          {/* <div style={{ display: "flex", alignItems: "center" }}> */}
          {basket.toggle ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <StCheckIcon
                onClick={() => subCountWithSum()}
                bgPosition="-620px -220px"
              ></StCheckIcon>
              <StNumInput value={basket.num} disabled />
              <StCheckIcon
                onClick={() => addCountWithSum()}
                bgPosition="-590px -220px"
              ></StCheckIcon>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <StCheckIcon
                onClick={() => subCountOnly()}
                bgPosition="-620px -220px"
              ></StCheckIcon>
              <StNumInput value={basket.num} disabled />
              <StCheckIcon
                onClick={() => addCountOnly()}
                bgPosition="-590px -220px"
              ></StCheckIcon>
            </div>
          )}
        </div>
      </StCard>
      <StBorder height="1px"></StBorder>
    </div>
  );
};

export default Card;

const StCard = styled.div`
  display: flex;
  margin-bottom: 20px;
  img {
    margin: 0 5px;
    width: 80px;
    height: 80px;
  }
`;

const StBorder = styled.div`
  position: relative;
  width: 100%;
  height: ${(prop) => prop.height || "3px"};
  background-color: #eee;

  top: -10px;
`;

const StNumInput = styled.input`
  width: 26px;
  height: 18px;
  padding: 8px 15px;
  border-radius: 5px;
  border: 1px solid #eee;
  margin: 0 2px;
  text-align: center;

  -webkit-appearance: none;
`;

const StCheckIcon = styled.div`
  display: block;
  overflow: hidden;
  font-size: 1px;
  line-height: 0;
  background: url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/ico_friends.png")
    0 0 no-repeat;
  background-size: 700px 1000px;
  color: transparent;
  width: 24px;
  height: 24px;
  background-position: ${(prop) => prop.bgPosition || "-120px -220px"};

  /* position: absolute; */
  left: 0;
  bottom: 0;
  border: 1px solid white;
  border-radius: 100%;

  cursor: pointer;
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

  /* position: absolute; */
  /* left: 0;
  bottom: 0; */
  border: 1px solid white;
  border-radius: 100%;

  cursor: pointer;
`;
