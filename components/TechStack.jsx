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
  import Image from 'next/image'
  import Link from 'next/link'

  import htmlicon from '../public/icons/html.png'
  import cssicon from '../public/icons/css.png'
  import javascripticon from '../public/icons/js.png'
  import typescripticon from '../public/icons/typescript.png'
  import reacticon from '../public/icons/react.png'
  import nextjsicon from '../public/icons/nextjs.png'
  import nodejsicon from '../public/icons/nodejs.png'
  import tailwindcssicon from '../public/icons/tailwind.png'
  import phpicon from '../public/icons/php.png'
  import mongodbicon from '../public/icons/mongodb.png'
  import sqlicon from '../public/icons/sql.png'
  import githubicon from '../public/icons/github.png'


const TechStack = () => {
    const icons = [
        {icons: htmlicon, link:"https://en.wikipedia.org/wiki/HTML" },
        {icons: cssicon, link:"https://en.wikipedia.org/wiki/CSS" },
        {icons: javascripticon, link:"https://www.javascript.com/" },
        {icons: typescripticon, link:"https://www.typescriptlang.org/" },
        {icons: reacticon, link:"https://react.dev/" },
        {icons: nextjsicon, link:"https://nextjs.org/" },
        {icons: nodejsicon, link:"https://nodejs.org/en" },
        {icons: tailwindcssicon, link:"https://tailwindcss.com/" },
        {icons: phpicon, link:"https://www.php.net/" },
        {icons: mongodbicon, link:"https://www.mongodb.com/" },
        {icons: sqlicon, link:"https://www.mysql.com/" },
        {icons: githubicon, link:"https://github.com/" },
    ]
  return (
    <div className='mb-4'>
        <Card>
        <CardHeader>
            <CardDescription>tech-stack</CardDescription>
        </CardHeader>
        <CardContent>
        <div className='flex flex-row gap-4 flex-wrap'>
            {icons.map((item,index)=>(
            <div key={index}>
                <Link href={item.link} target="_blank">
                    <Image
                    src={item.icons}
                    alt="Picture of the author"
                    width={40}
                    height={40}
                    />
                </Link>
            </div>
            ))    
            }    
        </div>    
        
        </CardContent>
      </Card>

    </div>
  )
}

export default TechStack
