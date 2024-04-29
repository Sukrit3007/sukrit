import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import { cardtitle } from "../primitives";
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


