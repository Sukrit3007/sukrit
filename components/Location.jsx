import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  
import map from '../public/map.png'
import Image from 'next/image'
import LocationMap from './LocationMap'

const Location = () => {  
  return (
    <Card className="w-full bg-inherit border-0">
      <CardHeader >
        <CardTitle>location</CardTitle>
      </CardHeader>
      <CardContent className="relative overflow-hidden rounded-2xl">
        <div className="group">
          <Image
            src={map}
            alt="location"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform-gpu group-hover:scale-105"
          />
          <p className="absolute left-4 bottom-8 font-normal text-base leading-normal tracking-tighter text-white"><span className="font-semibold">Bengaluru,</span> Karnataka, India</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default Location
