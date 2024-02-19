import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Button} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";


const Footer = () => {
  return (
    <Card className="max-w-[400px] ">
      <CardBody>
        <div className="flex flex-row justify-between items-center">
          <ThemeSwitcher/>
          <p>2024 © built by <span className="font-semibold"><Link href=""> sukrit.</Link></span></p>
        </div>
      </CardBody>    
    </Card>
  )
}

export default Footer
