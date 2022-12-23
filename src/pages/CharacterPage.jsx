import React from "react";
import styled from "styled-components";

const CharacterPage = () => {
  return (
    <StContainer>
      <StHeader>
        <div className="mainImg">
          <img className="spreadImg" />
          <img className="charImg" src={require("../amu.png")} />
        </div>
      </StHeader>
      <div style={{ height: "1px", border: "1px solid #dedfe0" }}></div>

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

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StHeader = styled.div`
  .mainImg {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    margin: 40px 0;
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
    left: 350px;
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
    margin: 0;
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
