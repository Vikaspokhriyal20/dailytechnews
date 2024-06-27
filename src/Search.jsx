import React from 'react'
import { useGlobalContext } from './ContextAPI'
import ToggleSwitch from './ToggleSwitch';

const Search = () => {
  const { query , searchPost} = useGlobalContext();

  return (
    <>
      <div className="input-container">
        <input type="text"
          name='search'
          className='searchbox'
          placeholder='Search..'
          value={query}
          onChange={(e)=>searchPost(e.target.value)}
        />
        <ToggleSwitch/>
      </div>
    </>
  )
}

export default Search
