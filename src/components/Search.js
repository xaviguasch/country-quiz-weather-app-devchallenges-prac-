import React, { useState } from 'react'

import './Search.css'

const Search = ({ onSearchSubmit, onCityClick, cities }) => {
  const [inputSearch, setInputSearch] = useState('')

  const handleCityChange = (e) => {
    setInputSearch(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSearchSubmit(inputSearch)

    setInputSearch('')
  }

  const handleCityBtnClick = (e) => {
    onCityClick(e.target.innerText)
  }

  return (
    <div className='Search'>
      <h2>Search components</h2>

      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          value={inputSearch}
          name=''
          id=''
          placeholder='Search location'
          onChange={handleCityChange}
        />

        <button>Search</button>
      </form>

      <ul>
        {cities.length > 0 &&
          cities.map((city) => (
            <li key={city}>
              {' '}
              <button onClick={handleCityBtnClick}>{city}</button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Search
