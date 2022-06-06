import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CardWeather from './components/CardWeather'

function App() {
  const [latLon, setLatLon] = useState()
  const [weather, setWeather] = useState()

  useEffect (() => {
    const success = pos => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      setLatLon({ lat, lon })
  }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if(latLon !== undefined) {
    const API_KEY = '413034c171e2df839ee5fe0140c3b96f'
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon?.lat}&lon=${latLon?.lon}&appid=${API_KEY}`

    axios.get(URL)
    .then(res => setWeather(res.data))
    .catch(err => console.log(err))
  }
}, [latLon])

console.log(weather)

  return (
    <div className="App">
      <h1>{weather?.name}</h1>
      <h2>{weather?.clouds.all} %</h2>
      <h2>Temperature: {(weather?.main.temp -273.15).toFixed(1)} °C</h2>
      <CardWeather 
      />
    </div>
  )
}

export default App



