import React from "react";
import FeatureButton from "./FeatureButton";

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
          text="Discover popular movies based on real ratings"
        />
        <FeatureButton
          //icon="icon-heart"
          text="Filter movies by genre, year, rating and more"
        />
      </div>
    </div>
  );
}
