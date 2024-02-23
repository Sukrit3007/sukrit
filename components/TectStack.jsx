import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

const TectStack = () => {
  return (
    <Card className="max-w-[400px] bg-inherit">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-small text-default-500">tech-stack</p>
        </div>
      </CardHeader>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card>
  )
}

export default TectStack
