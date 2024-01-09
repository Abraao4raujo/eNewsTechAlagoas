  import Header from "../Components/Header";
import styled from "styled-components";

const ImgNews = styled.img`
  width: 220px;
  height: 130px;
`;

const ListsNews = styled.ul`
  cursor: pointer;
`;
const ListNews = styled.li`
  display: flex;
  margin: 15px;
`;

const TitleNews = styled.h3`
  color: #333;
  font-size: 1.2rem;
  display: inline;
`;

const DivDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const LabelNews = styled.label`
  color: #333;
  width: 70%;
`;

const TopicNews = () => {
  return (
    <div>
      <Header />
      <ListsNews>
        <ListNews>
          <ImgNews
            src="https://www.bottega7.com/media/filer_public_thumbnails/filer_public/f5/98/f5986e4f-b733-4ab8-aa3b-0d474d257464/copertina_img-theme-park_v2.jpg__1200x700_q100_crop_subsampling-2_upscale.jpg"
            alt=""
          />
          <DivDesc>
            <TitleNews>Noticia titulo</TitleNews>
            <LabelNews htmlFor="news-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus, excepturi. Iure laboriosam sapiente architecto corporis
              nemo. Eligendi sint officiis ratione eveniet vero magni, iure at.
              Recusandae explicabo earum aliquam veritatis.
            </LabelNews>
          </DivDesc>
        </ListNews>
      </ListsNews>
    </div>
  );
};

export default TopicNews;
