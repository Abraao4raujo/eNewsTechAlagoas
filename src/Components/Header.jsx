import styled from "styled-components";

const HeaderHead = styled.header`
  background-color: #00893c;
  display: flex;
  justify-content: space-around;
  padding: 5px;
  align-items: center;
`;

const Link = styled.a`
  color: #fff;
  font-weight: bold;
  float: none;
  margin: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
`;

const NavHeader = styled.header`
  display: flex;
`;

const NameLogoHeader = styled.h2`
  font-size: 32px;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  color: #fff;
`;

const Header = () => {
  return (
    <HeaderHead>
      <NameLogoHeader>eNewsTech</NameLogoHeader>
      <NavHeader>
        <Link href="/noticias">NOTICIAS</Link>
        <Link href="/cultura">CULTURA</Link>
        <Link href="/eventos">EVENTOS</Link>
        <Link href="/contato">CONTATO</Link>
      </NavHeader>
    </HeaderHead>
  );
};

export default Header;
