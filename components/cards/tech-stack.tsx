import { Card, CardBody } from "@nextui-org/card";
import { Dock, DockIcon } from "../magicui/dock";
import React from "react";
import { cardtitle } from "../primitives";
import Marquee from "../magicui/marquee";
import { Button } from "@nextui-org/button";
import {Tooltip} from "@nextui-org/tooltip";
import { aboutinfo } from "@/data/about";

export default function TechStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="bg-orange-300 p-4">
      <CardBody>
        <p className={cardtitle()}>
          {aboutinfo.techstack.fontend}
        </p>
      </CardBody>
    </Card>
    <Card className="bg-indigo-400  p-4">
      <CardBody>
        <p className={cardtitle()}>
          {aboutinfo.techstack.backend}
        </p>
      </CardBody>
    </Card>
    </div>
  )
}


