import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Button} from "@nextui-org/react";

const ContactCard = () => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
          <p className="text-small text-default-500">tech-stack</p>
      </CardHeader>
      <CardBody>
        <div className="flex flex-row">
            <Button radius="full"> email</Button>
            <Button radius="full"> email</Button>
            <Button radius="full"> email</Button>
        </div>
      </CardBody>    
    </Card>
  )
}

export default ContactCard
