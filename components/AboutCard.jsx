'use client'
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
import Link from 'next/link'
import GreenDot from '../public/open-to-work.png'
import Image from 'next/image'

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
          <Button className='flex flex-row gap-2'>
          <Image
                    src={GreenDot}
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    />
            <Link href="https://www.linkedin.com/in/sukrit37/" target="_blank"> 
            Open to Work
            </Link>
          </Button>
      </CardFooter>
      </Card>
    </div>
  )
}

export default AboutCard
