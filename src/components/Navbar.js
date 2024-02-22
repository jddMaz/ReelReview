import React from "react";
import reel from "../images/reel.png";
//Navigation bar at top of website
export default function Navbar() {
  return (
    <nav className="navBar">
      <img src={reel} className="reelLogo" />
      <h1 className="navTitle">ReelReview </h1>
    </nav>
  );
}
