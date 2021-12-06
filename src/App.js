import React, { useState, useEffect } from 'react'

import Main from './components/Main'

import './App.css'

function App() {
  const [weather, setWeather] = useState()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }, [])

  const getWeather = (lat, lon) => {
    fetch(
      `https://secret-ocean-49799.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${lat},${lon}`
    )
      .then((res) => res.json())
      .then((data) => data[0].woeid)
      .then((woeid) => {
        fetch(
          `https://secret-ocean-49799.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
        )
          .then((res) => res.json())
          .then((data) => setWeather(data))
      })
  }

  const successCallback = (position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    getWeather(lat, lon)
  }

  const errorCallback = (error) => {
    console.error(error)
  }

  return (
    <div className='App'>
      <h1>Weather App</h1>
      {weather ? <Main weatherData={weather} /> : <h2>Loading data...</h2>}
    </div>
  )
}

export default App
