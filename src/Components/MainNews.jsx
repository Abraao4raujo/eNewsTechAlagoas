import styled from "styled-components";
import SuggestNews from "./MainNews/SuggestNews";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Login from "../Modals/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
  font-weight: bold;
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

const MainNews = ({ n1 }) => {
  const [news, setNews] = useState([]);
  const [modalAuth, setModalAuth] = useState({ show: true, auth: "login" });

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setModalAuth(false);
    }
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/getNews")
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Main>
        <N1N2Main>
          {news && news.length > 0 && (
            <Link to={`/News/${news[0]._id}`}>
              <N1>
                <ImgNews src={news[0].image_url} />
                <LabelNs>{news[0].title}</LabelNs>
                <BgLinearGradient />
              </N1>
            </Link>
          )}

          {news && news.length > 0 && (
            <N2Little>
              <Link to={`/news/${news[1]._id}`}>
                <N2>
                  <ImgNews src={news[1].image_url} />
                  <LabelNs>{news[1].title}</LabelNs>
                  <BgLinearGradient />
                </N2>
              </Link>
              <Link to={`/news/${news[2]._id}`}>
                <N2>
                  <ImgNews src={news[2].image_url} />
                  <LabelNs>{news[2].title}</LabelNs>
                  <BgLinearGradient />
                </N2>
              </Link>
            </N2Little>
          )}
        </N1N2Main>
      </Main>
      {news &&
        news.slice(3).map((newsData, index) => (
          <Link to={`/news/${newsData._id}`} key={index}>
            <SuggestNews
              urlImage={newsData.image_url}
              title={newsData.title}
              desc={newsData.desc}
              dataPosted={newsData.data}
            />
          </Link>
        ))}
      {modalAuth.show == true && modalAuth.auth == "login" && (
        <Login
          title="Login"
          setModalAuth={setModalAuth}
          modalAuth={modalAuth}
        />
      )}
      {modalAuth.show == true && modalAuth.auth == "cadastro" && (
        <Login
          title="Cadastro"
          setModalAuth={setModalAuth}
          modalAuth={modalAuth}
        />
      )}
    </>
  );
};

export default MainNews;
