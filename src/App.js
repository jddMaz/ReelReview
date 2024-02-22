import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./css/App.css";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="movie">
        <h1 className="movieSection">Best Picture Winners</h1>
        <div className="cardContainer">
          <Card img="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" />
          <Card img="https://image.tmdb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" />
          <Card img="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg" />
          <Card img="https://image.tmdb.org/t/p/w600_and_h900_bestv2/hsCiSDdKLh8u7ntAfeTWTaX5psp.jpg" />
        </div>
      </div>
    </div>
  );
}
