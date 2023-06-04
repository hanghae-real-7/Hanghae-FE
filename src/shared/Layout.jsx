import styled from 'styled-components';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

const Content = styled.div`
  padding-top: 55px;
  padding-bottom: 70px;
  height: 100%;
`;

export default Layout;
