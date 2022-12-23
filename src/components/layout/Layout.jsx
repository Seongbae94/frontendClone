import styled from "styled-components";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      {children}
      <Footer />
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  max-width: 640px;
  min-width: 320px;
  margin: 0 auto;
`;

export default Layout;
