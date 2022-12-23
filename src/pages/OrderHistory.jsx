import React from "react";
import styled from "styled-components";

const OrderHistory = () => {
  return (
    <StContainer>
      <StCards>
        <StCard>
          <h1>2022.10.20</h1>
          <StCombinedBg>
            <StBg>
              <img src={require("../amu.png")} />
              <div className="contents">
                <p>춘식이 허그 목쿠션</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <StIcon className="icon"></StIcon>
                  <p>구매확정</p>
                </div>
              </div>
            </StBg>
            <StCircleL></StCircleL>
            <StCircleR></StCircleR>
          </StCombinedBg>
        </StCard>
        <StCard>
          <h1>2022.10.20</h1>
          <StCombinedBg>
            <StBg>
              <img src={require("../amu.png")} />
              <div className="contents">
                <p>춘식이 허그 목쿠션</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <StIcon className="icon"></StIcon>
                  <p>구매확정</p>
                </div>
              </div>
            </StBg>
            <StCircleL></StCircleL>
            <StCircleR></StCircleR>
          </StCombinedBg>
        </StCard>
        <StCard>
          <h1>2022.10.20</h1>
          <StCombinedBg>
            <StBg>
              <img src={require("../amu.png")} />
              <div className="contents">
                <p>춘식이 허그 목쿠션</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <StIcon className="icon"></StIcon>
                  <p>구매확정</p>
                </div>
              </div>
            </StBg>
            <StCircleL></StCircleL>
            <StCircleR></StCircleR>
          </StCombinedBg>
        </StCard>
      </StCards>
      <ul>
        <li>최근 5년 내역만 확인 가능합니다.</li>
        <li>취소/교환/반품신청은 상세 주문내역에서 가능합니다.</li>
      </ul>
    </StContainer>
  );
};

export default OrderHistory;

const StContainer = styled.div`
  width: 100%;
  height: 612px;
  background-color: #f2f2f2;

  ul {
    font-size: 13px;
    color: #909092;
  }

  li {
    margin: 5px 0;
  }
`;

const StCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StCard = styled.div`
  margin-top: 15px;
  cursor: pointer;

  h1 {
    font-weight: bold;
    font-size: 16px;
  }
`;

const StBg = styled.div`
  border-radius: 10px;

  width: 600px;
  height: 120px;
  background-color: white;

  display: flex;

  img {
    background-color: yellow;
    width: 100px;
    height: 100px;

    margin: 10px;
    border-radius: 5px;
  }

  .contents {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const StCircleL = styled.div`
  border-radius: 100%;
  width: 15px;
  height: 15px;
  background-color: #f2f2f2;

  position: absolute;

  transform: translate(-50%, -50%);
  top: 50%;
`;

const StCircleR = styled.div`
  border-radius: 100%;
  width: 15px;
  height: 15px;
  background-color: #f2f2f2;

  position: absolute;

  transform: translate(50%, -50%);
  top: 50%;
  right: 0;
`;

const StCombinedBg = styled.div`
  position: relative;
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

  width: 24px;
  height: 24px;
  background-position: -615px -76px;
  margin: 0;
`;
