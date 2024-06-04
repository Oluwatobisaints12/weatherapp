import React, { useEffect, useState } from "react";

const HourlyForecast = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid=361987702fc80747c5a78f1d4a152d5a"
    )
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div className="hourlyforecast-container">
      <label htmlFor="" className="hourly-title">
        Hourly Forecast:
      </label>
      <div className="hourly-big-container">
        {apiData && apiData.list ? (
          apiData.list.slice(0, 5).map((hourlyData) => (
            <div className="hourly-container" key={hourlyData.dt}>
              <div>
                <label className="forecast-time" htmlFor="">
                  {new Date(hourlyData.dt_txt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </label>
              </div>
              <div>
                <img className="forecast-weather-img"
                  src={`http://openweathermap.org/img/wn/${hourlyData.weather[0].icon}.png`}
                  alt=""
                />
              </div>
              <div>
                {" "}
                <label htmlFor="" className="description">
                  {Math.round(hourlyData.main.temp)}°C
                </label>
              </div>

              <div>
                <img className="forecast-img" src="navigation 1.png" alt="" />
              </div>
              <div>
                <label htmlFor="" className="forecast-speed">
                  {Math.round(hourlyData.wind.speed)}km/h
                </label>
              </div>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default HourlyForecast;
