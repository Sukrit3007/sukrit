import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  


const CurrentlyListening = () => {
  return (
    <Card className="w-full bg-inherit border-0">
    <CardHeader className="flex gap-3">
      <CardDescription>currently listening:</CardDescription>
    </CardHeader>
    <CardContent>
    <div className="relative w-full h-[352px]">
                   <iframe
                    className="absolute inset-0 w-full h-full rounded-2xl"
                    src="https://open.spotify.com/embed/album/18NOKLkZETa4sWwLMIm0UZ?view=coverart"
                    style={{ border: '0' }}
                    allowFullScreen
                    allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;">
                </iframe>
        </div>
    </CardContent>
    <CardFooter>
    
    </CardFooter>
  </Card>
  )
}

export default CurrentlyListening
