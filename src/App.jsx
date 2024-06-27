import React from 'react'
import Stories from './Stories'
import Pagination from './Pagination'
import Search from './Search'
import './App.css'


const App = () => {
  
  return (
    <>
      <div className="main-container">
        <h2 className='title'>Read Daily Tech News </h2>
        <Search />
        <Pagination />
        <Stories />
      </div>
    </>
  )
}

export default App
