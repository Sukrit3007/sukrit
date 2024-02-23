import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import r1 from '../public/Rectangle1.png'
import r2 from '../public/Rectangle2.png'
import r3 from '../public/Rectangle3.png'
import r4 from '../public/Rectangle4.png'

const WorkCard = () => {
    const list = [
        {
          title: "Orange",
          img: r1,
          price: "$5.50",
        },
        {
          title: "Tangerine",
          img: r2,
          price: "$3.00",
        },
        {
          title: "Raspberry",
          img: r3,
          price: "$10.00",
        },
        {
          title: "Lemon",
          img: r4,
          price: "$5.30",
        },
      ];
  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-2  w-[100%] h-[100%]">
      {list.map((item, index) => (
        <Card isFooterBlurred shadow="sm" key={index} >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <h4 className="text-inherit font-medium text-xl">{item.title}</h4>
        </CardHeader>
        <Image
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={item.img}
        />
        <CardFooter className="absolute bottom-0 z-10 justify-end ">
          <Button radius="full" size="sm" 
          className="bg-black bg-opacity-25 backdrop-blur-12"
          endContent={<ArrowTopRightIcon/>}><a href={item.price} target='_blank'>view project</a></Button>
        </CardFooter>
      </Card>
      ))}
    </div>
  )
}

export default WorkCard
