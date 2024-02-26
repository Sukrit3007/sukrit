import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  
import LocationMap from './LocationMap'

const Location = () => {  
  return (
    <Card className="w-full bg-inherit border-0">
      <CardHeader >
        <CardTitle>location</CardTitle>
      </CardHeader>
      <CardContent>
        <LocationMap/>
      </CardContent>
    </Card>
  )
}

export default Location

