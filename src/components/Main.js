import React from 'react'

import './Main.css'

const Main = ({ weatherData }) => {
  console.log(weatherData)
  const { title } = weatherData

  const { weather_state_name, created } = weatherData.consolidated_weather[0]

  const currTemp = Math.round(weatherData.consolidated_weather[0].the_temp)

  const formatedDate = new Date(created).toGMTString().slice(0, 11)

  console.log(currTemp)
  return (
    <div className='Main'>
      <h2>{currTemp} ºC</h2>
      <p>{weather_state_name}</p>
      <p>{formatedDate}</p>
      <p>{title}</p>
    </div>
  )
}

export default Main
