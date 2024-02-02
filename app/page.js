'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button';


export default function Home() {
  return (
    <main className="flex min-h-fit flex-col items-center justify-between px-12 py-8 mb-16 lg:px-96 text-left">
      <div className="min-w-full flex flex-col gap-8">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        Namaste! 🙏🏻 I'm <Link href='https://github.com/Sukrit3007' className='underline'>Sukrit</Link>, a passionate 
        full-stack developer with a love for crafting clean and efficient code. With a solid foundation in 
        <Button variant="link"><Link href='https://react.dev/'>React</Link></Button>, 
        <Button variant="link"><Link href='https://nextjs.org/'>Next.js</Link></Button>, 
        <Button variant="link"><Link href='https://www.mongodb.com/'>MongoDB</Link></Button>, 
        <Button variant="link"><Link href='https://nodejs.org/en'>Node.js</Link></Button>, 
         I thrive in creating dynamic and responsive web applications 
        that not only meet but exceed expectations.
        </p>
        
        <div className="text-lg font-semibold">Tech Stack:</div>
        <ul className="ml-6 list-disc [&>li]:mt-2">
          <li>Frontend: React, JSX, Next.js</li>
          <li>Styling: Tailwind CSS, Shadcn/ui</li>
          <li>Backend: Node.js, Express, Mongoose</li>
          <li>Databases: MongoDB, SQL</li>
        </ul>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        I am not just a coder; I am a problem solver. I am constantly seeking ways to improve and optimize, 
        embracing challenges as opportunities to grow. My approach involves not only understanding the technical 
        intricacies but also aligning with the user's needs to deliver a product that stands out.<br/><br/>
        When I'm not immersed in code, you can find me exploring new technologies, staying updated on industry trends, 
        and pushing the boundaries of what's possible in the digital space.Let's collaborate and turn your ideas into reality! Feel free to 
        <span><Link href='www.linkedin.com/in/sukrit37' className='text-blue-400'> get in touch </Link></span> 
        if you have a project in mind 
        or just want to connect.<br/><br/>

        Happy coding! 🚀
        </p>

        <div className='border-t-2 pt-10'>
          <p className="leading-7 [&:not(:first-child)]:mt-6">Listening 🎧</p>

        </div>

      </div>
    </main>
  );
}
