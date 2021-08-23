import React from "react";
import background from "./media/cloud.jpg";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div
        className="one-day-temp-container"
        style={{ backgroundImage: `url(${background})` }}
      >
        <p className="city" id="city">
          Monterrey
        </p>
        <div className="principal-data" id="principal-date">
          <span className="main-day">Monday</span>,
          <span className="main-month">June </span>
          <span className="main-number-day">28</span>,
          <span className="main-hour">16:00</span>
        </div>
        <div className="row midle-info">
          <div className="col-sm-4">
            <h1 className="main-temp">
              <span className="temperature" id="main-temp">
                26
              </span>
              °
              <span className="units unit-button" id="principal-unit">
                C
              </span>
            </h1>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <span className="icon-temp">
                <i className="fas fa-cloud-sun" id="icon-temp"></i>
              </span>
            </div>
            <div className="row">
              <span className="condition">Partly Cloudy</span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <p className="wind">
                <i className="fas fa-wind"></i>{" "}
                <span className="main-wind">8</span>
                km/h
              </p>
            </div>
            <div className="row">
              <p className="precipitation">
                <i className="fas fa-tint"></i>
                <i className="fas fa-percentage percentage"></i>
                <span className="humidity"> 69</span>%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
