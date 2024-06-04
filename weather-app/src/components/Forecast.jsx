import React from "react";
import {
  Accordion,
  AccordionItemButton,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const Forecast = ({ data }) => {
  const dayinAWeek = new Date().getDate();
  const forecastday = WEEK_DAYS.slice(dayinAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayinAWeek)
  );
   
  return (
    <div className="forecast-big-container">
      <Accordion allowZeroExpanded className="forecast-container">
      <label className="title">5 Days Forecast:</label>

        {data &&
          data.list &&
          data.list.slice(0, 5).map((item, index) => (
            <AccordionItem key={index} >
              <AccordionItemHeading>
                <AccordionItemButton className="idle">
                  <div className="daily-item">
                    <img
                    className="forecast-weather-icon"
                      src={`http://openweathermap.org/img/wn//${item.weather[0].icon}.png`}
                      alt=""
                    />
                                        <label htmlFor="" className="description">{Math.round(item.main.temp)}°C</label>
                                        <label htmlFor="" className="">{item.weather[0].description}</label>

                    <label htmlFor="" className="day">{forecastday[index]}</label>


                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
