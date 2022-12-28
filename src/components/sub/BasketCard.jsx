import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { priceToString } from "./utils/PriceToString";
import CharModal from "../modal/CharModal";
import axios from "axios";

const BasketCard = ({
  fetchData,
  product,
  priceTotal,
  setTotalPrice,
  setCount,
  carts,
  count,
  click,
  setClick,
  setToggleParent,
}) => {
  const [toggle, setToggle] = useState(true);

  const accesstoken = localStorage.getItem("accesstoken");
  const refreshtoken = localStorage.getItem("refreshtoken");

  useEffect(() => {
    setTotalPrice(priceTotal);
  }, []);

  useEffect(() => {
    if (carts.length === count) {
      setToggleParent(true);
    } else {
      setToggleParent(false);
    }
  }, [count]);

  useEffect(() => {
    setToggle(click);
  }, [click]);

  useEffect(() => {
    setCount(carts.length);
  }, [carts.length]);

  const reduceAmount = async ({ productId, amount }) => {
    if (amount > 1) {
      await axios.put(
        `https://dev.kimmand0o0.shop/api/users/carts/${productId}`,
        {
          amount: amount - 1,
        },
        {
          headers: {
            accesstoken: accesstoken,
            refreshtoken: refreshtoken,
          },
        }
      );
      fetchData();
    }
  };

  const reduceAmountWithPrice = async ({ productId, amount, price }) => {
    if (amount > 1) {
      await axios.put(
        `https://dev.kimmand0o0.shop/api/users/carts/${productId}`,
        {
          amount: amount - 1,
        },
        {
          headers: {
            accesstoken: accesstoken,
            refreshtoken: refreshtoken,
          },
        }
      );
      fetchData();
      setTotalPrice((prev) => prev - price / amount);
    }
  };

  const increaseAmount = async ({ productId, amount }) => {
    await axios.put(
      `https://dev.kimmand0o0.shop/api/users/carts/${productId}`,
      {
        amount: amount + 1,
      },
      {
        headers: {
          accesstoken: accesstoken,
          refreshtoken: refreshtoken,
        },
      }
    );
    fetchData();
  };

  const increaseAmountWithPrice = async ({ productId, amount, price }) => {
    await axios.put(
      `https://dev.kimmand0o0.shop/api/users/carts/${productId}`,
      {
        amount: amount + 1,
      },
      {
        headers: {
          accesstoken: accesstoken,
          refreshtoken: refreshtoken,
        },
      }
    );
    fetchData();
    setTotalPrice((prev) => prev + price / amount);
  };

  const removePrice = (productPrice) => {
    setToggle(false);
    setTotalPrice((prev) => prev - productPrice);
    setCount((prev) => prev - 1);
  };

  const addPrice = (productPrice) => {
    setToggle(true);
    setTotalPrice((prev) => prev + productPrice);
    setCount((prev) => prev + 1);
  };

  return (
    <div key={product.productId}>
      <StCard>
        <CharModal fetchData={fetchData} product={product}></CharModal>
        {toggle ? (
          <StCheckIcon
            onClick={() => removePrice(product.quantityPrice)}
          ></StCheckIcon>
        ) : (
          <StCheckIcon
            onClick={() => addPrice(product.quantityPrice)}
            bgPosition="-160px -220px"
          ></StCheckIcon>
        )}
        <img src={product.imageUrl} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p style={{ margin: "0", fontSize: "15px" }}>{product.productName}</p>

          <h3 style={{ margin: "10px 0", fontSize: "16px" }}>
            {priceToString(product.quantityPrice)} 원
          </h3>
          {toggle ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <StCheckIcon
                bgPosition="-620px -220px"
                onClick={() =>
                  reduceAmountWithPrice({
                    productId: product.productId,
                    amount: product.amount,
                    price: product.quantityPrice,
                  })
                }
              ></StCheckIcon>
              <StNumInput value={product.amount} disabled />
              <StCheckIcon
                bgPosition="-590px -220px"
                onClick={() =>
                  increaseAmountWithPrice({
                    productId: product.productId,
                    amount: product.amount,
                    price: product.quantityPrice,
                  })
                }
              ></StCheckIcon>
              {/* <StCheckIcon bgPosition="-560px -220px"></StCheckIcon> */}
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <StCheckIcon
                bgPosition="-620px -220px"
                onClick={() =>
                  reduceAmount({
                    productId: product.productId,
                    amount: product.amount,
                  })
                }
              ></StCheckIcon>
              <StNumInput value={product.amount} disabled />
              <StCheckIcon
                bgPosition="-590px -220px"
                onClick={() =>
                  increaseAmount({
                    productId: product.productId,
                    amount: product.amount,
                  })
                }
              ></StCheckIcon>
              {/* <StCheckIcon bgPosition="-560px -220px"></StCheckIcon> */}
            </div>
          )}
        </div>
      </StCard>
      <StBorder height="1px"></StBorder>
    </div>
  );
};

export default BasketCard;

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
