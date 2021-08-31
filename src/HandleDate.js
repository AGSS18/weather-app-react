import React from "react";

export default function HandleDate(props) {
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let yearMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dicember"];
    let day = weekDays[props.date.getDay()];
    let month = yearMonths[props.date.getMonth()];
    let date = props.date.getDate();
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    if(hours < 10) {
        hours = `0${hours}`;
    }
    if(minutes < 10) {
        minutes = `0${minutes}`;
    }
    return(
        <div className="principal-data" id="principal-date">
          <span className="main-day">{day}</span>,
          <span className="main-month">{" "}{month} </span>
          <span className="main-number-day">{date}</span>,
          <span className="main-hour">{" "}{hours}:{minutes}</span>
        </div>
    );
}