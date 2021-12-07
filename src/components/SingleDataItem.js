import React from 'react'
import './SingleDataItem.css'

const SingleDataItem = ({ item, firstMeasure, wind_direction_compass, additional }) => {
  return (
    <div className='SingleDataItem'>
      <h2>{item}</h2>
      <p>
        {firstMeasure}
        {additional}
      </p>
      {wind_direction_compass && <p>{wind_direction_compass}</p>}
    </div>
  )
}

export default SingleDataItem
