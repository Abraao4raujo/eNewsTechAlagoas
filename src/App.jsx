import Header from "./Components/Header";
import MainNews from "./Components/MainNews";
import Footer from "./Components/Footer";
import "./App.css";
import { useEffect, useState } from "react";
import { getNews } from "./adapters/getNews";

function LayoutDefault({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function App() {
  const [n1, setN1] = useState();
  useEffect(() => {
    getNews(setN1);
  }, []);

  return (
    <LayoutDefault>
      <MainNews n1={n1} />
    </LayoutDefault>
  );
}

export default App;
