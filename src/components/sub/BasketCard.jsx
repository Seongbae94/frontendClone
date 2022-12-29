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
  carts,
  handlerToggleChild,
  totalPrice,
  setCarts,
}) => {
  const [toggle, setToggle] = useState(product.toggle);

  const accesstoken = localStorage.getItem("accesstoken");
  const refreshtoken = localStorage.getItem("refreshtoken");

  useEffect(() => {
    setTotalPrice(priceTotal);
  }, []);

  useEffect(() => {
    setToggle(product.toggle);
  }, [product.toggle]);

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

      const { data } = await axios.get(
        "https://dev.kimmand0o0.shop/api/users/carts",
        {
          headers: {
            accesstoken: accesstoken,
            refreshtoken: refreshtoken,
          },
        }
      );

      const convertedCartsByCheck = data.Carts.products.map((item) => ({
        ...item,
        toggle: true,
      }));

      let cartLists = carts;

      let cartss = cartLists.map((cart) =>
        convertedCartsByCheck.map((newVal) => ({
          ...newVal,
          toggle: cart.toggle,
        }))
      );

      let result = [];

      for (let i = 0; i < cartss.length; i++) {
        result.push(cartss[i][i]);
      }

      setCarts(result);
      // fetchData();
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
      const { data } = await axios.get(
        "https://dev.kimmand0o0.shop/api/users/carts",
        {
          headers: {
            accesstoken: accesstoken,
            refreshtoken: refreshtoken,
          },
        }
      );

      const convertedCartsByCheck = data.Carts.products.map((item) => ({
        ...item,
        toggle: true,
      }));

      let cartLists = carts;

      let cartss = cartLists.map((cart) =>
        convertedCartsByCheck.map((newVal) => ({
          ...newVal,
          toggle: cart.toggle,
        }))
      );

      let result = [];

      for (let i = 0; i < cartss.length; i++) {
        result.push(cartss[i][i]);
      }

      setCarts(result);
      // fetchData();
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

    const { data } = await axios.get(
      "https://dev.kimmand0o0.shop/api/users/carts",
      {
        headers: {
          accesstoken: accesstoken,
          refreshtoken: refreshtoken,
        },
      }
    );

    const convertedCartsByCheck = data.Carts.products.map((item) => ({
      ...item,
      toggle: true,
    }));

    let cartLists = carts;

    let cartss = cartLists.map((cart) =>
      convertedCartsByCheck.map((newVal) => ({
        ...newVal,
        toggle: cart.toggle,
      }))
    );

    let result = [];

    for (let i = 0; i < cartss.length; i++) {
      result.push(cartss[i][i]);
    }

    setCarts(result);
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
    const { data } = await axios.get(
      "https://dev.kimmand0o0.shop/api/users/carts",
      {
        headers: {
          accesstoken: accesstoken,
          refreshtoken: refreshtoken,
        },
      }
    );

    const convertedCartsByCheck = data.Carts.products.map((item) => ({
      ...item,
      toggle: true,
    }));

    let cartLists = carts;

    let cartss = cartLists.map((cart) =>
      convertedCartsByCheck.map((newVal) => ({
        ...newVal,
        toggle: cart.toggle,
      }))
    );

    let result = [];

    for (let i = 0; i < cartss.length; i++) {
      result.push(cartss[i][i]);
    }

    setCarts(result);
    // fetchData();
    setTotalPrice((prev) => prev + price / amount);
  };

  const removePrice = (productPrice, productId) => {
    handlerToggleChild(productId);
    setToggle(product.toggle);
    setTotalPrice((prev) => prev - productPrice);
  };

  const addPrice = (productPrice, productId) => {
    handlerToggleChild(productId);
    setToggle(product.toggle);
    setTotalPrice((prev) => prev + productPrice);
  };

  return (
    <div key={product.productId}>
      <StCard>
        <CharModal
          fetchData={fetchData}
          product={product}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          toggle={toggle}
          setCarts={setCarts}
          carts={carts}
        ></CharModal>
        {toggle ? (
          <StCheckIcon
            onClick={() =>
              removePrice(product.quantityPrice, product.productId)
            }
          ></StCheckIcon>
        ) : (
          <StCheckIcon
            onClick={() => addPrice(product.quantityPrice, product.productId)}
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
