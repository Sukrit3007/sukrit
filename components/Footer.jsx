'use client'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-row h-full p-4 justify-between items-center'>
      <ThemeSwitcher/>
      <span>2024 © built by<Link href="https://github.com/Sukrit3007" target='_blank' className='font-semibold'> sukrit.</Link></span>
    </div>
  )
}

export default Footer
