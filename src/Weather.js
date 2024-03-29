import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  let [city, setCity] = useState(props.defaultCity);
  const [hidden, setHidden] = useState(true);
  const [favCities, setFavCities] = useState("");
  let [units, setUnits] = useState("metric");
  
  function changeUnits(response) {
    if(response === "imperial") {
      setUnits("imperial")
    } else {
      setUnits("metric")
    }
  }

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
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
    });
  }
  
  function handleFavCity(event) {
    city = event.target.innerHTML;
    search();
  }
  
  function showFavCities(event) {
    event.preventDefault();
    if(hidden === true) {
      setFavCities("");
      setHidden(false);
    } else {
      setFavCities(<ul className="favorites" id="favorites">
            <li onClick={handleFavCity} className="city-one">Monterrey</li>
            <li onClick={handleFavCity} className="city-two">Cancún</li>
            <li onClick={handleFavCity} className="city-three">Guadalajara</li>
            <li onClick={handleFavCity} className="city-four">New York</li>
            <li onClick={handleFavCity} className="city-five">San Antonio</li>
          </ul>);
      setHidden(true);   
    }
  }

  if(weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Search">
          {favCities}
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
            {/* <button
              type="button"
              className="location-button"
              id="location-button"
            >
              <i className="fas fa-map-marker-alt"></i>
            </button> */}
            <button type="button" className="plus-icon" id="plus-icon">
              <i onClick={showFavCities} className="fas fa-star"></i>
            </button>
          </form>
        </div>
      </div>
      <WeatherInfo data={weatherData} changeUnits={changeUnits} weatherUnits={units} />
      <Forecast lon={weatherData.longitude} lat={weatherData.latitude} date={weatherData.date} weatherUnits={units} />
    </div>
  );
  } else {
    search();
    return "Loading...";
  } 
} 
