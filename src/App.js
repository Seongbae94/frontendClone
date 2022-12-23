import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import BestPage from "./pages/BestPage";
import CharacterPage from "./pages/CharacterPage";
import OrderHistory from "./pages/OrderHistory";
import MyPageLayout from "./components/layout/MyPageLayout";
import Orderbasket from "./pages/Orderbasket";
function App() {
  return (
    <Routes>
      <Route path="/" element={<BestPage />}></Route>
      <Route path="/" element={<Test />}></Route>
      <Route path="/guan" element={<CharacterPage />}></Route>
      <Route
        path="/mypage/orderlist"
        element={
          <div>
            <MyPageLayout />
            <OrderHistory />
          </div>
        }
      ></Route>
      <Route
        path="/mypage/basket"
        element={
          <div>
            <MyPageLayout />
            <Orderbasket />
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
