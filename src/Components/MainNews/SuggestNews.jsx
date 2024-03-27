import styled from "styled-components";

const MainNews = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const DivSuggestNews = styled.div`
  height: 170px;
  width: 924px;
`;

const SuggestN1 = styled.div`
  display: flex;
  flex-direction: row;
`;
const DivInfNews = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 65%;
`;

const ImgNews = styled.img`
  width: 33%;
  max-height: 170px;
  border-radius: 8px;
  cursor: pointer;
`;

const TitleN1 = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

const LabelNews = styled.label`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  cursor: pointer;
`;
const LabelInfNews = styled.label`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  color: #00000057;
  font-weight: bold;
`;

const SuggestNews = ({ urlImage, title, desc, dataPosted }) => {
  return (
    <MainNews>
      <DivSuggestNews>
        <SuggestN1>
          <ImgNews src={urlImage} alt="" />
          <DivInfNews>
            <TitleN1>{title}</TitleN1>
            <LabelNews>{desc}</LabelNews>
            <LabelInfNews>{dataPosted}</LabelInfNews>
          </DivInfNews>
        </SuggestN1>
      </DivSuggestNews>
    </MainNews>
  );
};

export default SuggestNews;
