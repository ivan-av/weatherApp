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
  let [urlImage, setUrlImage] = useState()

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

  useEffect(() => {
    if(weather?.weather[0].main === 'Atmosphere'){
      urlImage = setUrlImage('https://images.unsplash.com/photo-1603794052293-650dbdeef72c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80')
    } else if (weather?.weather[0].main === 'Clear') {
      urlImage = setUrlImage('https://images.unsplash.com/photo-1590077428593-a55bb07c4665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=814&q=80')
    } else if (weather?.weather[0].main === 'Clouds') {
      urlImage = setUrlImage('https://images.unsplash.com/photo-1440407876336-62333a6f010f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80')
    } else if (weather?.weather[0].main === 'Drizzle') {
      urlImage = setUrlImage('https://images.unsplash.com/photo-1554393181-a77301ded1e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80')
    } else if (weather?.weather[0].main === 'Rain') {
      urlImage = setUrlImage('https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')
    } else if (weather?.weather[0].main === 'Snow') {
      urlImage = setUrlImage('https://images.unsplash.com/photo-1510865159849-074d78c1690a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')
    } else if (weather?.weather[0].main === 'Thunderstorm') {
      urlImage = setUrlImage('https://images.unsplash.com/photo-1509401934319-cb35b87bf39e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')
    }
  },[weather])

console.log(weather)

  return (
    <div className="App" style={{
      backgroundImage: `url(${urlImage})`, 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
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



