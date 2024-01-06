import conteudoNoticiasGrandes from "./noticiasGrandes.json";
import conteudoNoticiasPequenas from "./noticiasPequenas.json";
import styled from "styled-components";

const SectionTitle = styled.div`
  display: inline-block;
  font-family: sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 30px;
`;
const LinkNews = styled.a`
  color: #333;
`;

const ListsNews = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const List = styled.li`
  list-style: none;
`;
const Container = styled.div``;
const LinkContainerMaior = styled.a`
  background-color: #fff;
  border: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  width: 400px;
  max-height: 409px;
  padding: 25px;
  text-decoration: none;
`;
const H2ContainerMaior = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin-bottom: 15px;
  color: #444;
`;

const Label = styled.label`
  margin-bottom: 25px;
  font-size: 0.9rem;
  text-decoration: none;
  color: #444;
`;

const ImgContainerMaior = styled.img`
  width: 100%;
  min-height: 100%;
  object-fit: cover;
`;

const InfAuth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #444;
`;

const LinkNoticiasPequenas = styled.a`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border: 1px solid #eaeaea;
  width: 100%;
  height: 102px;
  padding: 25px;
  max-width: 400px;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #444;
`;
const H2NoticiasPequenas = styled.h2`
  font-size: 1rem;
  width: 241px;
`;
const ImgNoticiasPequenas = styled.img`
  width: auto;
  max-height: 89px;
  object-fit: cover;
`;
const DivImgLabel = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  height: 92px;
  object-fit: cover;
  width: 131px;
`;

const ContainerNoticias = () => {
  return (
    <div>
      <SectionTitle>
        <LinkNews href="./UltimasNoticias">
          <H2ContainerMaior>Ultimas Notícias</H2ContainerMaior>
        </LinkNews>
      </SectionTitle>

      {conteudoNoticiasGrandes.map((item) => (
        <ListsNews key={item.id}>
          <List>
            <Container>
              <LinkContainerMaior href="#" id="noticia">
                <H2ContainerMaior>{item.title}</H2ContainerMaior>
                <Label>{item.desc}</Label>
                <ImgContainerMaior src={item.url} alt="imagem-noticia" />
                <InfAuth>
                  <Label>{item.auth}</Label>
                  <Label>{item.data}</Label>
                </InfAuth>
              </LinkContainerMaior>
            </Container>
          </List>
          <Container>
            {conteudoNoticiasPequenas.map(({ id, path, title, url, data }) => (
              <List key={id}>
                <Container>
                  <LinkNoticiasPequenas href={path}>
                    <H2NoticiasPequenas>{title}</H2NoticiasPequenas>
                    <DivImgLabel>
                      <ImgNoticiasPequenas src={url} alt="imageNews" />
                      <Label>{data}</Label>
                    </DivImgLabel>
                  </LinkNoticiasPequenas>
                </Container>
              </List>
            ))}
          </Container>
        </ListsNews>
      ))}
    </div>
  );
};

export default ContainerNoticias;
