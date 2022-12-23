import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import BestPage from "./pages/BestPage";
import HomePage from "./pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRoutes } from "./redux/modules/routeSlice";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoutes(location));
  }, [location]);
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/" element={<BestPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
