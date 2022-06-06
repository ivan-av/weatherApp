import React from 'react'

const CardWeather = ({latLon, weather}) => {
  return (
    <div className='card-wheater__container'>
      <h1>{weather?.name}</h1>
      <h2>{weather?.clouds.all} %</h2>
      <h2>Temperature: {(weather?.main.temp -273.15).toFixed(1)} °C</h2>
    </div>
  )
}

export default CardWeather