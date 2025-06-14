import React from "react";
import "./TextCard.css";

function TextCard(props) {
  return (
    <div className="text-card">
      <h3 style={{ textAlign: "center" }}>{props.title}</h3>
      <br />
      <p>Fecha: {props.date}</p>
      <p>Horario: {props.time}</p>
      <p>Direccion: {props.place}</p>
    </div>
  );
}

export default TextCard;
