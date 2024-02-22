import React from "react";

// Button component
const FeatureButton = ({ icon, text }) => {
  return (
    <div className="feature-button">
      <i className={`feature-icon ${icon}`}></i>
      <span className="feature-text">{text}</span>
    </div>
  );
};

export default FeatureButton;
