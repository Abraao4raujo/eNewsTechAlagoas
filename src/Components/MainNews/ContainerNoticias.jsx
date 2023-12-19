import conteudoNoticiasGrandes from "./noticiasGrandes.json";
import conteudoNoticiasPequenas from "./noticiasPequenas.json";
const ContainerNoticias = () => {
  return (
    <div className="main-news">
      <div className="section-block-title">
        <a href="ultimasNoticias">
          <span>Ultimas Notícias</span>
        </a>
      </div>
      {conteudoNoticiasGrandes.map((item) => (
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

export default ContainerNoticias;
