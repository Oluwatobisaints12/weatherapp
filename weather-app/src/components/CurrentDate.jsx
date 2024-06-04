import React, { useState, useEffect } from 'react';

const CurrentDate = ({ data }) => {
  const [apiFetchData, setApiFetchData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid=361987702fc80747c5a78f1d4a152d5a"
    )
      .then((response) => response.json())
      .then((data) => setApiFetchData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className='date-container'>
       <div className="current-main-container">
       <div>
        <p className="city">{data.city}</p>
      </div>
      <div>
        {apiFetchData && apiFetchData.list && (
          apiFetchData.list.slice(0, 1).map((timeData) => (
            <div key={timeData.dt} className='coloum'>
             
              <label htmlFor="" className='current-time'>
  {new Date(timeData.dt_txt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false // Set to false to display 24-hour format
  })}
</label>


               
              
            
              <label htmlFor="" className='current-date'>
                  {new Date(timeData.dt_txt).toLocaleDateString("en-US", {
                    weekday: "long",
                    day: "numeric",
                    month: "short",
                  })}
                </label>
              </div>
           
          ))
        )}
      </div>
       </div>
    </div>
  );
};

export default CurrentDate;
