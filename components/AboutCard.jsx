import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  
import { Button } from "@/components/ui/button"

const AboutCard = () => {
  return (
    <Card className="w-full bg-inherit border-0">
      <CardHeader className="flex gap-3">
        <CardTitle>about</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="font-light">a passionate <span className="font-semibold">full-stack developer</span> with a love for crafting clean and efficient code. With a solid foundation in React, Next.js, MongoDB, Node.js 
          <br/><br/>thrive in creating dynamic and responsive web applications that not only meet but exceed expectations.
        </p>
      </CardContent>
    <CardFooter>
      
    <Button className="flex flex-row gap-2 items-center font-semibold px-5 rounded-full shadow-md" style={{backgroundColor: '#1B1B1B'}}>
      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-md"></div>
      <a href="https://www.linkedin.com/in/sukrit37/" target="_blank" className="text-white">Open to work</a>
    </Button>
    </CardFooter>
      
    </Card>
  )
}

export default AboutCard
