import React from "react";
import FeatureButton from "./FeatureButton"; // Import FeatureButton component

//Hero function component is the giant movie collage
export default function Hero() {
  return (
    <div className="Hero">
      <div className="heroContainer">
        <div className="heroFeatures">
          <p>Discover new movies.</p>
          <p>Track and save movies.</p>
          <p>Read what others are saying.</p>
        </div>
      </div>
      <div className="buttonContainer">
        <FeatureButton
          //icon="icon-eye"
          text="Keep track of every film you've ever watched"
        />
        <FeatureButton
          //icon="icon-heart"
          text="Rate each film on a five star scale"
        />
        <FeatureButton
          //icon="icon-heart"
          text="Write and Share Reviews, and view others"
        />
      </div>
    </div>
  );
}
