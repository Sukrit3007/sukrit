import { Image } from '@nextui-org/image'
import React from 'react'

const Logo = () => {
    return (
        <div className='flex justify-start items-center gap-2'>
            <Image
                src='/sukrit.svg'
                alt='sukrit.dev'
                width={100}
                height={100}
                className="object-contain w-6 h-6"
            />
            <p className="font-bold text-inherit">sukrit.<span className="text-primary-500">dev</span></p>
        </div>
    )
}

export default Logo
