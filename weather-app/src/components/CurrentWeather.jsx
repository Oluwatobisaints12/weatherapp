import React from "react";

const CurrentWeather = ({ data, isActive }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours() % 24; // Ensure hours are within the valid range (0-23)
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  return (
    <div className="weather">
      <div className="top">
        {data.main && data.main.temp && (
          <p className="temperature">{Math.round(data.main.temp)}°C</p>
        )}
        <div className="parameter-row2">
          <span className="parameter-label">Feels like:</span>
          {data.main && data.main.feels_like && (
            <span className="parameter-value-main">
              {Math.round(data.main.feels_like)}°C
            </span>
          )}
        </div>

        <div className="parameter-row-main">
        <img className="sun-icon" src={isActive ? "/sunrise-white 2.png" : "/sunrise-white 1.png"} alt="" />
          <div className="param">
            <span className="parameter-label2">Sunrise</span>
            {data.sys && data.sys.sunrise && (
              <span className="parameter-value">
                {formatTime(data.sys.sunrise)}AM
              </span>
            )}
          </div>
        </div>

        <div className="parameter-row-main2">
          <img className="sun-icon" src={isActive ? "/sunset-white 2.png" : "/sunset-white 1.png"} alt="" />
          <div className="param">
            <span className="parameter-label2">Sunset</span>
            {data.sys && data.sys.sunset && (
              <span className="parameter-value">
                {formatTime(data.sys.sunset)}AM
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="middle">
        {data.weather && data.weather.length > 0 && data.weather[0].icon && (
          <img
            className="weather-icon-img"
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt={`Weather Icon for ${data.weather[0].description}`}
          />
        )}
        <div>
        {data.weather && data.weather[0] && data.weather[0].description && (
            <p className="weather-description">{data.weather[0].description}</p>
        )}
        </div>
      </div>
      <div className="bottom">
        <div className="parameter-coloum">
          <div className="parameter-row">
            <img className="weather-icon1" src={isActive ? "/humidity 2.png" : "/humidity 1.png"} alt="" />
            {data.main && data.main.humidity && (
              <span className="parameter-value-humi">
                {Math.round(data.main.humidity)}%
              </span>
            )}
            <span className="parameter-label-sec">Humidity</span>
          </div>

          <div className="parameter-row-weather">
            <img className="weather-icon2" src={isActive ? "/pressure-white 2.png" : "/pressure-white 1.png"} alt="" />
            {data.main && data.main.pressure && (
              <span className="parameter-value-wind">
                {Math.round(data.main.pressure)}hPa
              </span>
            )}
            <span className="parameter-label-sec">Pressure</span>
          </div>
        </div>
        <div className="parameter-coloum">
          <div className="parameter-row-main-pry">
            <img className="weather-icon3" src={isActive ? "/wind 2.png" : "/wind 1.png"} alt="" />
            {data.wind && data.wind.speed && (
              <span className="parameter-value-temp">
                {Math.round(data.wind.speed)}km/h
              </span>
            )}
            <span className="parameter-label-sec">Wind Speed</span>
          </div>
          <div className="parameter-row-main-sec">
            <img className="weather-icon4" src={isActive ? "/uv-white 2.png" : "/uv-white 1.png"} alt="" />
            {data.main && data.main.pressure && (
              <span className="parameter-value-pre">
                {Math.round(data.main.pressure)}hpa
              </span>
            )}
            <span className="parameter-label-sec">UV</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
