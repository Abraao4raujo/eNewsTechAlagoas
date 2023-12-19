/* eslint-disable react/prop-types */
const NoticiasPequenas = ({ url, title, desc }) => {
  return (
    <div>
      <div className="noticias-pequenas">
        <img src={url} alt="noticias-pequenas" />
        <div className="tituPara">
          <h3>{title}</h3>
          <p>{desc}</p>
          <label>Ver mais</label>
        </div>
      </div>
    </div>
  );
};

export default NoticiasPequenas;
