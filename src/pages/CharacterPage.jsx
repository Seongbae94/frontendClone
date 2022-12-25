import React, { useState } from "react";
import styled from "styled-components";
import CaractorCategory from "../components/category/Category";
import Modal from "../components/modal/Modal";
import { useParams } from "react-router-dom";
import charInfos from "../components/sub/db/data.json";

const CharacterPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const charInfo = charInfos.character.find((char) => char.id === +id);
  console.log(charInfo);
  return (
    <StContainer>
      <CaractorCategory />
      <StHeader>
        <div className="mainImg">
          <div className="imgContainer">
            <img className="charImg" src={charInfo.imageUrl} />
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
                <span>{charInfo.modalDesc1}</span>
                <span>{charInfo.modalDesc2}</span>
                <span>{charInfo.modalDesc3}</span>
                {charInfo.modalDesc4}
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
        <StProduct>
          <img style={{ width: "100%" }} src={require("../amu.png")} />
          <div className="flex">
            <p className="title">[온라인 전용] 메가바디필로우_토끼어피치</p>
            <span className="icon"></span>
          </div>
          <p className="price">99,000원</p>
        </StProduct>
        <StProduct>
          <img style={{ width: "100%" }} src={require("../amu.png")} />
          <div className="flex">
            <p className="title">[온라인 전용] 메가바디필로우_토끼어피치</p>
            <span className="icon"></span>
          </div>
          <p className="price">99,000원</p>
        </StProduct>
        <StProduct>
          <img style={{ width: "100%" }} src={require("../amu.png")} />
          <div className="flex">
            <p className="title">[온라인 전용] 메가바디필로우_토끼어피치</p>
            <span className="icon"></span>
          </div>
          <p className="price">99,000원</p>
        </StProduct>
        <StProduct>
          <img style={{ width: "100%" }} src={require("../amu.png")} />
          <div className="flex">
            <p className="title">[온라인 전용] 메가바디필로우_토끼어피치</p>
            <span className="icon"></span>
          </div>
          <p className="price">99,000원</p>
        </StProduct>
        <StProduct>
          <img style={{ width: "100%" }} src={require("../amu.png")} />
          <div className="flex">
            <p className="title">[온라인 전용] 메가바디필로우_토끼어피치</p>
            <span className="icon"></span>
          </div>
          <p className="price">99,000원</p>
        </StProduct>
      </StGridBox>
    </StContainer>
  );
};

export default CharacterPage;

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

  padding: 90px 15px 50px 15px;

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

  span {
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
  /* background-color: yellow; */
  margin-bottom: 40px;

  .flex {
    display: flex;
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
// const StGrid2 = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
// `;
