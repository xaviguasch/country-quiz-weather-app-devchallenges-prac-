import React from 'react'

import SingleDataItem from './SingleDataItem'

import './SinglesContainer.css'

const SinglesContainer = ({ weatherData }) => {
  const todaysData = weatherData.consolidated_weather[0]

  const { wind_speed, wind_direction_compass, humidity, visibility, air_pressure } =
    todaysData

  const truncWindDirection = Math.trunc(wind_speed)
  const truncatedVisibility = Math.trunc(visibility)
  const truncatedAirPressure = Math.trunc(air_pressure)

  return (
    <div className='SinglesContainer'>
      <h3 className='highlights-title'>Today's Highlights</h3>

      <div className='sc__container'>
        <SingleDataItem
          item='Wind status'
          firstMeasure={truncWindDirection}
          additional='mph'
          wind_direction_compass={wind_direction_compass}
        />
        <SingleDataItem item='Humidity' firstMeasure={humidity} additional='%' />
        <SingleDataItem
          item='Visibility'
          firstMeasure={truncatedVisibility}
          units='miles'
        />
        <SingleDataItem
          item='Air Pressure'
          firstMeasure={truncatedAirPressure}
          units=' mb'
        />
      </div>
    </div>
  )
}

export default SinglesContainer
