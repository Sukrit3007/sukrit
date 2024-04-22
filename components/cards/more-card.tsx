import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"


const MoreCard = () => {
    return (
        <Card className='h-full bg-green-300'>
            <CardContent className='pt-6'>
                <div className='p-4'>
                    <h1 className='text-5xl font-bold font-foreground'>
                        Work in progress...
                    </h1>
                </div>
            </CardContent>
        </Card>
    )
}

export default MoreCard
