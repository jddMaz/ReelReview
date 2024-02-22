import React from "react";
//Function component accepts props as argument for multiple movie posters
export default function Card(props) {
  return (//Displays movie poster for categories
    <div className="moviePoster">
      <img src={props.img} />
    </div>
  );
}
