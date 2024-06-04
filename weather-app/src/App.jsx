import React, { useContext, useState } from 'react';

import Search from "./components/search/Search";
import CurrentWeather from "./components/CurrentWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";
import Forecast from "./components/Forecast";
import HourlyForecast from "./components/HourlyForecast";
import CurrentDate from "./components/CurrentDate";
import ToggleButton, { BackgroundColorContext } from './components/ToggleButton';

function App() {

  const [isActive, setIsActive] = useState(false);
  const [imageSrc, setImageSrc] = useState("/sunrise-white 1.png");

  const handleToggle = () => {
    setIsActive((prevIsActive) => !prevIsActive);
    setImageSrc((prevImageSrc) =>
      prevImageSrc === "/sunrise-white 1.png"
        ? "/sunrise-white 2.png"
        : "/sunrise-white 1.png"
    );
  };

  const backgroundColor = useContext(BackgroundColorContext);

  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState(null);

  const fetchCurrentWeather = async (lat, lon, label) => {
    try {
      const response = await fetch(
        `${WEATHER_API_URL}/weather?lat=44.34&lon=10.99&appid=${WEATHER_API_KEY}`
      );
      const data = await response.json();
      setCurrentWeather({ city: label, ...data });
    } catch (error) {
      console.error("Error fetching current weather:", error);
    }
  };

  const fetchHourlyForecast = async (lat, lon, label) => {
    try {
      const response = await fetch(
        `${WEATHER_API_URL}/forecast?lat=44.34&lon=10.99&appid=${WEATHER_API_KEY}`
      );
      const data = await response.json();
      setForecast({ city: label, ...data });
    } catch (error) {
      console.error("Error fetching hourly forecast:", error);
    }
  };

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    // Fetch current weather
    fetchCurrentWeather(lat, lon, searchData.label);

    // Fetch hourly forecast
    fetchHourlyForecast(lat, lon, searchData.label);
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
   
    <BackgroundColorContext.Provider value={backgroundColor}>
      <div style={{ backgroundColor }}>
        <div className="search-container">
          <div className="nav-icon">
            <ToggleButton onToggle={handleToggle} />
            <Search onSearchChange={handleOnSearchChange} />
          </div>
          <div className="Display-row">
            <CurrentDate data={currentWeather} isActive={isActive} />
            {currentWeather && <CurrentWeather data={currentWeather} isActive={isActive} />}
          </div>
        </div>

        <div className="container">
          <Forecast data={forecast} />
          <HourlyForecast data={HourlyForecast} />
        </div>
      </div>
    </BackgroundColorContext.Provider>
  );
}

export default App;
