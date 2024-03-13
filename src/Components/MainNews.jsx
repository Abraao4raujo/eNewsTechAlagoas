import styled from "styled-components";

const Main = styled.div`
  background-color: green;
  height: 500px;
  display: flex;
  align-items: center;
`;
const N1N2Main = styled.div`
  height: auto;
  width: 906px;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
`;

const N1 = styled.div`
  background-color: blue;
  width: 500px;
  height: 430px;
`;

const N2 = styled.div`
  background-color: blue;
  width: 380px;
  height: 210px;
  display: flex;
  align-items: center;
`;

const N2Little = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 430px;
  justify-content: space-between;
  align-items: flex-end;
`;

const MainNews = () => {
  return (
    <Main>
      <N1N2Main>
        <N1>
          <label>TITULO DA NOTICIA</label>
        </N1>
        <N2Little>
          <N2>
            <label>TITULO DA NOTICIA</label>
          </N2>
          <N2>
            <label>TITULO DA NOTICIA</label>
          </N2>
        </N2Little>
      </N1N2Main>
    </Main>
  );
};
export default MainNews;
