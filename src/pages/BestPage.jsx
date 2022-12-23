import React from "react";
import styled from "styled-components";

const BestPage = () => {
  return (
    <StContainer>
      <div>hihi</div>

      {/* //map돌리기 */}
      <StCards>
        <StCard>
          <StCardImage style={{ width: "100%" }} src={require("../amu.png")} />
          <StFlexStrech>
            <StCardTextMargin mr="5px">드레스업인형_춘식이</StCardTextMargin>
            <StBasketIcon>장바구니 담기</StBasketIcon>
          </StFlexStrech>
          <StCardTextMargin>19,000원</StCardTextMargin>
        </StCard>
        <StCard>
          <StCardImage style={{ width: "100%" }} src={require("../amu.png")} />
          <StFlexStrech>
            <StCardTextMargin mr="5px">드레스업인형_춘식이</StCardTextMargin>
            <StBasketIcon>장바구니 담기</StBasketIcon>
          </StFlexStrech>
          <StCardTextMargin>19,000원</StCardTextMargin>
        </StCard>
      </StCards>
    </StContainer>
  );
};

export default BestPage;

const StContainer = styled.div`
  width: 100%;
`;

const StCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const StCardImage = styled.img`
  width: 100%;
`;

const StCardTextMargin = styled.p`
  margin: ${(prop) => prop.mr || 0} 0 ${(prop) => prop.mr || 0} 0;
`;

const StFlexStrech = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StCard = styled.div`
  background-color: yellow;
  border-radius: 5px;
  width: 300px;
  height: 300px;

  margin-bottom: 80px;
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
  background-position: -280px -220px;
`;
