import React, {useState} from "react";

export default function UnitsConvertion(props){
    const [unit, setUnit] = useState("celsius");
    
    function convertCelsius(event){
        event.preventDefault();
            setUnit("fahrenheit"); 
    }

    function convertFahrenheit(event){
        event.preventDefault();
            setUnit("celsius"); 
    }

    if(unit === "celsius") {
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