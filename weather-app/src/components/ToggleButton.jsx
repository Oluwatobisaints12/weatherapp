import React, { useState, useEffect } from "react";

export const BackgroundColorContext = React.createContext();

const ToggleButton = ({ onToggle }) => {
  const [isActive, setIsActive] = useState(false);

  // Define state for backgroundColor
  const [backgroundColor, setBackgroundColor] = useState(
  );

  // Define state for image source
  const [imageSrc, setImageSrc] = useState("/sunrise-white 1.png");

  useEffect(() => {
    // Update body color when isActive changes
    document.body.style.backgroundColor = isActive
      ? "black"
      : "white";
    document.querySelector(".date-container").style.backgroundColor = isActive
      ? "#D9D9D9"
      : "#444444";
    document.querySelector(".date-container").style.color = isActive
      ? "black"
      : "white";
    document.addEventListener("DOMContentLoaded", function () {
      // Your code here
      document.querySelector(".weather-description").style.color = isActive
        ? "black"
        : "white";
    });
     
    document.querySelector(".city").style.color = isActive ? "black" : "white";
    document.querySelectorAll(".parameter-label, .parameter-value-main, .temperature").forEach((element) => {
      element.style.color = isActive ? "black" : "#FFFFFFCC";
    });
    
    //   document.querySelector(".parameter-label-sec").style.color = isActive
    //   ? "black"
    //   : "white";
    // document.querySelector(".parameter-label2").style.color = isActive
    //   ? "black"
    //   : "white";
    document.querySelector(".forecast-container").style.backgroundColor =
      isActive ? "#D9D9D9" : "#444444";
    document.querySelector(".forecast-container").style.color = isActive
      ? "black"
      : "white";
    document.querySelector(".title").style.color = isActive ? "black" : "white";
    document.querySelector(".hourlyforecast-container").style.backgroundColor =
      isActive ? "#D9D9D9" : "#444444";
    document.querySelector(".hourly-title").style.color = isActive
      ? "black"
      : "white";
    const lightToggleElement = document.querySelector(".light-toggle");
    lightToggleElement.textContent = isActive ? "Dark Mode" : "Light Mode";
    lightToggleElement.style.color = isActive ? "white" : "black";
    const hourlyContainers = document.querySelectorAll(".hourly-container");

    if (hourlyContainers.length > 0) {
      hourlyContainers.forEach((hourlyContainer) => {
        hourlyContainer.style.background = isActive
          ? "linear-gradient(171.67deg, #F88508 -7.42%, rgba(246, 250, 217, 0) 144%)"
          : "#373636";
      });
    }
  }, [isActive]);

  useEffect(() => {
    // Update background color and text color of the .weather container
    const weatherContainer = document.querySelector(".weather");
    weatherContainer.style.backgroundColor = isActive ? "#D9D9D9" : "#444444";
    // weatherContainer.style.color = isActive ? "black" : "#FFFFFFCC";

    // Update text color of child elements within the .weather container
    const childElements = weatherContainer.querySelectorAll("*");
    childElements.forEach((element) => {
      if (!element.classList.contains("parameter-label") && !element.classList.contains("parameter-value-main") && !element.classList.contains("temperature")) {
        element.style.color = isActive ? "black" : "white";
      }
    });
    

  }, [isActive]);

  const toggleButton = () => {
    setIsActive((prevIsActive) => !prevIsActive);

    // Notify the parent component about the toggle
    onToggle((prevIsActive) => !prevIsActive);

    // Change background color based on the current state
    setBackgroundColor((prevColor) =>
      prevColor ===
      "linear-gradient(110.05deg, #383838 0%, rgba(158, 158, 158, 0) 71.82%)"
        ? "green"
        : "linear-gradient(110.05deg, #383838 0%, rgba(158, 158, 158, 0) 71.82%)"
    );

    // Change image source based on the current state
    setImageSrc((prevImageSrc) =>
      prevImageSrc === "/sunrise-white 1.png"
        ? "/sunrise-white 2.png"
        : "/sunrise-white 1.png"
    );
  };

  return (
    <BackgroundColorContext.Provider value={backgroundColor}>
      <div>
        <div
          className={`button-container ${isActive ? "active" : ""}`}
          onClick={toggleButton}
        >
          <div className={`button-after ${isActive ? "slide-left" : ""}`} />
          <h1 className="light-toggle">light mode</h1>
        </div>
      </div>
    </BackgroundColorContext.Provider>
  );
};

export default ToggleButton;
