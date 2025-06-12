import React from "react";
import TextCard from "./TextCard";
import Card from "./Card";
import parkParty from "/src/assets/park.png";

function ReceptionBody() {
  const parkDescription =
    "Este parque icónico e histórico es un lugar muy popular entre los residentes de Goleta.Este parque icónico e histórico es un lugar muy popular entre los residentes de Goleta.";
  return (
    <div className="reception-container" style={{ backgroundColor: "#AC9C8D" }}>
      <TextCard
        title="La Recepcion"
        description={parkDescription}
        date="Sabado Agosto 23, 2025"
        time="2:00PM - 8:00PM"
        place="580 N La Patera Ln, Goleta, CA 93117"
      />
      <Card imagePath={parkParty} imageName="Stow Grove Park" />
    </div>
  );
}
export default ReceptionBody;
