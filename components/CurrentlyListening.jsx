import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  
import SpotifyPlayer from './SpotifyPlayer'

const CurrentlyListening = () => {
  return (
    <Card className="w-full bg-inherit border-0">
    <CardHeader className="flex gap-3">
     <CardTitle>currently listening:</CardTitle>
    </CardHeader>
    <CardContent>
      <SpotifyPlayer/>
    </CardContent>
    <CardFooter>
    
    </CardFooter>
  </Card>
  )
}

export default CurrentlyListening
