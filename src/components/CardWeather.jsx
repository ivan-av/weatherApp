import React from 'react'
import { useState, useEffect } from 'react'


const CardWeather = ({latLon, weather}) => {
  
  let [tempType, setTempType] = useState('°C')
  let [tempInfo, setTempInfo] = useState('°F')
  

  const toggleTemp = () => {

    if(tempType ==='°C'){
      tempType = setTempType('°F')
      tempInfo = setTempInfo('°C')
    }
    else {
      tempType = setTempType('°C')
      tempInfo = setTempInfo('°F')
    }
  }


  return (
    <div className='card-wheater__container'>
      
      {/* Country and City */}
      <div className='card__country'>
        {weather?.sys.country}, {weather?.name}
        </div>
      
      {/* Weather */}
      <div className='card__weather-section'>

        <div className='card__picture'>  
          <img className='picture__wheater' src= {`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="weather icon" />
        </div>

        <div className='card__weather-info'>
          <div className='weather__title'>{weather?.weather[0].main}, {weather?.weather[0].description}</div>
          <div>Clouds: <b>{weather?.clouds.all}%</b></div>
          <div>Temperature: <b>{(weather?.main.temp).toFixed(1)} {tempType}</b></div>
          <div>Feels like: <b>{(weather?.main.feels_like).toFixed(1)} {tempType}</b></div>
          <div>Min - Max: <b>{(weather?.main.temp_min).toFixed(1)} {tempType} - {(weather?.main.temp_max).toFixed(1)} {tempType}</b></div>
          {/* Pressure */}
          <div>Pressure: <b>{weather?.main.pressure} hPa</b></div>
          {/* Humidity */}
          <div>Humidity: <b>{weather?.main.humidity}%</b></div>
          {/* Wind */}
          <div>Wind speed: <b>{weather?.wind.speed.toFixed(1)} m/s</b></div>
        </div>

      </div>
    
      <div className='card__button-section'>
        <button className='card__button' onClick={toggleTemp}>
          Change to {tempInfo}
        </button>
      </div>

    </div>
  )
}

export default CardWeather