import React from "react";
import Card from "./Card";
import TextCard from "./TextCard";
import "../App.css";
import churchImg from "../assets/church.png";

function CeremonyBody() {
  const churchDescription =
    " St. Mark's es una parroquia universitaria única que ha estado sirviendo tanto al campus de UCSB como a la comunidad de Isla Vista desde 1965, combinando el papel de un Centro Newman con el de una parroquia tradicional.";
  return (
    <div className="Ceremony-container">
      <TextCard
        title="La Ceremonia"
        description={churchDescription}
        date="Agosto 23, 2025"
        time="11:00 AM"
        place="6550 Picasso Rd, Goleta, CA 93117"
      />
      <Card imagePath={churchImg} imageName="Saint Mark's University Perish" />
    </div>
  );
}

export default CeremonyBody;
