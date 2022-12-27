import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const CharProductCard = ({ product, fetchData }) => {
  const [clicked, setClicked] = useState(false);

  const addToBasket = async () => {
    setClicked(true);
    // await axios.post(`https://dev.kimmand0o0.shop/api/users/carts`, {
    //   productId: product.productId,
    //   amount: 1,
    // });
    // fetchData();
  };

  return (
    <StProduct key={product.productId}>
      <img style={{ width: "100%" }} src={product.imageUrl} />
      <div className="flex">
        <p className="title">{product.productName}</p>
        {clicked ? (
          <StIcon
            location="-320px -220px"
            onClick={() => addToBasket(product.id)}
          ></StIcon>
        ) : (
          <StIcon onClick={() => addToBasket(product.id)}></StIcon>
        )}
        {/* <StIcon onClick={() => addToBasket(product.id)}></StIcon> */}
      </div>
      <p className="price">{product.productPrice}원</p>
    </StProduct>
  );
};

export default CharProductCard;

const StProduct = styled.div`
  max-width: 188px;
  margin-bottom: 40px;

  cursor: pointer;

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .title {
    color: #747475;
    margin: 0;
  }

  .price {
    margin: 10px 0 0 0;
    font-weight: bold;
  }

  @media screen and (max-width: 630px) {
    max-width: 283px;
  }
`;

const StIcon = styled.div`
  display: block;
  overflow: hidden;
  font-size: 1px;
  line-height: 0;
  background: url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/ico_friends.png")
    0 0 no-repeat;
  background-size: 700px 1000px;
  color: transparent;

  width: 32px;
  height: 32px;
  background-position: ${(prop) => prop.location || "-280px -220px"};
  margin: 0;
`;
