'use client'
import React from 'react'
import Link from 'next/link'
import ModeToggle from './ModeToggle'

const Footer = () => {
  return (
    <div className='flex flex-row h-fit py-8 justify-between items-center text-heading-foreground'>
      <ModeToggle/>
      <span>2024 © built by<Link href="https://github.com/Sukrit3007" target='_blank' className='font-semibold'> sukrit.</Link></span>
    </div>
  )
}

export default Footer
