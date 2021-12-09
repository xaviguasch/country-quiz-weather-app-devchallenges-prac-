import React, { useState, useEffect } from 'react'

import Search from './components/Search'
import Main from './components/Main'
import SinglesContainer from './components/SinglesContainer'
import DailiesContainer from './components/DailiesContainer'

import './App.css'

function App() {
  const [weather, setWeather] = useState()
  const [searchedCities, setSearchedCites] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }, [])

  const getDataFromAPI = (woeid) => {
    fetch(
      `https://secret-ocean-49799.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
  }

  const getWeather = (lat, lon) => {
    fetch(
      `https://secret-ocean-49799.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${lat},${lon}`
    )
      .then((res) => res.json())
      .then((data) => data[0].woeid)
      .then((woeid) => {
        getDataFromAPI(woeid)
      })
  }

  const getWeatherByCity = (city) => {
    fetch(
      `https://secret-ocean-49799.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`
    )
      .then((res) => res.json())
      .then((data) => data[0].woeid)
      .then((woeid) => {
        getDataFromAPI(woeid)

        // Avoids adding a non-existent city to the list of searches cities
        if (woeid) {
          // Avoids adding an already searched city to the list of searched cities
          if (!searchedCities.includes(city)) {
            setSearchedCites((prevState) => [...prevState, city])
          }
        }
      })
      .catch((error) => {
        // Needs better error handling, but now if the searched city doesn't exist, at least the app doesn't crash anymore
        console.log(error.message)
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

  const onSearchSubmit = (city) => {
    getWeatherByCity(city)
  }

  const onCityClick = (city) => {
    getWeatherByCity(city)
  }

  return (
    <div className='App'>
      {weather && (
        <div>
          <Search
            onSearchSubmit={onSearchSubmit}
            cities={searchedCities}
            onCityClick={onCityClick}
          />
          <Main weatherData={weather} /> : <h2>Loading data...</h2>
          <SinglesContainer weatherData={weather} />
          <DailiesContainer weatherArr={weather} />
        </div>
      )}
    </div>
  )
}

export default App
