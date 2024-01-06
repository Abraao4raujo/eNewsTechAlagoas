import styled from "styled-components";

const DivSubHeader = styled.div`
  background-color: #00893c;
  display: grid;
  grid-template-columns: 3fr;
  height: 55px;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  /* background-color: #d9d9d9; */
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;

const ItemList = styled.li`
  font-size: 18px;
  font-family: "Outfit", sans-serif;
  cursor: pointer;
  display: flex;
`;

const Link = styled.a`
  margin-top: auto;
  margin-bottom: auto;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;

const SubHeader = () => {
  return (
    <DivSubHeader>
      <List>
        <ItemList>
          <Link href="#noticia">Temperatura</Link>
        </ItemList>
        <ItemList>
          <Link href="#maisLidas">Noticias Mais Lidas</Link>
        </ItemList>
      </List>
    </DivSubHeader>
  );
};

export default SubHeader;
