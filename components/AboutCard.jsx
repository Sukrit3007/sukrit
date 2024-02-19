import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Button} from "@nextui-org/react";

const AboutCard = () => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
          <p className="text-small text-default-500">nextui.org</p>
      </CardHeader>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience. <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fugiat impedit? Accusamus architecto eaque odit, reiciendis necessitatibus maxime dicta temporibus nesciunt atque recusandae inventore delectus illum earum, dolorem sed accusantium.
        </p>
      </CardBody>
      <CardFooter>
        <Button radius="full"> 
            Open
        </Button>
      </CardFooter>
    </Card>
  )
}

export default AboutCard
