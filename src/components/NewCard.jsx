import "../components/NewCard.css";

function NewCard(props) {
  return (
    <div className="celebration-box">
      <img src={props.imagePath} alt={props.imageName} />
      <div className="information">
        <p>Fetcha: {props.date}</p>
        <p>Tiempo: {props.time}</p>
        <p>Lugar: {props.place}</p>
        <button>Obtener Direcciones</button>
      </div>
    </div>
  );
}

export default NewCard;
