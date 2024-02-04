import { Button } from '@/components/ui/button'
import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";

const Work = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12 py-6 lg:px-96 text-start">
     <div className='flex  flex-col gap-y-12'>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-left">
        my work
        </h2>

      <div>
        <div className='flex flex-row gap-x-12'>
          {/* HEADING */}
          <div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              heading
            </h4>
            <p className="text-sm text-muted-foreground">sub heading</p>
          </div>
          {/* BUTTON LINKS */}
          <div className='flex flex-row gap-x-2 '>
            <Button variant="link">code<RxArrowTopRight /></Button>
            <Button variant="link">View Demo<RxArrowTopRight /></Button>
          </div>
        </div>
        {/* ABOUT THE PROJECT */}
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the error of
          his ways and repealed the joke tax. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Ex, quasi. Minus explicabo totam ipsum eius a accusantium aut incidunt rerum, soluta corrupti, 
           ex dicta recusandae, possimus sequi aperiam officiis doloribus?
        </p>
      </div>

     </div>
    </main>
  )
}

export default Work
