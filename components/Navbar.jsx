'use client'
import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-12 py-12 lg:px-96 ">
        <ul className='flex flex-row gap-4'>
            <Link href='/'>home</Link>
            <Link href='/work'>work</Link>
            <Link href='/contact'>contact</Link>
        </ul>
    </nav>
  )
}

export default Navbar
