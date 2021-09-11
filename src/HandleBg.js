import React, {useState, useEffect} from "react";
import background from "./media/deffault.JPG";

export default function HandleBg(props) {
  let [changeBg, setChangeBg] = useState(background);

    const changeBgImage = {
      multipleConditions: ["Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squal",
      "Tornado"],
      otherConditions: ["Clear", "Clouds", "Thunderstorm", "Snow", "Drizzle", "Rain"],
      multipleConditionsImages: [`mist.jpg`, `mist-2.jpg`, `mist-3.jfif`, `mist-4.jfif`, `mist-5.jfif`],
      otherConditionsImages: {
        "Clear" : [`sunny.jpg`, `sunny_2.jfif`, `sunny_3.jfif`, `sunny_4.jfif`, `sunny_5.jfif`],
        "Clouds" : [`cloud.jpg`, `cloud_2.jfif`, `cloud_3.jfif`, `cloud_4.jfif`, `cloud_5.jfif`],
        "Thunderstorm" : [`thunder.jfif`, `thunder_2.jfif`, `thunder_3.jfif`, `thunder_4.jfif`, `thunder_5.jfif`],
        "Snow" : [`snowy.jpeg`, `snowy_2.jfif`, `snowy_3.jfif`, `snowy_4.jfif`, `snowy_5.jfif`],
        "Drizzle" : [`drizzle.jfif`, `drizzle_2.jpg`, `drizzle_3.jfif`, `drizzle_4.jfif`, `drizzle_5.jfif`],
        "Rain" : [`rain.jfif`, `rain_2.jfif`, `rain_3.jfif`, `rain_4.jfif`, `rain_5.jfif`],
      }
    }
  
    useEffect(() => {
      let random = Math.floor(Math.random() * 5);
      if(changeBgImage.multipleConditions.includes(props.description)){
        setChangeBg(images[changeBgImage.multipleConditionsImages[random]].default);
      } else {
        if(changeBgImage.otherConditions.includes(props.description)){
          setChangeBg(images[changeBgImage.otherConditionsImages[props.description][random]].default);
        }
      }
    }, [props.city]);
    
    function importAll(r) {
      let image = {};
      r.keys().map((item, index) => { image[item.replace('./', '')] = r(item); return null });
      return image;
    }
    
    let images = importAll(require.context('./media', false, /\.(jfif|jpe?g|JPG)$/));

    return (
        <div
        className="one-day-temp-container" style={{ backgroundImage: `url(${changeBg})`}}
      >{props.children}</div>
    );
}