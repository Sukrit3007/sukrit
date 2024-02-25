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

const CurrentlyListening = () => {
  return (
    <Card className="w-full bg-inherit border-0">
    <CardHeader className="flex gap-3">
      
      <div className="flex flex-col">
        <p className="text-sm text-default-500">currently-listening</p>
      </div>
    </CardHeader>
    <CardContent>
      <p>Make beautiful websites regardless of your design experience.</p>
    </CardContent>
    <CardFooter>
    
    </CardFooter>
  </Card>
  )
}

export default CurrentlyListening
