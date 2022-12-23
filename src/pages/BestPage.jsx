import React from "react";
import styled from "styled-components";

const BestPage = () => {
  return (
    <StContainer>
      <StPopular>
        <div className="popular">지금 인기 있는</div>
        <StBasketIcon bgPosition="-270px -550px"></StBasketIcon>
      </StPopular>
      {/* //map돌리기 */}
      <StCards>
        <StCard>
          <p className="rank">1</p>
          <StCardImage src={require("../amu.png")} />
          <StFlexStrech>
            <p className="card-title" mr="5px">
              드레스업인형_춘식이
            </p>
            <StBasketIcon>장바구니 담기</StBasketIcon>
          </StFlexStrech>
          <p className="price">19,000원</p>
        </StCard>
        <StCard>
          <p className="rank">1</p>
          <StCardImage src={require("../amu.png")} />
          <StFlexStrech>
            <p className="card-title" mr="5px">
              드레스업인형_춘식이
            </p>
            <StBasketIcon>장바구니 담기</StBasketIcon>
          </StFlexStrech>
          <p className="price">19,000원</p>
        </StCard>
        <StCard>
          <p className="rank">1</p>
          <StCardImage src={require("../amu.png")} />
          <StFlexStrech>
            <p className="card-title" mr="5px">
              드레스업인형_춘식이
            </p>
            <StBasketIcon>장바구니 담기</StBasketIcon>
          </StFlexStrech>
          <p className="price">19,000원</p>
        </StCard>
        <StCard>
          <p className="rank">1</p>
          <StCardImage src={require("../amu.png")} />
          <StFlexStrech>
            <p className="card-title" mr="5px">
              드레스업인형_춘식이
            </p>
            <StBasketIcon>장바구니 담기</StBasketIcon>
          </StFlexStrech>
          <p className="price">19,000원</p>
        </StCard>
      </StCards>
    </StContainer>
  );
};

export default BestPage;

//그리드로 해보자
const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .popular {
    font-size: 20px;
    font-weight: bold;

    margin: 40px 4px;
  }
`;

const StPopular = styled.div`
  display: flex;
  align-items: center;
`;

const StCards = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  :nth-of-type(2n) {
    margin-right: 10px;
  }
`;

const StCardImage = styled.img`
  min-width: 100px;
  width: 100%;
`;

const StFlexStrech = styled.div`
  color: #747475;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StCard = styled.div`
  position: relative;
  background-color: yellow;
  border-radius: 5px;
  width: 300px;
  height: 300px;

  margin: 0 0 80px 10px;

  .rank {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 5px;
    background-color: #222;
    position: absolute;
    color: white;

    top: -5px;
    left: 10px;
  }

  .price {
    font-weight: bold;
    margin: 5px 0;
  }

  .card-title {
    margin: 5px 0 0;
  }
`;

const StBasketIcon = styled.span`
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
  background-position: ${(prop) => prop.bgPosition || "-280px -220px"};

  cursor: pointer;
`;
