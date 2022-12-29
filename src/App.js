import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Layout from "./components/layout/Layout";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoutes } from "./redux/modules/routeSlice";

import BestPage from "./pages/BestPage";
import HomePage from "./pages/Home";
import CharacterPage from "./pages/CharacterPage";
import ProductsPage from "./pages/ProductsPage";

import OrderHistory from "./pages/OrderHistory";
import MyPageLayout from "./components/layout/MyPageLayout";
import Orderbasket from "./pages/Orderbasket";
import CharacterPageSub from "./pages/CharacterPageSub";
import axios from "axios";
import { setLogin } from "./redux/modules/userSlice";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //페이지 이동 시마다 url을 저장
  useEffect(() => {
    dispatch(getRoutes(location));
  }, [location]);

  const nowRoute = useSelector((state) => state.routes.route.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    //"/"로 진입 시 "/home"으로 리다이렉트
    if (nowRoute === "/") {
      navigate("/home");
    }

    //"/login"일 경우
    if (nowRoute === "/login") {
      // 인가 코드 받기
      const code = location.search.split("code=")[1];

      //코드를 api에 전달
      (async () => {
        try {
          const data = await axios.get(
            `${process.env.REACT_APP_URL}/api/login/kakao?codetype=${process.env.NODE_ENV}&code=${code}`
          );

          localStorage.setItem("accesstoken", data.headers.accesstoken);
          localStorage.setItem("refreshtoken", data.headers.refreshtoken);
          localStorage.setItem("username", data.data.name);

          dispatch(setLogin(true));

          navigate("/home");
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [nowRoute]);

  useEffect(() => {
    if (localStorage.getItem("refreshtoken")) {
      dispatch(setLogin(true));
    } else {
      dispatch(setLogin(false));
    }
  }, [nowRoute]);
  // ----------------------------------------------------------
  return (
    <Layout>
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/best" element={<BestPage />} />
        <Route exact path="/profile" element={<CharacterPageSub />} />
        <Route path="/profile/:id" element={<CharacterPage />} />
        <Route path="/products/:id" element={<ProductsPage />} />
        <Route
          path="/mypage/orderlist"
          element={
            <div>
              <MyPageLayout />
              <OrderHistory />
            </div>
          }
        />
        <Route
          path="/mypage/basket"
          element={
            <div>
              <MyPageLayout />
              <Orderbasket />
            </div>
          }
        />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
