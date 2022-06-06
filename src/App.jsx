import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CardWeather from './components/CardWeather'
import LoadFile from './components/loadFile'

function App() {
  const [latLon, setLatLon] = useState()
  const [weather, setWeather] = useState()
  const [visibility, setVisibility] = useState(false)
  const [hide, setHide] = useState(true)

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
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon?.lat}&lon=${latLon?.lon}&appid=${API_KEY}&units=metric&lang={sp}`

    axios.get(URL)
    .then(res => setWeather(res.data))
    .catch(err => console.log(err))
    
  }

}, [latLon])

useEffect(() => {
  if(weather!==undefined){
    setVisibility(true)
    setHide(false)
  }
},[weather])

console.log(weather)

  return (
    <div className="App">
      
      {visibility ? 
        <CardWeather
        latLon = {latLon}
        weather = {weather}
        />
      : null }

      {hide ? 
        <LoadFile /> 
      : null }
    </div>
  )
}

export default App



