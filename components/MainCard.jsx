import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import AboutCard from './AboutCard'
import TechStack from './TechStack'
import Contact from './Contact'
import CurrentlyListening from './CurrentlyListening'
import Location from './Location'

const MainCard = () => {
  return (
        <ScrollArea className="w-full h-auto">
            <AboutCard/>
            <TechStack/>
            <Location/>
            <Contact/>
            <CurrentlyListening/>
        </ScrollArea>
  )
}

export default MainCard
