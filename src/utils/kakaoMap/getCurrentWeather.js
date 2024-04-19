export const getCurrentWeather = async (lat, lng) => {
  if (lat && lng) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
};
