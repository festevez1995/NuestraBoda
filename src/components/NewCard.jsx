import "../components/NewCard.css";

function NewCard(props) {
  return (
    <div className="bubble-card">
      <div
        className="bubble-circle"
        style={{ backgroundColor: props.color }}
      ></div>
      <p className="bubble-label" style={{ color: "#000000" }}>
        {props.colorName}
      </p>
    </div>
  );
}

export default NewCard;
