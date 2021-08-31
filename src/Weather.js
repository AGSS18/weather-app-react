import React, {useState} from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      mainDescription: response.data.weather[0].main,
    });
  }

  if(weatherData.ready) {
    return (
    <div className="Weather">
      <div
        className="one-day-temp-container"
      >
        <p className="city" id="city">
          {weatherData.city}
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
                {weatherData.temperature}
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
              <span className="condition">{weatherData.description}</span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <p className="wind">
                <i className="fas fa-wind"></i>{" "}
                <span className="main-wind">{weatherData.wind}</span>
                km/h
              </p>
            </div>
            <div className="row">
              <p className="precipitation">
                <i className="fas fa-tint"></i>
                <i className="fas fa-percentage percentage"></i>
                <span className="humidity"> {weatherData.humidity}</span>%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  } else {
    const apiKey = "2a2676887289368652de121a9db03637";
  
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);
    return "Loading..."
  }


  
}
