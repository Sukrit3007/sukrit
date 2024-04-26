import { work } from '@/data/work'
import React from 'react'
import WorkCard from './work-card'
import MoreCard from './more-card'

const MyWork = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {work.map((work)=>(
            <div key={work.id}>
                <WorkCard work={work} />
            </div>
        ))}
        <MoreCard/>
    </div>
  )
}

export default MyWork
