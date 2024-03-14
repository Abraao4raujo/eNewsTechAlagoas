import styled from "styled-components";

const Main = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
`;

const N1N2Main = styled.div`
  height: auto;
  width: 943px;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
`;

const N1 = styled.div`
  width: 530px;
  height: 430px;
  display: flex;
  align-items: flex-end;
  justify-content: start;
  font-size: 23px;
  position: relative;
  border-radius: 8px;
  cursor: pointer;
`;

const LabelNs = styled.label`
  margin: 0px 15px 20px 15px;
  color: #fff;
  font-family: "Inter", sans-serif;

  position: absolute;
  z-index: 1;
`;

const N2 = styled.div`
  width: 380px;
  height: 210px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 16px;
  position: relative;
  cursor: pointer;
`;

const N2Little = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 430px;
  justify-content: space-between;
  align-items: flex-end;
`;

const BgLinearGradient = styled.div`
  background: linear-gradient(rgb(255 255 255 / 0%), rgb(20 20 20 / 40%));
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 8px;
`;

const ImgNews = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const MainNews = () => {
  return (
    <Main>
      <N1N2Main>
        <N1>
          <ImgNews
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt=""
          />
          <LabelNs>TITULO DA NOTICIA</LabelNs>
          <BgLinearGradient />
        </N1>
        <N2Little>
          <N2>
            <ImgNews
              src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
              alt=""
            />
            <LabelNs>TITULO DA NOTICIA</LabelNs>

            <BgLinearGradient />
          </N2>
          <N2>
            <ImgNews
              src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              alt=""
            />
            <LabelNs>TITULO DA NOTICIA</LabelNs>
            <BgLinearGradient />
          </N2>
        </N2Little>
      </N1N2Main>
    </Main>
  );
};

export default MainNews;
