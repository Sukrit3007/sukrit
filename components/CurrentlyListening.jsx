import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

const CurrentlyListening = () => {
  return (
    <Card className="max-w-[400px] bg-inherit">
      <CardHeader className="flex gap-3">
        
        <div className="flex flex-col">
          <p className="text-small text-default-500">currently-listening</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CurrentlyListening
