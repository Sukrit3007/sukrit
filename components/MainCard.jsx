import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import AboutCard from './AboutCard'
import TechStack from './TechStack'
import Contact from './Contact'
import CurrentlyListening from './CurrentlyListening'
import Location from './Location'

const MainCard = () => {
  return (
    <div className="w-[100%] ">
        <ScrollArea className="w-full h-full md:h-[700px]">
            <AboutCard/>
            <TechStack/>
            <Location/>
            <Contact/>
            <CurrentlyListening/>
        </ScrollArea>
    </div>
  )
}

export default MainCard
