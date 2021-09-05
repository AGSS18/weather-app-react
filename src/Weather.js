import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);


  function search() {
    const apiKey = "2a2676887289368652de121a9db03637";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);

  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      mainDescription: response.data.weather[0].main,
    });
  }

  if(weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Search">
        <ul className="favorites" id="favorites">
          <li className="city-one">Paris</li>
          <li className="city-two">Lisbon</li>
          <li className="city-three">Sydney</li>
          <li className="city-four">San Francisco</li>
          <li className="city-five">Monterrey</li>
          <li className="edit">
            <i className="fas fa-pencil-alt"></i>
          </li>
        </ul>
        <div className="search-container">
          <form onSubmit={handleSubmit} id="search-form">
            <input
              onChange={handleCityChange}
              type="search"
              placeholder="Enter a city..."
              size="25px"
              className="search-city"
              id="search-city"
              autoFocus="on"
            />
            <button type="submit" className="search-button">
              <i className="fa fa-search"></i>
            </button>
            <button
              type="button"
              className="location-button"
              id="location-button"
            >
              <i className="fas fa-map-marker-alt"></i>
            </button>
            <button type="button" className="plus-icon" id="plus-icon">
              <i className="fas fa-plus"></i>
            </button>
          </form>
        </div>
      </div>
      <WeatherInfo data={weatherData}/>
    </div>
  );
  } else {
    search();
    return "Loading...";
  } 
}
