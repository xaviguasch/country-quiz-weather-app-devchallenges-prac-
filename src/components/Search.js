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
      <div className='Search__btn-area'>
        <button className='btn btn--close' onClick={handleCloseSearchClick}>
          <span class='material-icons-round'>close</span>
        </button>
      </div>

      <form className='form-search' onSubmit={handleFormSubmit}>
        <input
          className='input-search'
          type='text'
          value={inputSearch}
          name=''
          id=''
          placeholder='Search location'
          onChange={handleCityChange}
        />

        <span class='material-icons-round form-search__icon'>search</span>

        <button className='btn btn--form'>Search</button>
      </form>

      <ul className='searched-cities'>
        {cities.length > 0 &&
          cities.map((city) => (
            <li key={city}>
              {' '}
              <button className='btn btn--city' onClick={handleCityBtnClick}>
                <span>{city}</span>
                <span class='material-icons-round'>chevron_right</span>
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Search
