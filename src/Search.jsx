import React from 'react'
import { useGlobalContext } from './ContextAPI'

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
      </div>
    </>
  )
}

export default Search
