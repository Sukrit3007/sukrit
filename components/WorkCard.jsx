"use client";
import React, { useState } from 'react';
import {
    Card,
  } from "@/components/ui/card";  
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { useTheme } from "next-themes"
import dr1 from '../public/Rectangle1.png';
import dr2 from '../public/Rectangle2.png';
import dr3 from '../public/Rectangle3.png';
import dr4 from '../public/Rectangle4.png';

import lr1 from '../public/Rectangle1light.png';
import lr2 from '../public/Rectangle2light.png';
import lr3 from '../public/Rectangle3light.png';
import lr4 from '../public/Rectangle4light.png';

const WorkCard = () => {
  const { setTheme, theme } = useTheme();
    const list = [
        {
          title: "Authentication app",
          imgdark:dr1, // Use dr1 for dark, lr1 for light
          imglight:lr1, // Use dr1 for dark, lr1 for light
          price: "$5.50",
        },
        {
          title: "Blogging web-app",
          imgdark:dr2, // Use dr2 for dark, lr2 for light
          imglight:lr2, // Use dr2 for dark, lr2 for light
          price: "$3.00",
        },
        {
          title: "Landing page website",
          imgdark:dr3, // Use dr3 for dark, lr3 for light
          imglight:lr3, // Use dr3 for dark, lr3 for light
          price: "$10.00",
        },
        {
          title: "E-commerce website",
          imgdark:dr4, // Use dr4 for dark, lr4 for light
          imglight:lr4, // Use dr4 for dark, lr4 for light
          price: "$5.30",
        },
      ];
  return (
    <div className="gap-2 grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-full h-full rounded-2xl">
      {list.map((item, index) => (
        
        <div key={index} className="relative shadow-md rounded-lg ">
        <Image
          src={theme === 'light' ? item.imglight : item.imgdark}
          alt={item.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl">
        <h2 className="absolute top-4 left-4 text-white font-bold text-2xl">{item.title}</h2>
        <Button className="absolute bottom-4 right-4 bg-black bg-opacity-25 text-white py-2 px-4 rounded-full shadow-md backdrop-filter backdrop-blur-lg hover:bg-black" style={{ borderRadius: "56px", padding: "10px 24px", justifyContent: "center", alignItems: "center", gap: "8px" }}>
          view project <ArrowTopRightIcon className="ml-2" />
      </Button>
        </div>
      </div>

      ))}
    </div>
  )
}

export default WorkCard;