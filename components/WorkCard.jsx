import React from 'react'
import {
    Card,
  } from "@/components/ui/card"  
import { Button } from "@/components/ui/button"
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import r1 from '../public/Rectangle1.png'
import r2 from '../public/Rectangle2.png'
import r3 from '../public/Rectangle3.png'
import r4 from '../public/Rectangle4.png'

const WorkCard = () => {
    const list = [
        {
          title: "Authentication app",
          img: r1,
          price: "$5.50",
        },
        {
          title: "Blogging web-app",
          img: r2,
          price: "$3.00",
        },
        {
          title: "Landing page website",
          img: r3,
          price: "$10.00",
        },
        {
          title: "E-commerce website",
          img: r4,
          price: "$5.30",
        },
      ];
  return (
    <div className="gap-2 grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-full h-full">
      {list.map((item, index) => (
       <Card key={index} className="relative w-[full] h-[full] rounded-lg ">
        <Image
          alt={item.title}
          className="w-full h-full object-cover"
          height="350"
          src={item.img}
          style={{ aspectRatio: "350/350" }}
          width="350" />
       <div className="absolute inset-0 bg-black bg-opacity-40" />
       <h2 className="absolute top-4 left-4 text-white font-bold text-2xl">{item.title}</h2>
       <Button className="absolute bottom-4 right-4 bg-white text-black">
         view project <ArrowTopRightIcon className="ml-2" />
       </Button>
      </Card>
      ))}
    </div>
  )
}

export default WorkCard
