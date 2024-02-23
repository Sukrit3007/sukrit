import React from "react";
import {ScrollShadow} from "@nextui-org/react";
import AboutCard from "./AboutCard";
import TectStack from "./TectStack";
import Location from "./Location";
import Contact from "./Contact";
import CurrentlyListening from "./CurrentlyListening";

const MainCard = () => {
  return (
    <div className="w-[100%] ">
        <ScrollShadow hideScrollBar className="w-full h-[800px]">
            <AboutCard/>
            <TectStack/>
            <Location/>
            <Contact/>
            <CurrentlyListening/>
        </ScrollShadow>
    </div>
  )
}

export default MainCard
