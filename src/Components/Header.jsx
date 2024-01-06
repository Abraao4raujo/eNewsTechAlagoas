import styled from "styled-components";
import Logo from "../../public/logo";
import { useState } from "react";

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: #d9d9d9;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;
const ItemList = styled.li`
  margin-right: 25px;
  font-size: 18px;
  font-family: "Outfit", sans-serif;
  cursor: pointer;
`;
const ItemListJornalist = styled.li`
  display: none;
`;
const Link = styled.a`
  text-decoration: none;
  color: #000;
  float: none;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
`;
const DivLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 28px;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  cursor: pointer;
`;
const TitleLogo = styled.label`
  color: #00893c;
  cursor: pointer;
`;
const Navigation = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 70px;
  text-align: center;
  overflow: hidden;
`;
const Button = styled.button`
  margin-right: 25px;
  font-size: 18px;
  font-family: "Outfit", sans-serif;
  cursor: pointer;
  border: none;
  outline: none;
  font-family: inherit;
  margin: 0;
  background: none;
`;
const TituloT3 = styled.h3`
  font-size: 1.2rem;
  display: none;
  flex-direction: column;
`;
const LabelDestaque = styled.h3`
  color: #00893c;
  display: none;
  flex-direction: column;
`;
const DropDownContent = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
const DropDown = styled.div``;
const DivLogoTitle = styled.div`
  display: flex;
  align-items: center;
`;
const BtnSearch = styled.button`
  padding: 10px 25px;
  background-color: #00893c;
  font-family: "Roboto Mono", monospace;
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
`;

const Header = () => {
  const [showDropDownContent, setShowDropDownContent] = useState(false);

  return (
    <div>
      <nav>
        <List>
          <DivLogo>
            <Link href="./index.html">
              <DivLogoTitle>
                <Logo />
                <TitleLogo>eNewsTech</TitleLogo>
              </DivLogoTitle>
            </Link>
          </DivLogo>
          <Navigation>
            <ItemList>
              <DropDown>
                <Button
                  className="dropbtn"
                  onMouseOver={() => setShowDropDownContent(true)}
                  onMouseOut={() => setShowDropDownContent(false)}
                >
                  Notícias
                </Button>
                {showDropDownContent && (
                  <DropDownContent
                    onMouseOver={() => setShowDropDownContent(true)}
                    onMouseOut={() => setShowDropDownContent(false)}
                  >
                    <Link href="#noticia">Últimas</Link>
                    <Link href="#esportes">Esportes</Link>
                    <Link href="#entretenimento">Entretenimento</Link>
                  </DropDownContent>
                )}
              </DropDown>
            </ItemList>
            <ItemList>
              <Link href="#cultura">Cultura</Link>
            </ItemList>
            <ItemList>
              <Link href="#eventos">Eventos</Link>
            </ItemList>
            <ItemList>
              <Link href="#contato">Contato</Link>
            </ItemList>
            <ItemListJornalist>
              <Link>Tornar-se jornalista</Link>
            </ItemListJornalist>
            <ItemList>
              <Link>
                <BtnSearch
                  type="button"
                  value="Login"
                  className="btnSearch"
                  id="botaoLogin"
                >
                  Login
                </BtnSearch>
              </Link>
            </ItemList>
            <ItemList className="bemvindo">
              <TituloT3>Seja bem-vindo</TituloT3>
              <LabelDestaque>Abraão</LabelDestaque>
            </ItemList>
          </Navigation>
        </List>
      </nav>
    </div>
  );
};

export default Header;
