import React, {useState, useEffect} from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./Forecast.css";
import axios from "axios";
import ForecastDaysComponent from "./ForecastDayComponent";

export default function Forecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(false);
  }, [props.lat]);
  
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  
  if(loaded) {
    return (
      <div className="Forecast">
        <div className="seven-day-container">
          <div className="sev-day-rowone">
            <div className="row">
              {forecast.map(function(dailyForecast, index){
                index = index + 1;
                if(index < 7) {
                  return (
                    <ForecastDaysComponent key={index} forecast={dailyForecast} units={props.weatherUnits}/>
                    )
                  } else {
                    return null
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.lat;
    let lon = props.lon;
    let apiKey = "2a2676887289368652de121a9db03637";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      
    axios.get(apiUrl).then(handleResponse);
    return null;
  }

}
