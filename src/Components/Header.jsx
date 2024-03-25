import styled from "styled-components";
import { logout } from "../services/logout";

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
const OptionAccount = styled.label`
  list-style: none;
  color: #fff;
  font-weight: bold;
  float: none;
  margin: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderHead>
      <Link href="/">
        <NameLogoHeader>eNewsTech</NameLogoHeader>
      </Link>

      <NavHeader>
        <Link href="/cultura">CULTURA</Link>
        <Link href="/eventos">EVENTOS</Link>
        <OptionAccount onClick={() => logout()}>DESLOGAR</OptionAccount>
      </NavHeader>
    </HeaderHead>
  );
};

export default Header;
