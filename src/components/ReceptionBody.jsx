import React from "react";
import Card from "./Card";
import TextCard from "./TextCard";
import "../components/ReceptionBody.css";
import parkImg from "../assets/park2.jpg";

function ReceptionBody() {
  return (
    <div className="Reception-container">
      <div className="Reception-textcontainer">
        <TextCard
          title="La Recepcion"
          date="Agosto 23, 2025"
          time="3:00 PM - 8:00 PM"
          place="580 N La Patera Ln, Goleta, CA 9311"
        />
      </div>

      <div className="Reception-cardcontainer">
        <Card imagePath={parkImg} imageName="Stow Grove Park" color="#800020" />
      </div>
    </div>
  );
}

export default ReceptionBody;
