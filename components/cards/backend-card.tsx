import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { aboutinfo } from '@/data/about'


const BackendCard = () => {
    return (
        <Card className='h-full bg-teal-300'>
            <CardContent className='pt-6'>
                <div className='p-4'>
                    <h1 className='text-4xl font-bold'>
                        {aboutinfo.card.backend}
                    </h1>
                </div>
            </CardContent>
        </Card>
    )
}

export default BackendCard
