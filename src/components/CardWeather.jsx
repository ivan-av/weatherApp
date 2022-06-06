import React from 'react'

const CardWeather = ({latLon, weather}) => {
  return (
    <div className='card-wheater__container'>
      {/* Country and City */}
      <h1>{weather?.sys.country}, {weather?.name}</h1>
      {/* Temperature */}
      <h2>Temperature: {weather?.main.temp.toFixed(1)} °C</h2>
      <h2>Feels like Temperature: {weather?.main.feels_like.toFixed(1)} °C</h2>
      <h2>Min. Temperature: {weather?.main.temp_min.toFixed(1)} °C</h2>
      <h2>Max. Temperature: {weather?.main.temp_max.toFixed(1)} °C</h2>
      {/* Pressure */}
      <h2>Pressure: {weather?.main.pressure} hPa</h2>
      {/* Humidity */}
      <h2>Humidity: {weather?.main.humidity}%</h2>
      {/* Wind */}
      <h2>Wind speed: {weather?.wind.speed.toFixed(1)} meter/sec</h2>
      {/* Weather */}
      <img src= {`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="weather icon" />
      <h2>Weather: {weather?.weather[0].main}, {weather?.weather[0].description}</h2>
      <h2>Clouds: {weather?.clouds.all}%</h2>
    </div>
  )
}

export default CardWeather