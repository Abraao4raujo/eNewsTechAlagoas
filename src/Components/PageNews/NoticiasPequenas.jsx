import noticiasRecomendadas from "./recomendarNoticias";
import "./PageNews.css";
const NoticiasPequenas = () => {
  return (
    <div>
      {noticiasRecomendadas.map((item) => (
        <div className="noticias-pequenas" key={item.id}>
          <img src={item.url} alt="noticias-pequenas" />
          <div className="tituPara">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <label>Ver mais</label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoticiasPequenas;
