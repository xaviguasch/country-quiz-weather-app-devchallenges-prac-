import React from 'react'

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

import './Daily.css'

const Daily = ({ data }) => {
  const applicableDate = new Date(data.applicable_date)
  const applDateTruncStr = applicableDate.toString().slice(0, 11)

  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(today.getDate() + 1)

  const tomorrowDateTruncStr = tomorrow.toString().slice(0, 11)

  let displayDate = ''

  if (applDateTruncStr === tomorrowDateTruncStr) {
    displayDate = 'Tomorrow'
  } else {
    displayDate = applDateTruncStr
  }

  //

  const { weather_state_abbr, max_temp, min_temp } = data

  const maxTempRound = Math.round(max_temp)
  const minTempRound = Math.round(min_temp)

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
    <div className='Daily'>
      <div className='Daily__upper'>
        <p>{displayDate}</p>
        <img className='Daily__graphic' src={weatherPng} alt='' />
      </div>

      <div className='Daily__lower'>
        <span>{maxTempRound}ºC</span>
        <span>{minTempRound}ºC</span>
      </div>
    </div>
  )
}

export default Daily
