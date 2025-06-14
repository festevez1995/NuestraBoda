import React from "react";
import "./TextCard.css";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsCalendar2MonthFill } from "react-icons/bs";

function TextCard(props) {
  return (
    <div className="text-card">
      <h3 style={{ textAlign: "center" }}>{props.title}</h3>
      <br />
      <br />
      <p>
        <BsCalendar2MonthFill /> {props.date}
      </p>
      <br />
      <p>
        <MdAccessTimeFilled /> {props.time}
      </p>
      <br />
      <p>
        <MdLocationOn /> {props.place}
      </p>
    </div>
  );
}

export default TextCard;
