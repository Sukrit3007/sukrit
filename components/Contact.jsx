import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  
import { Button } from "@/components/ui/button"
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

const Contact = () => {
  return (
    <Card className="w-full mb-4 bg-inherit border-0">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-sm text-default-500">contact</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-4 flex-wrap">
          <Button><a href="mailto:sukrit37@gmail.com" className="flex flex-row gap-2 items-center font-semibold" target="_blank">email <ArrowTopRightIcon/></a></Button>
          <Button><a href="https://github.com/Sukrit3007" className="flex flex-row gap-2 items-center font-semibold" target="_blank">linkedin <ArrowTopRightIcon/></a></Button>
          <Button><a href="https://www.linkedin.com/in/sukrit37/" className="flex flex-row gap-2 items-center font-semibold" target="_blank">github <ArrowTopRightIcon/></a></Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Contact
