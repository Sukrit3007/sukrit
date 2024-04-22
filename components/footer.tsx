'use client'

import React from 'react'
import { Separator } from './ui/separator'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-12'>
        <Separator/>
        <div className='pt-6'>
            <h1 className='text-sm'>Built by Sukrit</h1>
        </div>
    </div>
  )
}

export default Footer
