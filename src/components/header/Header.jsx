import { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [subActive, setSubActive] = useState(true);

  return (
    <Wrap>
      <Main>
        <div className="ico_set basket"></div>
        <div className="mainLogo"></div>
        <div className="Login">로그인</div>
      </Main>
      <Sub subActive={subActive}>
        <ul>
          <li className="Active">홈</li>
          <li>베스트</li>
          <li>캐릭터관</li>
          <li>마이</li>
        </ul>
      </Sub>
    </Wrap>
  );
};
const Wrap = styled.div`
  border-bottom: 1px solid #e3e5e8;
`;
const Main = styled.div`
  width: 100%;
  height: 46px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  .ico_set {
    width: 24px;
    height: 24px;
    background: url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/ico_friends.png")
      0 0 no-repeat;
    background-size: 700px 1000px;
    cursor: pointer;
    margin-left: 10px;
  }
  .ico_set.basket {
    background-position: -70px -810px;
  }
  .mainLogo {
    width: 167px;
    height: 100%;
    background-image: Url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/assets/images/m960/logo_christmas_2st.gif");
    background-size: cover;
    background-position: center;
  }
  .Login {
    cursor: pointer;
  }
`;
const Sub = styled.div`
  display: ${({ subActive }) => (subActive ? "block" : "none")};
  padding: 0 5px;
  height: 40px;
  width: 100%;
  ul {
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0;
    padding: 0;
  }
  li {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  li.Active {
    font-weight: 700;
    position: relative;
  }
  li.Active::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    border-top: 4px solid #000;
  }
`;

export default Header;
