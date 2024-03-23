import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
    axios
      .get(`http://localhost:3000/News/${id}`)
      .then((response) => {
        setNews(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
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
