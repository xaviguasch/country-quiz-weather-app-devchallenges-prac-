import React, { useState } from 'react'

import './Search.css'

const Search = ({ onSearchSubmit }) => {
  const [inputSearch, setInputSearch] = useState('')

  const handleCityChange = (e) => {
    setInputSearch(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSearchSubmit(inputSearch)

    setInputSearch('')
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
    </div>
  )
}

export default Search
