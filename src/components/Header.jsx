import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'> 
    <div className="header-left">
      <h1>Visual Web Builder</h1>
    </div>
    <div className="header-right">
      <button>Export Code</button>
    </div>
    </div>
  )
}

export default Header