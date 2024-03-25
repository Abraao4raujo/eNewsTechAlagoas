import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SuggestNews from "./MainNews/SuggestNews";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  /* width: 966px; */
  width: 924px;
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  /* margin: auto; */
  display: flex;
  /* height: 170px; */
  /* width: 883px; */
  margin: 15px 0px;
`;

const CategoryNews = () => {
  const { category } = useParams();
  const [newsByCategory, setNewsByCategory] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${category}`)
      .then((response) => {
        var objeto = JSON.parse(response.data);
        console.log(objeto);
        setNewsByCategory(objeto);
      })
      .catch((error) => error);
  }, [category]);

  return (
    <Container>
      <SubTitle>{category}</SubTitle>
      {newsByCategory &&
        newsByCategory.map((news, index) => (
          <Link to={`/News/${news._id}`}>
            <SuggestNews
              key={index}
              urlImage={news.image_url}
              title={news.title}
              desc={news.desc}
              dataPosted={news.data}
            />
          </Link>
        ))}
    </Container>
  );
};

export default CategoryNews;
