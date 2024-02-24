import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

const TectStack = () => {
    const icons =[
        {icon:"", link:"" },
        {icon:"", link:"" },
        {icon:"", link:"" },
        {icon:"", link:"" },
        {icon:"", link:"" },
        
    ]
  return (
    <Card className="max-w-[400px] bg-inherit">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-small text-default-500">tech-stack</p>
        </div>
      </CardHeader>
      <CardBody>
        <div>
            {icons.map((item,index)=>(
                <div>
                    
                </div>
            ))}
        </div>
      </CardBody>
    </Card>
  )
}

export default TectStack
