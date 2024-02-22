'use client'
import React from 'react'
import ModeToggle from './ModeToggle'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-row gap-6 justify-center items-center min-w-screen pt-2'>
      <div> 
        <ModeToggle/>
      </div>
      <div>
        Build by <Link href="https://github.com/Sukrit3007" className='underline' target="_blank">Sukrit</Link>
      </div>
    </div>
  )
}

export default Footer
