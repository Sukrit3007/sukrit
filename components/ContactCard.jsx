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
import { ArrowTopRightIcon } from "@radix-ui/react-icons"

const ContactCard = () => {
  return (
    <div className='mb-4'>
      <Card>
        <CardHeader>
            <CardDescription>contact</CardDescription>
        </CardHeader>
        <CardContent>
            <div className='flex flex-row gap-2'>
                <Button><Link href="mailto:sukrit37@gmail.com" target="_blank" className='flex flew-row gap-2 items-center'>email<ArrowTopRightIcon className="h-4 w-4" /></Link></Button>
                <Button><Link href="https://www.linkedin.com/in/sukrit37/" target="_blank" className='flex flew-row gap-2 items-center'>linkedin<ArrowTopRightIcon className="h-4 w-4" /></Link></Button>
                <Button><Link href="https://github.com/Sukrit3007" target="_blank" className='flex flew-row gap-2 items-center'>github<ArrowTopRightIcon className="h-4 w-4" /></Link></Button>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ContactCard
