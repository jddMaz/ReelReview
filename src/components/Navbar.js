import React from "react";
import reel from "../images/reel.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={reel} className="reel_logo" />
      <h1 className="nav_title">ReelReview </h1>
    </nav>
  );
}
