import React from "react";
import HandleDate from "./HandleDate";
import HandleMainIcon from "./HandleMainIcon";

export default function WeatherInfo(props){
    return( 
    <div
        className="one-day-temp-container"
      >
        <p className="city" id="city">
          {props.data.city}
        </p>
        <HandleDate date={props.data.date} />
        <div className="row midle-info">
          <div className="col-sm-4">
            <h1 className="main-temp">
              <span className="temperature" id="main-temp">
                {props.data.temperature}
              </span>
              °
              <span className="units unit-button" id="principal-unit">
                C
              </span>
            </h1>
          </div>
          <div className="col-sm-4">
            <div className="row">
              
                <HandleMainIcon description={props.data.mainDescription}/>
              
            </div>
            <div className="row">
              <span className="condition">{props.data.description}</span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <p className="wind">
                <i className="fas fa-wind"></i>{" "}
                <span className="main-wind">{props.data.wind}</span>
                km/h
              </p>
            </div>
            <div className="row">
              <p className="precipitation">
                <i className="fas fa-tint"></i>
                <i className="fas fa-percentage percentage"></i>
                <span className="humidity"> {props.data.humidity}</span>%
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}