import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px 20px;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 550px;
  height: auto;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const BackLink = styled.label`
  font-size: 16px;
  color: blue;
  text-decoration: none;
  cursor: pointer;
`;

const Loading = styled.p`
  font-size: 18px;
`;

const DivNews = styled.div`
  align-items: center;
  display: flex;
  width: 50%;
  flex-direction: column;
`;

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/News/${id}`)
        .then((response) => {
          setNews(response.data);
        })
        .catch((error) => error);
    }
  }, [id]);

  return (
    <Container>
      <DivNews>
        {news ? (
          <>
            <Image src={news.image_url} alt={news.title} />
            <Title>{news.title}</Title>
            <Description>{news.desc}</Description>
            <BackLink onClick={() => window.history.go(-1)}>
              Voltar para a lista de notícias
            </BackLink>
          </>
        ) : (
          <Loading>Carregando...</Loading>
        )}
      </DivNews>
    </Container>
  );
};

export default NewsDetail;
