import ContainerNoticiasPequenas from "./ContainerNoticiasPequenas";
import "./PageNews.css";

const PageNews = ({ urlImage, auth, data_posted, desc, title }) => {
  return (
    <div>
      <div className="container">
        <div className="assunto">
          <div className="conteudo-img">
            <label style={{ fontSize: "1rem", color: "black" }}>
              Noticias {">"} {title}
            </label>
            <img src={urlImage} alt="url imagem" />
            <div className="labels">
              <label>{auth}</label>
              <label>{data_posted}</label>
            </div>
            <p>{desc}</p>
          </div>
          <div className="titulo-conteudo">
            <h1>{title}</h1>
            <ContainerNoticiasPequenas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNews;
