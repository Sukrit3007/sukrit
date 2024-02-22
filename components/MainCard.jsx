import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import AboutCard from './AboutCard'
import TechStack from './TechStack'
import LocationCard from './LocationCard'
import ContactCard from './ContactCard'
import CurrentlyListeningCard from './CurrentlyListeningCard'


const MainCard = () => {
  return (
    <ScrollArea className="h-[100%] md:h-[820px] w-full md:w-[40%] rounded-md p-4">
        <AboutCard/>
        <TechStack/>
        <LocationCard/>
        <ContactCard/>
        <CurrentlyListeningCard/>
    </ScrollArea>
  )
}

export default MainCard
