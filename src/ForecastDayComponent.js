import React from "react";

import HandleMainIcon from "./HandleMainIcon";

export default function ForecastDaysComponent(props) {

    function maxTemp() {
        return Math.round(props.forecast.temp.max);
    }

    function minTemp() {
        return Math.round(props.forecast.temp.min);
    }

    function handleDay() {
        let date = new Date(props.forecast.dt * 1000);
        // let day = shortWeekDays[date.getDay()];
        // return day
        
    }
    
    let shortWeekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    // console.log(day);
    
    let day = 0;

    if(day > 6) {
        day = 0
    }
    
    let textDay = shortWeekDays[day]; 

    return(
        <div class="col-sm-2">
            <div><p class="day-two days">{textDay}</p></div>
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