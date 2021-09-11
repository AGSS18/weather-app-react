import React from "react";
import HandleMainIcon from "./HandleMainIcon";

export default function ForecastDaysComponent(props) {

    function maxTemp() {
        let rounded = Math.round(props.forecast.temp.max);
        return props.units === "metric" ? rounded : Math.round(((rounded * 9) / 5 + 32));
    }

    function minTemp() {
        let rounded = Math.round(props.forecast.temp.min);
        return props.units === "metric" ? rounded : Math.round(((rounded * 9) / 5 + 32));
        
    }

    function handleDay() {
        let date = new Date(props.forecast.dt * 1000);
        let shortWeekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        let day = shortWeekDays[date.getDay()];
        return day;
    }

    console.log(props)
    

    return(
        <div class="col-sm-2">
            <div><p class="day-two days">{handleDay()}</p></div>
            <div><span class="other-icons">
                <HandleMainIcon description={props.forecast.weather[0].main} />
                </span>
            </div>
            <div>
                <p class="max-min-temp"><span class="max-temp temperature">{maxTemp()}</span>° <span class="min-temp temperature">{minTemp()}</span>°</p>
            </div>
        </div>
    );
}