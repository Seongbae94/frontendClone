import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CaractorCategory from "../components/category/Category";
import Modal from "../components/modal/Modal";
import { useNavigate, useParams } from "react-router-dom";
import charInfos from "../components/sub/db/data.json";
import axios from "axios";
import CharProductCard from "../components/sub/CharProductCard";

const CharacterPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [charProducts, setCharProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const { id } = useParams();
  //charInfo = 모달 캐릭터 정보 - hard code라 안 건드려도 됌
  const charInfo = charInfos.character.find((char) => char.id === +id);
  const charName = charInfo.uniqueName;

  const accesstoken = localStorage.getItem("accesstoken");
  const refreshtoken = localStorage.getItem("refreshtoken");

  const fetchCharData = async () => {
    const { data } = await axios.get(
      `https://dev.kimmand0o0.shop/api/products/characters/${charName}`,
      {
        headers: {
          accesstoken: accesstoken,
          refreshtoken: refreshtoken,
        },
      }
    );
    setCharProducts(data.products);
  };

  const fetchCartData = async () => {
    const { data } = await axios.get(
      "https://dev.kimmand0o0.shop/api/users/carts",
      {
        headers: {
          accesstoken: accesstoken,
          refreshtoken: refreshtoken,
        },
      }
    );
    setCartProducts(data.Carts);
  };

  useEffect(() => {
    fetchCharData();
    fetchCartData();
  }, [charName]);

  const navigate = useNavigate();

  const [clickCategoryId, setClickCategoryId] = useState(1);

  const gotoProfile = (id) => {
    navigate(`/profile/${id}`);
    setClickCategoryId(id);
  };
  useEffect(() => {}, [charProducts, cartProducts]);

  //캐릭터 페이지에서 productId 모음
  const productIdGroup = [];
  charProducts?.map((product) => productIdGroup.push(product.productId));

  //장바구니 페이지에서 productId
  const includeGroup = [];
  cartProducts?.products?.map((product) =>
    productIdGroup.includes(product.productId)
      ? includeGroup.push(product.productId)
      : null
  );

  return (
    <StContainer>
      <CaractorCategory
        onClick={gotoProfile}
        clickCategoryId={clickCategoryId}
      />
      <StHeader>
        <div className="mainImg">
          <div className="imgContainer">
            <img className="charImg" src={charInfo.bgImageUrl} />
            <img onClick={() => setIsOpen(true)} className="spreadImg" />
            <Modal onClose={() => setIsOpen(false)} open={isOpen}>
              <StModalStyle>
                <img src={charInfo.modalImageUrl} className="CharImg" />
                <img
                  className="modal-close"
                  src="https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/ico_close.png"
                  onClick={() => setIsOpen(false)}
                />
                <h1>{charInfo.nameEng}</h1>
                <p>{charInfo.title}</p>
                <StFlex
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "0",
                  }}
                >
                  <span>{charInfo.modalDesc1}</span>
                  <span>{charInfo.modalDesc2}</span>
                  <span>{charInfo.modalDesc3}</span>
                  <span>{charInfo.modalDesc4}</span>
                </StFlex>
              </StModalStyle>
            </Modal>
          </div>
          <h2 style={{ fontSize: "28px", margin: "20px 0 10px 0" }}>
            {charInfo.nameKor}
          </h2>
          <p className="text-font">{charInfo.desc1} </p>
          <p className="text-font">{charInfo.desc2}</p>
        </div>
      </StHeader>
      <div style={{ height: "1px", backgroundColor: "#dedfe0" }}></div>

      <StGridBox>
        {charProducts.map((product) => {
          return (
            <CharProductCard
              key={product.productId}
              product={product}
              fetchCartData={fetchCartData}
              includeGroup={includeGroup}
            />
          );
        })}
      </StGridBox>
    </StContainer>
  );
};

export default CharacterPage;

const StFlex = styled.div`
  span {
    margin: 5px 0 0 0;
  }
`;

const StModalStyle = styled.div`
  width: 280px;
  /* height: 363px; */
  margin: 20px 0;
  background-color: white;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 90px 15px 40px 15px;

  position: relative;

  h1 {
    font-size: 28px;
    margin: 0 0 3px 0;
  }
  p {
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 20px 0;
  }

  .CharImg {
    width: 210px;
    height: 210px;
    position: absolute;

    top: 0;

    transform: translate(0, -60%);
  }

  .modal-close {
    cursor: pointer;
    width: 24px;
    height: 24px;

    position: absolute;
    top: 15px;
    right: 15px;
  }

  div {
    text-align: center;
    margin-bottom: 7px;
  }
`;

const StCategory = styled.div`
  display: flex;
  justify-content: center;
`;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StHeader = styled.div`
  .mainImg {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* position: relative; */

    margin: 40px 0 30px;
  }

  .imgContainer {
    position: relative;
  }
  .spreadImg {
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
    background-position: -640px -180px;

    position: absolute;
    right: 0;
    bottom: 0;

    /* border: 1px solid white; */
    border-radius: 100%;

    cursor: pointer;
  }

  .charImg {
    width: 130px;
    background-color: pink;
    border-radius: 50px;
  }

  .text-font {
    font-size: 14px;
    margin: 0;
    color: #000;
  }
`;

const StGridBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 10px;

  @media screen and (max-width: 630px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

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
    margin: 5px 0 0 0;
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

    width: 24px;
    height: 24px;
    background-position: -283px -220px;
    margin: 0;
  }

  @media screen and (max-width: 630px) {
    max-width: 283px;
  }
`;
// const StGrid2 = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
// `;
