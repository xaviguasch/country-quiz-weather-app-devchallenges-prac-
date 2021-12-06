import React, { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }, [])

  const getWeather = () => {
    fetch(
      'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=london'
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
  }

  const successCallback = (position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    console.log(lat, lon)
  }

  const errorCallback = (error) => {
    console.error(error)
  }

  return (
    <div className='App'>
      <h1>Weather App</h1>
    </div>
  )
}

export default App
