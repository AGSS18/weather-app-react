import React from "react";

export default function HandleMainIcon(props) {
    const description = props.description;
    let icon = null;
    let position = null;

    const icons = {
        multipleConditions: ["Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squal", "Tornado"],
        otherConditions: ["Clear", "Clouds", "Thunderstorm",
        "Snow", "Drizzle", "Rain"],
        otherConditionsIcons: [<i className="fas fa-sun"></i>,
        <i className="fas fa-cloud"></i>,
        <i className="fas fa-cloud-showers-heavy"></i>,
        <i className="fas fa-snowflake"></i>,
        <i className="fas fa-cloud-showers-heavy"></i>,
        <i className="fas fa-cloud-rain"></i>]
    }

    if (icons.multipleConditions.includes(description)) {
        icon = <i class="fas fa-smog"></i>;
    } else {
        if (icons.otherConditions.includes(description)) {
                position = icons.otherConditions.indexOf(description);
                icon = icons.otherConditionsIcons[position];
        }
    }

    return(
        <span className="icon-temp">
                {icon}
        </span>
        
    );
}