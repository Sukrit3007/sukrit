import React from 'react'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from 'next/image'
import Rectangle1Image from "../public/Rectangle1.png";
import Rectangle2Image from "../public/Rectangle2.png";
import Rectangle3Image from "../public/Rectangle3.png";
import Rectangle4Image from "../public/Rectangle4.png";
import { Button } from './ui/button';
import { ArrowTopRightIcon } from "@radix-ui/react-icons"

const WorkCard = () => {
    const list = [
        {
          title: "Authentication app",
          img: Rectangle1Image,
          link: "$5.50",
        },
        {
          title: "Blogging web-app",
          img: Rectangle2Image,
          link: "$3.00",
        },  
        {
          title: "Landing page website",
          img: Rectangle3Image,
          link: "$10.00",
        },
        {
          title: "E-commerce website",
          img: Rectangle4Image,
          link: "$5.30",
        },
      ];
  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-2  h-full md:h-[800px] w-full md:w-[60%]">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} className="relative">
          <h1 className='text-2xl font-semibold absolute top-4 left-4'>{item.title}</h1>
          <Button className='absolute bottom-4 right-4'>
              <Link href={item.link} className="flex flex-row gap-2 items-center text-default-500" target="_blank">
                view project
                <ArrowTopRightIcon className="h-4 w-4" />
              </Link>
            </Button>
          <div className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-full md:h-[390px]"
              src={item.img}
            />
          </div>
          
    
        </Card>
      ))}
    </div>
  )
}

export default WorkCard
