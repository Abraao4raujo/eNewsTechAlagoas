import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSpecificNews } from "../adapters/getNews";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
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

const BackLink = styled(Link)`
  font-size: 16px;
  color: blue;
  text-decoration: none;
`;

const Loading = styled.p`
  font-size: 18px;
`;

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const newsData = await getSpecificNews(id);
        setNews(newsData[0]);
      } catch (error) {
        console.error("Erro ao buscar os detalhes da notícia:", error);
      }
    };

    fetchNewsDetail();
  }, [id]);

  return (
    <Container>
      {news ? (
        <>
          <Image src={news.image_url} alt={news.title} />
          <Title>{news.title}</Title>
          <Description>{news.desc}</Description>
          <BackLink to="/">Voltar para a lista de notícias</BackLink>
        </>
      ) : (
        <Loading>Carregando...</Loading>
      )}
    </Container>
  );
};

export default NewsDetail;
