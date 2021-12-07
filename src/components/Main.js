import React from 'react'

import './Main.css'

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

const Main = ({ weatherData }) => {
  console.log(weatherData)
  const { title } = weatherData

  const { weather_state_name, created, weather_state_abbr } =
    weatherData.consolidated_weather[0]

  const currTemp = Math.round(weatherData.consolidated_weather[0].the_temp)

  const formatedDate = new Date(created).toGMTString().slice(0, 11)

  console.log(weather_state_abbr)

  let weatherPng = ''

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
    <div className='Main'>
      <img src={weatherPng} alt='' />
      <h2>{currTemp} ºC</h2>
      <p>{weather_state_name}</p>
      <p>Today · {formatedDate}</p>
      <p>{title}</p>
    </div>
  )
}

export default Main
