import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import BestPage from "./pages/BestPage";
// import CharacterPage from "./pages/CharacterPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<BestPage />}></Route>
      <Route path="/" element={<Test />}></Route>
      {/* <Route path="/guan" element={<CharacterPage />}></Route> */}
    </Routes>
  );
}

export default App;
