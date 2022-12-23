import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import BestPage from "./pages/BestPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<BestPage />}></Route>
      <Route path="/" element={<Test />}></Route>
    </Routes>
  );
}

export default App;
