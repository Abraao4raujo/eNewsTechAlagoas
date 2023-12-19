// import NewsComplete from "./ContainerNewsComplete";

const MainNews = () => {
  const conteudoContainerNoticias = [
    {
      id: 0,
      title: "Centenas de pessoas deixam o hospital Al-Shifa, o maior de Gaza",
      desc: "Mortes no conflito chegam a 13.702 - 1.402 do lado israelense e 12.300 na Faixa de Gaza, segundo o governo do Hamas (os números não puderam ser verificados de forma independente).",
      url: "https://s2.glbimg.com/oTkQ16QYDDg71y9L62XRtbCimyQ=/0x0:1600x1200/1080x0/smart/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/D/l/sitGcSRRS1rx9AWeKz7g/2023-11-15t091244z-19959778-rc2ld4ao7r39-rtrmadp-3-israel-palestinians.jpg",
      auth: "Abraham Lincoln",
      data: "03/10/23",
      pathMaisNoticias: "./ultimasNoticias",
    },
  ];
  const conteudoNoticiasPequenas = [
    {
      id: 1,
      path: "./noticias/ultimas/chuvas.html",
      title:
        "Chuvas com ventos fortes derrubam árvores e estruturas em cidades de SP",
      data: "03/10/23",
      url: "https://conteudo.imguol.com.br/c/noticias/91/2023/11/18/fortes-chuvas-atingiram-paraguacu-paulista-1700355278260_v2_750x421.jpg.webp",
    },
    {
      id: 2,
      path: "./noticias/ultimas/eleicoes.html",
      title: "Eleições Argentina 2023",
      data: "03/10/23",
      url: "https://exame.com/_next/image/?url=https%3A%2F%2Fclassic.exame.com%2Fwp-content%2Fuploads%2F2023%2F08%2FArgentinaFMI.jpg%3Fquality%3D70%26strip%3Dinfo&w=1920&q=75",
    },
    {
      id: 3,
      path: "./noticias/ultimas/agro.html",
      title:
        "Agro paulista registra superávit de US$ 18,59 bilhões em 10 meses",
      data: "03/10/23",
      url: "https://www.cati.sp.gov.br/portal/themes/unify/img/noticias/13386-balanca.-ovk.jpg",
    },
  ];

  return (
    <div className="main-news">
      <div className="section-block-title">
        <a href="ultimasNoticias">
          <span>Ultimas Notícias</span>
        </a>
      </div>
      {conteudoContainerNoticias.map((item) => (
        <ul className="container-noticias-completa" key={item.id}>
          <li>
            <div className="container-big-simple">
              <a href="./noticias/ultimas/hospital.html" id="noticia">
                <h2>{item.title}</h2>
                <label>{item.desc}</label>
                <img src={item.url} alt="imagem-noticia" />
                <div className="inf-about-author">
                  <label>{item.auth}</label>
                  <label>{item.data}</label>
                </div>
              </a>
            </div>
          </li>
          <div className="containers-de-grupos-pequenos">
            {conteudoNoticiasPequenas.map(({ id, path, title, url, data }) => (
              <li key={id}>
                <div className="container-little-new">
                  <a href={path}>
                    <h2>{title}</h2>
                    <div className="img-desc-label">
                      <img src={url} alt="imageNews" />
                      <label>{data}</label>
                    </div>
                  </a>
                </div>
              </li>
            ))}
          </div>
        </ul>
      ))}
    </div>
  );
};

export default MainNews;
