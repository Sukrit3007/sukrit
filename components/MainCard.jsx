import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import AboutCard from './AboutCard'
import TechStack from './TechStack'


const MainCard = () => {
  return (
    <ScrollArea className="h-[100%] md:h-[820px] w-full md:w-[40%] rounded-md p-4">
        <AboutCard/>
        <TechStack/>
        <AboutCard/>
        <AboutCard/>
        <AboutCard/>
    </ScrollArea>
  )
}

export default MainCard
