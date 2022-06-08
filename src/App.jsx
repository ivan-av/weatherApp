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
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon?.lat}&lon=${latLon?.lon}&appid=${API_KEY}&units=metric`

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
    <div className="App" style={{
      backgroundImage: `url(src/assets/img/jpg/${weather?.weather[0].main}.jpg)`, 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      }}>
      {/* Card with the info of the weather, it has props of the lat and long of the user and prop for the api. It's manteined hidden while the info of the api shows*/}
      {visibility ? 
        <CardWeather
        latLon = {latLon}
        weather = {weather}
        />
      : null }

      {/* Slide that appears while the info of the apu shows */}
      {hide ? 
        <LoadFile /> 
      : null }
    </div>
  )
}

export default App



