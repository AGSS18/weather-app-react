import React from "react";

export default function UnitsConvertion(props){
    let units = "";

    
    function convertCelsius(event){
      event.preventDefault();
      props.changeUnits(units = "imperial");
    }

    function convertFahrenheit(event){
        event.preventDefault();
        props.changeUnits(units = "metric");

    }

    console.log(props.temperature)
    if(props.weatherInforUnits === "metric") {
        return(
            <div className="UnitsConvertion col-sm-4">
                <h1 className="main-temp">
                  <span className="temperature" id="main-temp">
                    {props.temperature}
                  </span>
                  °
                  <span onClick={convertCelsius} className="units unit-button" id="principal-unit">
                    C
                  </span>
                </h1>
            </div>
        );
    } else {
        let fahrenheit = (props.temperature * 9) / 5 + 32;
        return(
            <div className="UnitsConvertion col-sm-4">
                <h1 className="main-temp">
                  <span className="temperature" id="main-temp">
                    {Math.round(fahrenheit)}
                  </span>
                  °
                  <span onClick={convertFahrenheit} className="units unit-button" id="principal-unit">
                    F
                  </span>
                </h1>
            </div>
        );
    }



}