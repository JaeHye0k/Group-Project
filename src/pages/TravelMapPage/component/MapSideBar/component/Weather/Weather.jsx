import React from "react";

const Weather = ({ weather }) => {
  return (
    <div className="weather">
      <div className="weather-content">
        <div className="description">
          현재 온도 {weather?.main.temp.toFixed(1)}℃
        </div>

        <img
          className="weather-image"
          src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
        ></img>
        <div className="weather-min-max">
          <div>최고온도</div> <div>최저온도</div>
          <div>{weather?.main.temp_max.toFixed(1)} ℃</div>
          <div>{weather?.main.temp_min.toFixed(1)} ℃</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
