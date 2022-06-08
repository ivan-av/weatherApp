import React from 'react'
import { useState, useEffect } from 'react'


const CardWeather = ({latLon, weather}) => {
  
  let [tempType, setTempType] = useState('°C')
  let [tempInfo, setTempInfo] = useState('°F')
  let [changeTemp, setChangeTemp] = useState(1)
  let [constFarenheit, setConstFarenheit] = useState(0)
  

  const toggleTemp = () => {

    if(tempType ==='°C'){
      tempType = setTempType('°F')
      tempInfo = setTempInfo('°C')
      changeTemp = setChangeTemp(1.8)
      constFarenheit = setConstFarenheit(32)
    }
    else {
      tempType = setTempType('°C')
      tempInfo = setTempInfo('°F')
      changeTemp = setChangeTemp(1)
      constFarenheit = setConstFarenheit(0)
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
          <div className='card__principal-section card__hover'>
            <div className='weather__temperature'>{(weather?.main.temp * changeTemp + constFarenheit).toFixed(1)} {tempType}</div>
            <div className='weather__title'>{weather?.weather[0].main}, {weather?.weather[0].description}</div>
            <div className='card__hover weather__min-max'>{`L: ${(weather?.main.temp_min * changeTemp + constFarenheit).toFixed(1)} ${tempType} | H: ${(weather?.main.temp_max * changeTemp + constFarenheit).toFixed(1)} ${tempType}`}</div>
          </div>
          
          <div className='card__secondary-section'>
            <div className='card__hover card__data'>
            <i className='bx bxs-cloud' ></i>
              <span>Clouds:</span> <b>{weather?.clouds.all}<span>%</span></b></div>
            {/* Pressure */}
            <div className='card__hover card__data'>
            <i className='bx bxs-chevrons-down'></i>
            <span>Pressure:</span> <b>{weather?.main.pressure}<span> hPa</span></b></div>
            {/* Humidity */}
            <div className='card__hover card__data'>
            <i className='bx bxs-droplet'></i>
            <span>Humidity:</span> <b>{weather?.main.humidity}<span>%</span></b></div>
            {/* Wind */}
            <div className='card__hover card__data'>
            <i className='bx bx-wind'></i>
            <span>Wind speed:</span> <b>{weather?.wind.speed.toFixed(1)}<span> m/s</span></b></div>
          </div>
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