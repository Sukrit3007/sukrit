import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import AboutCard from './AboutCard'


const MainCard = () => {
  return (
    <ScrollArea className="h-[100%] md:h-[800px] w-full md:w-[40%] rounded-md border p-4 border-red-400">
        <AboutCard/>
        <AboutCard/>
        <AboutCard/>
        <AboutCard/>
        <AboutCard/>
    </ScrollArea>
  )
}

export default MainCard
