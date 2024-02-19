import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Button} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";

const TechStack = () => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
          <p className="text-small text-default-500">tech-stack</p>
      </CardHeader>
      <CardBody>
        <div className="flex gap-4 items-center">
            <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
            <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </div>
      </CardBody>    
    </Card>
  )
}

export default TechStack
