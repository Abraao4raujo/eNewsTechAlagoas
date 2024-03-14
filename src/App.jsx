import Header from "./Components/Header";
import MainNews from "./Components/MainNews";
import Footer from "./Components/Footer";
import "./App.css";

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
  return (
    <LayoutDefault>
      <MainNews />
    </LayoutDefault>
  );
}

export default App;
