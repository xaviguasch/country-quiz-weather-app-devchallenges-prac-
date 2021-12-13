import React from 'react'
import './SingleDataItem.css'

const SingleDataItem = ({
  item,
  firstMeasure,
  wind_direction_compass,
  additional,
  units,
}) => {
  return (
    <div className='SingleDataItem'>
      <p className='sdi__text'>{item}</p>
      <div className='sdi__units'>
        <span className='sdi__units__fm'>{firstMeasure}</span>

        {additional && <span className='sdi__units__additional'>{additional}</span>}

        {units && (
          <span className='sdi__units__additional sdi__units__special'>{units}</span>
        )}
      </div>
      {wind_direction_compass && (
        <div className='wind-data'>
          <span className='material-icons-round'>near_me</span>{' '}
          <span>{wind_direction_compass}</span>
        </div>
      )}
    </div>
  )
}

export default SingleDataItem
