import React, { useEffect } from "react";

const Weathercard = ({
  temp,
        weathermood,
        name,sunrise,timezone,
        country,
        sunset,humidity,
}) => {
  const [weatherState, setWeatheState] = React.useState("");

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  let sec1 = sunrise;
  let date1 = new Date(sec1 * 1000);
  let timeStr1 = `${date1.getHours()}:${date1.getMinutes()}`;

  
  const date2 = new Date();
  let timeStr2 = `${date2.getUTCMilliseconds()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-hot"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr1} PM <br />
                Sunrise
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>
            </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-time-3"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr2} <br />
                Timezone
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;