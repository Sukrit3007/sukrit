import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button'
  

const AboutCard = () => {
  return (
    <div className='mb-4'>
        <Card>
      <CardHeader>
          <CardDescription>about</CardDescription>
      </CardHeader>
      <CardContent>
          <p>a passionate full-stack developer with a love for crafting clean and efficient code. With a solid foundation in React, Next.js, MongoDB, Node.js 
              <br/><br/> thrive in creating dynamic and responsive web applications that not only meet but exceed expectations.
          </p>
      </CardContent>
      <CardFooter>
          <Button>Open to Work</Button>
      </CardFooter>
      </Card>
    </div>
  )
}

export default AboutCard
