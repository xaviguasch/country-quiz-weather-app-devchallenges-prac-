import React from 'react'

import Daily from './Daily'

import './DailiesContainer.css'

const DailiesContainer = ({ weatherArr }) => {
  const newWeatherArr = weatherArr.consolidated_weather.slice(1)

  console.log(newWeatherArr)
  return (
    <ul className='DailiesContainer'>
      {newWeatherArr.map((dailyData) => (
        <li key={dailyData.id}>
          <Daily data={dailyData} />
        </li>
      ))}
    </ul>
  )
}

export default DailiesContainer
