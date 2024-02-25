import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  

const Location = () => {
  return (
    <Card className="w-full mb-4 bg-inherit border-0">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-small text-default-500">location</p>
        </div>
      </CardHeader>

      <CardContent>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardContent>
    </Card>
  )
}

export default Location
