import React from "react";
import { priceToString } from "./utils/PriceToString";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/modules/basketSlice";

const CharProductCard = ({ product, charInfo }) => {
  const dispatch = useDispatch();

  const addToBasket = (id) => {
    dispatch(addToCart({ id, name: charInfo.nameEng }));
  };

  return (
    <StProduct key={product.id}>
      <img style={{ width: "100%" }} src={product.imageUrl} />
      <div className="flex">
        <p className="title">{product.title}</p>
        <span className="icon" onClick={() => addToBasket(product.id)}></span>
      </div>
      <p className="price">{priceToString(product.price)}원</p>
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

  .icon {
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
    background-position: -283px -220px;
    margin: 0;
  }

  @media screen and (max-width: 630px) {
    max-width: 283px;
  }
`;
