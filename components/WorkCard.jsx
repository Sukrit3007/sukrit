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

const WorkCard = () => {
    const list = [
        {
          title: "project",
          img: Rectangle1Image,
          price: "$5.50",
        },
        {
          title: "project",
          img: Rectangle2Image,
          price: "$3.00",
        },  
        {
          title: "project",
          img: Rectangle3Image,
          price: "$10.00",
        },
        {
          title: "project",
          img: Rectangle4Image,
          price: "$5.30",
        },
      ];
  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-2  h-full md:h-[800px] w-full md:w-[60%]">
      {list.map((item, index) => (
        <Card shadow="sm" key={index}>
          <CardContent className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-full md:h-[320px]"
              src={item.img}
            />
          </CardContent>
          <CardFooter className="text-small  justify-between items-center gap-x-2 py-2 px-4">
            <Button>
              <Link href={item.price} className="text-default-500">
                view project
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default WorkCard
