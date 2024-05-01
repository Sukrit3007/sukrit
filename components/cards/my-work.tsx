'use client'

import React, { useEffect, useState } from 'react'
import MoreCard from './more-card'
import WorkCard from './work-card'
import { client } from '@/lib/sanity'
import CardSkeleton from '../loading/card-skeleton'

const MyWork = () => {
  const [work, setWork] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const query= `*[_type == 'mywork']`
      try {
        const data = await client.fetch(query);
        setWork(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  console.log(work)

  if (isLoading) return <CardSkeleton/>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {work?.map((work:any) => (
        <div key={work._id}>
          <WorkCard work={work} />
        </div>
      ))}
      <MoreCard />
    </div>
  )
}

export default MyWork
