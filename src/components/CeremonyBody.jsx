import React from "react";
import Card from "./Card";
import TextCard from "./TextCard";
import "../components/CeremonyBody.css";
import churchImg from "../assets/church2.jpg";

function CeremonyBody() {
  return (
    <div className="Ceremony-container">
      <div className="ceremony-textcontainer">
        <TextCard
          title="La Ceremonia"
          date="Agosto 23, 2025"
          time="11:00 AM"
          place="6550 Picasso Rd, Goleta, CA 93117"
        />
      </div>

      <div className="ceremony-cardcontainer">
        <Card
          imagePath={churchImg}
          imageName="Saint Mark's University Perish"
        />
      </div>
    </div>
  );
}

export default CeremonyBody;
