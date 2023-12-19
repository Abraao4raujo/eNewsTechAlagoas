/* eslint-disable react/prop-types */
const ContainerNewsLittle = ({ urlNews, title, url_image, data_posted }) => {
  return (
    <li key={title}>
      <div className="container-little-new">
        <a href={urlNews}>
          <h2>{title}</h2>
          <div className="img-desc-label">
            <img src={url_image} alt="imageNews" />
            <label>{data_posted}</label>
          </div>
        </a>
      </div>
    </li>
  );
};

export default ContainerNewsLittle;
