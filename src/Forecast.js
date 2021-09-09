import React, {useState} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import HandleMainIcon from "./HandleMainIcon";

import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);
  // console.log(props.date)

  let shortWeekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = props.date.getDay();
  day = day + 1;
  let textDay = shortWeekDays[day]; 

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
              <div class="col-sm-2">
                <div class="row">
                  <p class="day-two days">{textDay}</p>
                </div>
                <div class="row">
                  <span class="other-icons">
                    <HandleMainIcon description={forecast[day].weather[0].main} />
                  </span>
                </div>
                <div class="row">
                  <p class="max-min-temp"><span class="max-temp temperature">{Math.round(forecast[day].temp.max)}</span>° <span class="min-temp temperature">{Math.round(forecast[day].temp.min)}</span>°</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
      let apiKey = "2a2676887289368652de121a9db03637";
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;
    
      axios.get(apiUrl).then(handleResponse);
      return null;
    }
  
}
