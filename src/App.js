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

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //페이지 이동 시마다 url을 저장
  useEffect(() => {
    dispatch(getRoutes(location));
  }, [location]);

  //"/"로 진입 시 "/home"으로 리다이렉트
  const nowRoute = useSelector((state) => state.routes.route.pathname);
  useEffect(() => {
    if (nowRoute === "/") {
      navigate("/home");
    }
  }, [nowRoute]);
  return (
    <Layout>
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/best" element={<BestPage />} />
        <Route path="/profile" element={<CharacterPage />} />
        <Route path="/products" element={<ProductsPage />} />

        <Route path="/*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
