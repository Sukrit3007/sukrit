import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const WorkCards = () => {
    const list = [
        {
          title: "Orange",
          img: "",
          price: "$5.50",
        },
        {
          title: "Lemon 2",
          img: "",
          price: "$8.00",
        },
        {
          title: "Banana",
          img: "",
          price: "$7.50",
        },
        {
          title: "Watermelon",
          img: "",
          price: "$12.20",
        },
      ];
  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-2">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-[300px] object-cover h-[300px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default WorkCards
