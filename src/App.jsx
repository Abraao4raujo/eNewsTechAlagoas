import Header from "./Components/Header";
import MainNews from "./Components/MainNews";
import Footer from "./Components/Footer";
import "./App.css";
import { useState } from "react";
import PageNews from "./Components/PageNews.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryNews from "./Components/CategoryNews.jsx";

function LayoutDefault({ children }) {
  return (
    <div className="page-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  const [n1, setN1] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutDefault>
              <MainNews n1={n1} />
            </LayoutDefault>
          }
        />

        <Route
          path="/news/:id"
          element={
            <LayoutDefault>
              <PageNews />
            </LayoutDefault>
          }
        />

        <Route
          path="/:category"
          element={
            <LayoutDefault>
              <CategoryNews />
            </LayoutDefault>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
