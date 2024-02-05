'use client'
import { Button } from '@/components/ui/button'
import { RxArrowTopRight } from "react-icons/rx";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'

const WorkCard = () => {
  const [workData, setWorkData] = useState([]);

  const fetchWork = async () => {
    try {
      const response = await axios.get('/api/work');
      console.log('API Response:', response.data); 
      setWorkData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWork();
  }, []);

  return (
    <>
      {workData && workData.length > 0 && workData.map((item) => (
        <div key={item._id} className='min-w-full '>
          <div className='flex flex-row gap-x-12 '>
            {/* HEADING */}
            <div>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight ">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground">{item.subHeading}</p>
            </div>
            {/* BUTTON LINKS */}
            <div className='flex flex-row gap-x-2'>
              <Button variant="link"><Link href={item.sourceCodeUrl}>code</Link><RxArrowTopRight /></Button>
              <Button variant="link"><Link href={item.demoUrl}>view demo</Link><RxArrowTopRight /></Button>
            </div>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {item.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default WorkCard
