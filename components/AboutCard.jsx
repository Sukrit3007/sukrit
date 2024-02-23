import React from "react";
import {Card, CardHeader, CardBody, CardFooter,Button} from "@nextui-org/react";

const AboutCard = () => {
  return (
    <Card className="max-w-[400px] bg-inherit">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-small text-default-500">about</p>
        </div>
      </CardHeader>

      <CardBody>
        <p>a passionate full-stack developer with a love for crafting clean and efficient code. With a solid foundation in React, Next.js, MongoDB, Node.js 
          <br/><br/>thrive in creating dynamic and responsive web applications that not only meet but exceed expectations.
        </p>
      </CardBody>
    <CardFooter>
      
      <Button radius="full" className="font-semibold px-5">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-md"></div>
        <a href="https://www.linkedin.com/in/sukrit37/" target="_blank">Open to work </a>
      </Button>
    </CardFooter>
      
    </Card>
  )
}

export default AboutCard
