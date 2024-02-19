import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Button} from "@nextui-org/react";

const LocationCard = () => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
          <p className="text-small text-default-500">location</p>
      </CardHeader>
      <CardBody>
        <p>map</p>
      </CardBody>    
    </Card>
  )
}

export default LocationCard
