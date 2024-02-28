'use client'
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
  } from "@/components/ui/card"  
import Image from 'next/image'
import { useTheme } from "next-themes"

const Location = () => {  
  const { setTheme, theme } = useTheme()
  return (
    <Card className="w-full bg-inherit">
      <CardHeader >
        <CardDescription>location</CardDescription>
      </CardHeader>
      <CardContent className="relative overflow-hidden rounded-2xl ">
        <div className="group">
        <Image
              src={theme === 'light' ? '/maplight.png' : '/map.png'}
              alt="location"
              width={500}
              height={500}
              className="w-full object-cover rounded-lg transition-transform duration-300 transform-gpu group-hover:scale-105"
            />
          <p className="absolute left-4 bottom-4 font-normal text-base leading-normal tracking-tighter text-white"><span className="font-semibold">Bengaluru,</span> Karnataka, India</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default Location
