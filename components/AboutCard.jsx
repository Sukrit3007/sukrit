import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"  
import { Button } from "@/components/ui/button"

const AboutCard = () => {
  return (
    <Card className="w-full mb-4 bg-inherit border-0">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-sm text-default-500">about</p>
        </div>
      </CardHeader>

      <CardContent>
        <p>a passionate <span className="font-semibold">full-stack developer</span> with a love for crafting clean and efficient code. With a solid foundation in React, Next.js, MongoDB, Node.js 
          <br/><br/>thrive in creating dynamic and responsive web applications that not only meet but exceed expectations.
        </p>
      </CardContent>
    <CardFooter>
      
    <Button className="flex flex-row gap-2 items-center font-semibold px-5">
      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-md"></div>
      <a href="https://www.linkedin.com/in/sukrit37/" target="_blank"> Open to work </a>
    </Button>
    </CardFooter>
      
    </Card>
  )
}

export default AboutCard
