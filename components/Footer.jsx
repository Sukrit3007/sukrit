import React from 'react'
import ModeToggle from './ModeToggle'

const Footer = () => {
  return (
    <div className='flex flex-row gap-6 justify-center items-center min-w-screen'>
      <div> 
        <ModeToggle/>
      </div>
      <div>
        Build by Sukrit
      </div>
    </div>
  )
}

export default Footer
