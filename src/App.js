import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Test />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
