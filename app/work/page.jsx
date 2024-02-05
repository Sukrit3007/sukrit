import WorkCard from '@/components/WorkCard';
import React from 'react'


const Work = () => {
  return (
    <main className="flex flex-col gap-12 min-h-fit items-center justify-between px-12 py-6 lg:px-96 text-start">
      
      <div className='min-w-full '>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-left">
        my work 👨🏻‍💻
        </h2> 
      </div>
     <div className='flex flex-col gap-12 min-w-full'>
      <WorkCard/>
     </div>
    </main>
  )
}

export default Work
