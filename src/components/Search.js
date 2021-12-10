import React, { useState } from 'react'

import './Search.css'

const Search = ({ onSearchSubmit, onCityClick, onCloseSearchClick, cities }) => {
  const [inputSearch, setInputSearch] = useState('')

  const handleCityChange = (e) => {
    setInputSearch(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSearchSubmit(inputSearch)

    setInputSearch('')
    onCloseSearchClick()
  }

  const handleCityBtnClick = (e) => {
    onCityClick(e.target.innerText)
    onCloseSearchClick()
  }

  const handleCloseSearchClick = () => {
    onCloseSearchClick()
  }

  return (
    <div className='Search'>
      <h2>Search components</h2>
      <button onClick={handleCloseSearchClick}>X</button>

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
