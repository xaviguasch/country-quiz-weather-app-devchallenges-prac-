import React from 'react'

import './DailyMain.css'

import Snow from '../assets/Snow.png'
import Sleet from '../assets/Sleet.png'
import Hail from '../assets/Hail.png'
import Thunderstorm from '../assets/Thunderstorm.png'
import HeavyRain from '../assets/HeavyRain.png'
import LightRain from '../assets/LightRain.png'
import Showers from '../assets/Shower.png'
import HeavyCloud from '../assets/HeavyCloud.png'
import LightCloud from '../assets/LightCloud.png'
import Clear from '../assets/Clear.png'

const DailyMain = ({ weatherData, onSearchClick }) => {
  const { title } = weatherData

  const { weather_state_name, created, weather_state_abbr } =
    weatherData.consolidated_weather[0]

  const currTemp = Math.round(weatherData.consolidated_weather[0].the_temp)

  const formatedDate = new Date(created).toGMTString().slice(0, 11)

  let weatherPng = ''

  const handleSearchClick = () => {
    onSearchClick()
  }

  switch (weather_state_abbr) {
    case 'sn':
      weatherPng = Snow
      break
    case 'sl':
      weatherPng = Sleet
      break
    case 'h':
      weatherPng = Hail
      break
    case 't':
      weatherPng = Thunderstorm
      break
    case 'hr':
      weatherPng = HeavyRain
      break
    case 'lr':
      weatherPng = LightRain
      break
    case 's':
      weatherPng = Showers
      break
    case 'hc':
      weatherPng = HeavyCloud
      break
    case 'lc':
      weatherPng = LightCloud
      break
    default:
      weatherPng = Clear
  }

  return (
    <div className='DailyMain container'>
      <div className='btns--area'>
        <button className='btn btn--search' onClick={handleSearchClick}>
          Search for places
        </button>
      </div>
      <div className='main-content'>
        <img className='main-content__img' src={weatherPng} alt='' />
        <h2 className='main-content__temp'>
          {currTemp}
          <span className='main-content__unit'>ºC</span>
        </h2>
        <p className='main-content__name'>{weather_state_name}</p>
        <p className='main-content__date'>
          <span>Today</span>
          <span>·</span>
          <span>{formatedDate}</span>
        </p>
        <p className='main-content__location'>
          <span class='material-icons-round'>place</span>
          <span className='main-content__location__text'>{title}</span>
        </p>
      </div>
    </div>
  )
}

export default DailyMain
