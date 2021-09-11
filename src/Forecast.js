import React, {useState, useEffect} from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./Forecast.css";
import axios from "axios";
import ForecastDaysComponent from "./ForecastDayComponent";

export default function Forecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let units;
  
  useEffect(() => {
    setLoaded(false);
  }, [props.lat]);
  
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  
  console.log(props)

  if(loaded) {
    return (
      <div className="Forecast">
        <div class="seven-day-container">
          <div class="sev-day-rowone">
            <div class="row">
              {forecast.map(function(dailyForecast, index){
                index = index + 1;
                if(index < 7) {
                  return (
                    <ForecastDaysComponent key={index} forecast={dailyForecast} units={props.weatherUnits}/>
                    )
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
    units = props.weatherUnits;
    let apiKey = "2a2676887289368652de121a9db03637";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      
    axios.get(apiUrl).then(handleResponse);
    return null;
  }

}
