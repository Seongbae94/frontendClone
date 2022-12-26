import { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollUpBtn = () => {
  const [nowScroll, setNowScroll] = useState(0);

  const [btnActive, setBtnActive] = useState(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNowScroll(window.scrollY);
    });
    if (nowScroll > 1000) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
    return () => {
      window.removeEventListener("scroll", () => {
        setNowScroll(window.scrollY);
      });
    };
  }, [nowScroll]);

  return (
    <BtnWrap onClick={scrollUp} btnActive={btnActive}>
      <div className="btnImg"></div>
    </BtnWrap>
  );
};

const BtnWrap = styled.div`
  display: ${({ btnActive }) => (btnActive ? "flex" : "none")};
  position: fixed;
  right: calc(50% - 290px);
  bottom: 30px;
  width: 56px;
  height: 56px;
  border: 1px solid #eff0f2;
  border-radius: 50%;
  background-color: #fff;
  z-index: 100;
  box-shadow: 1px 1px 5px rgb(0 0 0 / 10%);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .btnImg {
    width: 32px;
    height: 32px;
    background-image: url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/ico_friends.png");
    background-size: 700px 1000px;
    background-position: -230px -320px;
  }
`;

export default ScrollUpBtn;
