import HandleDate from "./HandleDate";
import HandleMainIcon from "./HandleMainIcon";
import UnitsConvertion from "./UnitsConvertion";

export default function WeatherInfo(props){
  // const changeBgImage = {
  //   multipleConditions: ["Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squal",
  //   "Tornado"],
  //   otherConditions: ["Clear", "Clouds", "Thunderstorm", "Snow", "Drizzle", "Rain"],
  //   multipleConditionsImages: [`mist.jpg`, `mist-2.jpg`, `mist-3.jfif`, `mist-4.jfif`, `mist-5.jfif`],
  //   otherConditionsImages: {
  //     "Clear" : [`sunny.jpg`, `sunny_2.jfif`, `sunny_3.jfif`, `sunny_4.jfif`, `sunny_5.jfif`],
  //     "Clouds" : [`cloud.jpg`, `cloud_2.jfif`, `cloud_3.jfif`, `cloud_4.jfif`, `cloud_5.jfif`],
  //     "Thunderstorm" : [`thunder.jfif`, `thunder_2.jfif`, `thunder_3.jfif`, `thunder_4.jfif`, `thunder_5.jfif`],
  //     "Snow" : [`snowy.jpeg`, `snowy_2.jfif`, `snowy_3.jfif`, `snowy_4.jfif`, `snowy_5.jfif`],
  //     "Drizzle" : [`drizzle.jfif`, `drizzle_2.jpg`, `drizzle_3.jfif`, `drizzle_4.jfif`, `drizzle_5.jfif`],
  //     "Rain" : [`rain.jfif`, `rain_2.jfif`, `rain_3.jfif`, `rain_4.jfif`, `rain_5.jfif`],
  //   }
  // }

  
  // function importAll(r) {
  //   let image = {};
  //   r.keys().map((item, index) => { image[item.replace('./', '')] = r(item); });
  //   return image;
  // }
  
  // const images = importAll(require.context('./media', false, /\.(jfif|jpe?g|JPG)$/));

  // function updateBackgroundImage() {
  //   let random = Math.floor(Math.random() * 5);
  //   if(changeBgImage.multipleConditions.includes(props.data.mainDescription)){
  //     return changeBgImage.multipleConditionsImages[random];
  //   } else {
  //     if(changeBgImage.otherConditions.includes(props.data.mainDescription)){
  //       return changeBgImage.otherConditionsImages[props.data.mainDescription][random];
  //     }
  //   }
  // }

  console.log(props.weatherUnits);

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