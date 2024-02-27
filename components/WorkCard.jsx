import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import r1 from '../public/Rectangle1.png';
import r2 from '../public/Rectangle2.png';
import r3 from '../public/Rectangle3.png';
import r4 from '../public/Rectangle4.png';

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
    <div className="gap-2 grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-full h-full rounded-2xl">
      {list.map((item, index) => (
        <div key={index} className="relative shadow-md rounded-lg">
          <Image
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl">
            <h2 className="absolute top-4 left-4 text-white font-bold text-2xl">{item.title}</h2>
            <Button className="absolute bottom-4 right-4 bg-black bg-opacity-25 text-white py-2 px-4 rounded-full shadow-md backdrop-filter backdrop-blur-lg" style={{ borderRadius: "56px", padding: "10px 24px", justifyContent: "center", alignItems: "center", gap: "8px" }}>
              view project <ArrowTopRightIcon className="ml-2" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkCard;
