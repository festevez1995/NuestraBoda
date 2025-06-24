import React from "react";
import "../components/Card.css";

function Card(props) {
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img src={props.imagePath} alt={props.imageName} className="church-img" />
      <br />
      <p className="img-title" style={{ color: props.color }}>
        {props.imageName}
      </p>
    </div>
  );
}

export default Card;
