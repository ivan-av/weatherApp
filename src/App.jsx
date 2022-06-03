import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [obj, setObj] = useState()

  let lat, lon

  const getLatLong = () => {

    const success = pos => {
      console.log(pos.coords)
      lat = pos.coords.latitude
      lon = pos.coords.longitude
      setObj({lat,lon})
    }

    navigator.geolocation.getCurrentPosition(success)
  }


const API_KEY = '413034c171e2df839ee5fe0140c3b96f'


useEffect(() => {
  if(obj !== undefined) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${obj?.lat}&lon=${obj?.lon}&appid=${API_KEY}`

    axios.get(url)
    .then(res => console.log('Respuesta de la API', res.data))
  }
}, [obj])

  return (
    <div className="App">
      <button onClick={getLatLong}>Get Location</button>
      <h1></h1>
    </div>
  )
}

export default App



