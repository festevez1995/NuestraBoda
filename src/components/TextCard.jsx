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
      <p className="date">
        <BsCalendar2MonthFill size="2em" /> {props.date}
      </p>
      <br />
      <p className="time">
        <MdAccessTimeFilled size="2em" style={{ verticalAlign: "middle" }} />{" "}
        {props.time}
      </p>
      <br />
      <p className="location">
        <MdLocationOn size="2em" style={{ verticalAlign: "middle" }} />{" "}
        {props.place}
      </p>
    </div>
  );
}

export default TextCard;
