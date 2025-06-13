import React from "react";
import "../components/Card.css";

function Card(props) {
  return (
    <div className="card" style={{ width: "25rem" }}>
      <img src={props.imagePath} alt={props.imageName} className="church-img" />
      <p className="img-title">{props.imageName}</p>
    </div>
  );
}

export default Card;
