/* eslint-disable react/prop-types */
const ContainerNewsBig = ({ title, desc, url, auth, data }) => {
  return (
    <div>
      <div className="container-big-simple">
        <a href="./noticias/ultimas/hospital.html" id="noticia">
          <h2>{title}</h2>
          <label>{desc}</label>
          <img src={url} alt="imagem-noticia" />
          <div className="inf-about-author">
            <label>{auth}</label>
            <label>{data}</label>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContainerNewsBig;
