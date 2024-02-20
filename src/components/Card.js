import React from "react";
import parasite_poster from "../images/Parasite.jpg";

export default function Card() {
  return (
    <div className="card">
      <h1 className="card-section">Award-Winning</h1>
      <img src={parasite_poster} className="card-image" />
    </div>
  );
}
