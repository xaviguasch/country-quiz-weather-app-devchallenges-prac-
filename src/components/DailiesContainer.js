import React from 'react'

import Daily from './Daily'

import './DailiesContainer.css'

const DailiesContainer = ({ weatherArr }) => {
  const newWeatherArr = weatherArr.consolidated_weather.slice(1)

  console.log(newWeatherArr)
  return (
    <div className='DailiesContainer'>
      <h3>Dailies Container</h3>

      {newWeatherArr.map((dailyData) => (
        <Daily key={dailyData.id} data={dailyData} />
      ))}
    </div>
  )
}

export default DailiesContainer
