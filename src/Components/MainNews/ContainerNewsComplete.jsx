/* eslint-disable react/prop-types */
import ContainerNewsBig from "./ContainerNewsBig";
import ContainerNewsLittle from "./ContainerNewsLittle";
import SectionBlock from "./SectionBlock";
import "../../App.css";

const ContainerNewsComplete = ({
  urlSectionBlock,
  titleContainerNews,
  tituloNoticaPrincial,
  descNoticiaPrincipal,
  urlNoticiaPrincipal,
  authNoticiaPrincipal,
  dataNoticiaPrincipal,
  urlMenor,
  titleMenor,
  dataMenor,
  urlImageMenor,
  segundaUrlMenor,
  segundoTitleMenor,
  segundoDataMenor,
  segundoUrlImageMenor,
  terceiroUrlMenor,
  terceiroTitleMenor,
  terceiroDataMenor,
  terceiroUrlImageMenor,
}) => {
  return (
    <>
      <SectionBlock url={urlSectionBlock} titleNews={titleContainerNews} />
      <div>
        <div className="container-completo" style={{ height: "460px" }}>
          <ul className="news-column">
            <li>
              <ContainerNewsBig
                title={tituloNoticaPrincial}
                desc={descNoticiaPrincipal}
                url={urlNoticiaPrincipal}
                auth={authNoticiaPrincipal}
                data={dataNoticiaPrincipal}
              />
            </li>

            <div className="containers-de-grupos-pequenos">
              <ul>
                <ContainerNewsLittle
                  urlNews={urlMenor}
                  title={titleMenor}
                  url_image={urlImageMenor}
                  data_posted={dataMenor}
                />
                <ContainerNewsLittle
                  urlNews={segundaUrlMenor}
                  title={segundoTitleMenor}
                  url_image={segundoUrlImageMenor}
                  data_posted={segundoDataMenor}
                />
                <ContainerNewsLittle
                  urlNews={terceiroUrlMenor}
                  title={terceiroTitleMenor}
                  url_image={terceiroUrlImageMenor}
                  data_posted={terceiroDataMenor}
                />
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContainerNewsComplete;
