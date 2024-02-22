import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Mainlogo from '../public/mainlogo.svg'

const NavBar = () => {
  return (
    <nav className=" p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo on the left */}
          <Link href='/' className='flex items-center'>
            <Image src={Mainlogo} alt="Logo" className="h-8"/>
                <span className="text-lg font-bold hidden md:inline">Sukrit.<span className='text-gray-500 text-lg font-bold'>dev</span>
            </span>
          </Link>

        {/* Options on the right */}
        <div className="flex gap-4 items-center">
            <Link href="/work">work</Link>
            <Link href="/about">about</Link>
            <Link href="/contact">contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
