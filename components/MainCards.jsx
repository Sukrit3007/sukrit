import React from "react";
import {ScrollShadow} from "@nextui-org/react";
import AboutCard from "./AboutCard";
import TechStack from "./TechStack";
import LocationCard from "./LocationCard";
import ContactCard from "./ContactCard";
import CurrentlyListening from "./CurrentlyListening";

const MainCards = () => {
  return (
    <ScrollShadow hideScrollBar className="w-[400px] h-[700px]">
      <AboutCard/>
      <TechStack/>
      <LocationCard/>
      <ContactCard/>
      <CurrentlyListening/>
    </ScrollShadow>
  )
}

export default MainCards
