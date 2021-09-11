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

    return(
        <div className="col-sm-2">
            <div><p className="day-two days">{handleDay()}</p></div>
            <div><span className="other-icons">
                <HandleMainIcon description={props.forecast.weather[0].main} />
                </span>
            </div>
            <div>
                <p className="max-min-temp"><span className="max-temp temperature">{maxTemp()}</span>° <span className="min-temp temperature">{minTemp()}</span>°</p>
            </div>
        </div>
    );
}