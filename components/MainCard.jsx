import React from "react";
import {ScrollShadow} from "@nextui-org/react";
import AboutCard from "./AboutCard";

const MainCard = () => {
  return (
    <div className="w-[100%] ">
        <ScrollShadow hideScrollBar className="w-full h-[800px]">
            <AboutCard/>
            <AboutCard/>
            <AboutCard/>
            <AboutCard/>
            <AboutCard/>
        </ScrollShadow>
    </div>
  )
}

export default MainCard
