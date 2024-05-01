// import { work } from '@/data/work'
import React, { useEffect, useState } from 'react'
import MoreCard from './more-card'
import WorkCard from './work-card'
import { client } from '@/lib/sanity'

const MyWork = () => {
  const [work, setWork] = useState<any>([])

  useEffect(() => {
    const fetchData = async () => {
      const query= `*[_type == 'mywork']`
      try {
        const data = await client.fetch(query);
        setWork(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    };

    fetchData();
  }, []);

  console.log(work)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {work.map((work:any) => (
        <div key={work._id}>
          <WorkCard work={work} />
        </div>
      ))}
      <MoreCard />
    </div>
  )
}

export default MyWork
