import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  

const TechStack = () => {
    const icons =[
        {icon:"", link:"" },
        {icon:"", link:"" },
        {icon:"", link:"" },
        {icon:"", link:"" },
        {icon:"", link:"" },
        
    ]
  return (
    <Card className="w-full mb-4 bg-inherit border-0">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-small text-default-500">tech-stack</p>
        </div>
      </CardHeader>
      <CardContent>
        <div>
            {icons.map((item,index)=>(
                <div>
                    
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default TechStack
