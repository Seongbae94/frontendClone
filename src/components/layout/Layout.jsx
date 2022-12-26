import styled from "styled-components";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ScrollUpBtn from "../scrollUpBtn/ScrollUpBtn";

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      {children}
      <Footer />
      <ScrollUpBtn />
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  max-width: 640px;
  min-width: 320px;
  margin: 87px auto 0;
`;

export default Layout;
