import styled from "styled-components";

const ListsNoticiasDestaques = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  background-color: #d9d9d9;
`;
const ListNoticiaDestaque = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
  margin: 25px 0px;
  &:hover .captionImg {
    transition: ease-in 1s;
    color: #fff;
    height: 100%;
    width: 100%;
    background-color: #0a00009c;
  }
`;
const ImgNoticiaDestaque = styled.img`
  max-height: 300px;
  max-width: 400px;
  height: 300px;
`;
const LinkNoticiaDestaque = styled.a`
  width: 400px;
`;
const H3NoticiaDestaque = styled.h3`
  font-size: 1rem;
  width: 95%;
  margin-bottom: 1rem;
  margin-top: 8px;
`;
const LegendaNoticiaDestaque = styled.div`
  position: absolute;
  bottom: 5px;
  background-color: #0a000036;
  color: #fff;
  height: 50px;
  align-items: center;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const EmphasisNews = () => {
  const news = [
    {
      id: 1,
      path: "./noticias/entretenimento/",
      title:
        "Jogos Vorazes: A Cantiga dos Pássaros e das Serpentes é a grande estreia da semana",
      img: "https://www.tnh1.com.br/fileadmin/_processed_/6/1/csm_cinema-jogos-vorazes-divulgacao_2ba9ac1b24.jpg",
      desc: "Atenção, fãs da franquia Jogos Vorazes! Quase dez anos após o lançamento do último filme, a saga distópica adolescente está de volta aos cinemas com A Cantiga dos Pássaros e das Serpentes, adaptação do livro homônimo lançado em 2020 por Suzanne Collins - a mesma autora da trilogia inicial.",
    },
    {
      id: 2,
      path: "./noticias/entretenimento/institucional.html",
      img: "https://img.tribunahoje.com/3DISa1fjLkS79ux8Gs7Lz_seEpY=/840x520/smart/s3.tribunahoje.com/uploads/imagens/8q2b9700-1.jpg",
      title:
        "Jogos Vorazes: A Cantiga dos Pássaros e das Serpentes é a grande estreia da semana",
      desc: "Quando criança, Jorge de Lima costumava contemplar a Serra da Barriga da porta de casa. Impedido de explorar o lugar devido à asma, o menino se contentava com as lendas que as tias lhe contavam sobre o Quilombo dos Palmares. Muitos anos depois, a memória afetiva do poeta resgataria toda a simbologia do berço de Zumbi dos Palmares em Serra da Barriga – “Aqui não há cangas, nem troncos, nem banzos”.",
    },
    {
      id: 3,
      path: "./noticias/esportes/csa.html",
      img: "https://s2-ge.glbimg.com/LWlvDrxnd8d5DsUrilCo3GFHtiA=/1200x/smart/filters:cover():strip_icc()/s03.video.glbimg.com/x720/12039874.jpg",
      title:
        "Promovido ao profissional do CSA, goleiro Lucas comemora: Sonho de criança",
      desc: "O goleiro Lucas, campeão estadual sub-20 pelo CSA, vai integrar o elenco principal na próxima temporada. Promovido para a categoria profissional, o jovem vive a expectativa da realização de um sonho e conta que iniciou no futebol um pouco tarde.",
    },
  ];
  return (
    <div>
      <ListsNoticiasDestaques>
        {news.map(({ id, path, title, img, desc }) => (
          <ListNoticiaDestaque key={id}>
            <LinkNoticiaDestaque href={path}>
              <ImgNoticiaDestaque src={img} alt={title} />
              <LegendaNoticiaDestaque className="captionImg">
                <H3NoticiaDestaque>{title}</H3NoticiaDestaque>
                <label>{desc}</label>
              </LegendaNoticiaDestaque>
            </LinkNoticiaDestaque>
          </ListNoticiaDestaque>
        ))}
      </ListsNoticiasDestaques>
    </div>
  );
};
export default EmphasisNews;
