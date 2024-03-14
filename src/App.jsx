import Header from "./Components/Header";
import MainNews from "./Components/MainNews";
import SuggestNews from "./Components/MainNews/SuggestNews";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <MainNews />
      <SuggestNews
        urlImage="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        title="Titulo Da Noticia"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et libero ratione fuga, totam quidem molestias tempora id velit. Vero illo nisi necessitatibus eaque quasi officiis autem sed molestiae enim ea?"
        dataPosted="Há 7 horas atrás"
      />
      <SuggestNews
        urlImage="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
        title="Titulo Da Noticia"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et libero ratione fuga, totam quidem molestias tempora id velit. Vero illo nisi necessitatibus eaque quasi officiis autem sed molestiae enim ea?"
        dataPosted="Há 7 horas atrás"
      />
      <SuggestNews
        urlImage="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
        title="Titulo Da Noticia"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et libero ratione fuga, totam quidem molestias tempora id velit. Vero illo nisi necessitatibus eaque quasi officiis autem sed molestiae enim ea?"
        dataPosted="Há 7 horas atrás"
      />

      <Footer />
    </>
  );
}

export default App;
