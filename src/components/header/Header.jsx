import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { setLogin } from "../../redux/modules/userSlice";

const Nav = ({ title }) => {
  const navigate = useNavigate();

  const gotoPage = () => {
    switch (title) {
      case "홈":
        navigate("/home");
        break;
      case "베스트":
        navigate("/best");
        break;
      case "캐릭터관":
        navigate("/profile/1");
        break;
      case "마이":
        navigate("/mypage/basket");
        break;
    }
  };

  const nowRoute = useSelector((state) => state.routes.route.pathname);

  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    setActiveNav("");
    if (nowRoute) {
      if (nowRoute === "/home" && title === "홈") {
        setActiveNav("Active");
      }
      if (nowRoute === "/best" && title === "베스트") {
        setActiveNav("Active");
      }
      if (nowRoute.includes("/profile") && title === "캐릭터관") {
        setActiveNav("Active");
      }
      if (nowRoute.includes("/mypage") && title === "마이") {
        setActiveNav("Active");
      }
    }
  }, [nowRoute]);

  return (
    <li className={activeNav} onClick={gotoPage}>
      {title}
    </li>
  );
};

const Header = () => {
  const [subActive, setSubActive] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nowRoute = useSelector((state) => state.routes.route.pathname);
  const isLogined = useSelector((state) => state.user.login);

  useEffect(() => {
    if (nowRoute) {
      if (nowRoute.includes("/products")) {
        setSubActive(false);
      } else {
        setSubActive(true);
      }
    }
  }, [nowRoute]);

  const gotoMain = () => {
    navigate("/home");
  };
  const gotoBasket = () => {
    navigate("/mypage/basket");
  };

  const redirectUrl = process.env.REACT_APP_REDIRECT_URL;
  const clientId = process.env.REACT_APP_CLIENT_ID;

  const socialLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}`;
  };

  const socialLogout = () => {
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("username");
    localStorage.removeItem("refreshtoken");
    dispatch(setLogin(false));
  };

  return (
    <>
      <Wrap>
        <Main>
          <div className="ico_set basket" onClick={gotoBasket}></div>

          <div className="mainLogo" onClick={gotoMain}></div>

          {isLogined ? (
            <div className="userInfo">
              <div className="helloComment">
                <span>{localStorage.getItem("username")}</span>님, 환영합니다!
              </div>
              <div className="LoginAndOut" onClick={socialLogout}>
                로그아웃
              </div>
            </div>
          ) : (
            <div className="userInfo">
              <div className="LoginAndOut" onClick={socialLogin}>
                로그인
              </div>
            </div>
          )}
        </Main>
        <Sub subActive={subActive}>
          <ul>
            <Nav title="홈" />
            <Nav title="베스트" />
            <Nav title="캐릭터관" />
            <Nav title="마이" />
          </ul>
        </Sub>
      </Wrap>
    </>
  );
};
const Wrap = styled.div`
  border-bottom: 1px solid #e3e5e8;
  background-color: white;
  position: fixed;
  width: 640px;
  min-width: 320px;
  left: 50%;
  top: 0;
  z-index: 1000;
  transform: translateX(-50%);
`;
const Main = styled.div`
  width: 100%;
  height: 46px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .ico_set {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
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
    cursor: pointer;
    justify-items: center;
  }
  .LoginAndOut {
    cursor: pointer;
  }
  .userInfo {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
  }
  .helloComment {
    margin-right: 10px;
  }
  .helloComment span {
    text-decoration: underline;
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
