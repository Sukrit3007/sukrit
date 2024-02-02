'use client'
import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'

const Footer = () => {
  return (
    <div className="flex flex-row gap-4 items-center justify-center px-12 py-12 lg:px-96 border-t-4">
      <span>Build by <Link href='https://github.com/Sukrit3007' className='underline'>Sukrit</Link></span>
      <ModeToggle/>
    </div>
  )
}

export default Footer
