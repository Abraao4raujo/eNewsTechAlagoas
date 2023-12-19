import ContainerNewsComplete from "./ContainerNewsComplete";

const MainNews = () => {
  return (
    <div>
      <div className="main-news">
        <ContainerNewsComplete
          urlSectionBlock="./ultimasNoticias"
          titleContainerNews="Ultimas Notícias"
          tituloNoticaPrincial="Centenas de pessoas deixam o hospital Al-Shifa, o maior de
                  Gaza"
          descNoticiaPrincipal="Mortes no conflito chegam a 13.702 - 1.402 do lado israelense
                  e 12.300 na Faixa de Gaza, segundo o governo do Hamas (os
                  números não puderam ser verificados de forma
                  independente)."
          urlNoticiaPrincipal="https://s2.glbimg.com/oTkQ16QYDDg71y9L62XRtbCimyQ=/0x0:1600x1200/1080x0/smart/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/D/l/sitGcSRRS1rx9AWeKz7g/2023-11-15t091244z-19959778-rc2ld4ao7r39-rtrmadp-3-israel-palestinians.jpg"
          authNoticiaPrincipal="Abraham Lincoln"
          dataNoticiaPrincipal="03/10/23"
          urlMenor="./noticias/ultimas/chuvas.html"
          titleMenor="Chuvas com ventos fortes derrubam árvores e estruturas em
                      cidades de SP"
          dataMenor="03/10/23"
          urlImageMenor="https://conteudo.imguol.com.br/c/noticias/91/2023/11/18/fortes-chuvas-atingiram-paraguacu-paulista-1700355278260_v2_750x421.jpg.webp"
          segundaUrlMenor="./noticias/ultimas/eleicoes.html"
          segundoTitleMenor="Eleições Argentina 2023"
          segundoDataMenor="03/10/23"
          segundoUrlImageMenor="https://exame.com/_next/image/?url=https%3A%2F%2Fclassic.exame.com%2Fwp-content%2Fuploads%2F2023%2F08%2FArgentinaFMI.jpg%3Fquality%3D70%26strip%3Dinfo&w=1920&q=75"
          terceiroUrlMenor="./noticias/ultimas/agro.html"
          terceiroTitleMenor="Agro paulista registra superávit de US$ 18,59 bilhões em
                      10 meses"
          terceiroDataMenor="03/10/23"
          terceiroUrlImageMenor="https://www.cati.sp.gov.br/portal/themes/unify/img/noticias/13386-balanca.-ovk.jpg"
        />
      </div>
    </div>
  );
};

export default MainNews;
