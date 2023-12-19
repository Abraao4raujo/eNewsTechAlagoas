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
      <ul className="row-news-emphasis">
        {news.map(({ id, path, title, img, desc }) => (
          <li className="newEmphasis" key={id}>
            <a href={path}>
              <img src={img} alt={title} />
              <div className="captionImg">
                <h3>{title}</h3> <label>{desc}</label>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default EmphasisNews;
