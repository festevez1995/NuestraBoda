import React from "react";
import NewCard from "./NewCard";
import "../components/AttireBody.css";

function ReceptionBody() {
  return (
    <div className="attire-container">
      <h3>Código De Vestimenta</h3>
      <p style={{ color: "#000000" }}>
        Para quienes quieran combinar con el tema de nuestra boda, estos son los
        colores. Este código de vestimenta no es obligatorio.
      </p>
      <br />
      <div className="colorCard-container">
        <NewCard color="#800020" colorName="Burgundy" />
        <NewCard color="#efbf04" colorName="Gold" />
        <NewCard color="#C4A484" colorName="Light Brown" />
        <NewCard color="#06402b" colorName="Dark Green" />
      </div>
    </div>
  );
}
export default ReceptionBody;
