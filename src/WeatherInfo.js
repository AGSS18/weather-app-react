import HandleDate from "./HandleDate";
import HandleMainIcon from "./HandleMainIcon";
import UnitsConvertion from "./UnitsConvertion";

export default function WeatherInfo(props){

    return( 
    <div
        className="one-day-temp-container"
        // style={{ backgroundImage: `url(${images[updateBackgroundImage()].default})`}}
      >
        <p className="city" id="city">
          {props.data.city}
        </p>
        <HandleDate date={props.data.date} />
        <div className="row midle-info">
          
          <UnitsConvertion temperature={props.data.temperature} changeUnits={props.changeUnits} weatherInforUnits={props.weatherUnits} />


          <div className="col-sm-4">
            <div className="row">
              <span className="icon-temp">
                <HandleMainIcon description={props.data.mainDescription}/>
              </span>
              
            </div>
            <div className="row">
              <span className="condition">{props.data.description}</span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <p className="wind">
                <i className="fas fa-wind"></i>{" "}
                <span className="main-wind">{props.data.wind}</span>
                km/h
              </p>
            </div>
            <div className="row">
              <p className="precipitation">
                <i className="fas fa-tint"></i>
                <i className="fas fa-percentage percentage"></i>
                <span className="humidity"> {props.data.humidity}</span>%
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}