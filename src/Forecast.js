import React, {useState} from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./Forecast.css";
import axios from "axios";
import ForecastDaysComponent from "./ForecastDayComponent";

export default function Forecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);
  // let [coords, setCoords] = useState({lat: props.lat, lon: props.lon})
  let lat = props.lat;
  let lon = props.lon;
  
  let day = props.date.getDay();
  day = day + 1;
  
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  
  if(loaded) {
    return (
      <div className="Forecast">
        <div class="seven-day-container">
          <div class="sev-day-rowone">
            <div class="row">
              <ForecastDaysComponent forecast={forecast[day]}/>
              hola
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2a2676887289368652de121a9db03637";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=25.6667&lon=-100.3167&appid=${apiKey}&units=metric`;
      
    axios.get(apiUrl).then(handleResponse);
    return null;
  }

}
