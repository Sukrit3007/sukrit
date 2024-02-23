import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Button, Image} from "@nextui-org/react";
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

const Contact = () => {
  return (
    <Card className="max-w-[400px] bg-inherit">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-small text-default-500">contact</p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-row gap-4 flex-wrap">
          <Button radius="full" endContent={<ArrowTopRightIcon/>} className="font-semibold"><a href="mailto:sukrit37@gmail.com" target="_blank">email</a></Button>
          <Button radius="full" endContent={<ArrowTopRightIcon/>} className="font-semibold"><a href="https://github.com/Sukrit3007" target="_blank">linkedin</a></Button>
          <Button radius="full" endContent={<ArrowTopRightIcon/>} className="font-semibold"><a href="https://www.linkedin.com/in/sukrit37/" target="_blank">github</a></Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default Contact
