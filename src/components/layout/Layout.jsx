import styled from "styled-components";

const Layout = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

const LayoutStyled = styled.div`
  max-width: 640px;
  min-width: 320px;
  margin: 0 auto;
`;

export default Layout;
