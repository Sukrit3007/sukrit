'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Button } from '@/components/ui/button';

const AboutMe = () => {
    const initialText = 'Hello';
    const [displayText, setDisplayText] = useState(initialText);

    useEffect(() => {
    
        const textArray = ["नमस्ते","bonjour","مرحبًا", "hola", "ciao","olá","hallo","Привет","你好","こんにちは","안녕하세요"];
        let currentIndex = 0;
    
        const intervalId = setInterval(() => {
          setDisplayText(textArray[currentIndex]);
    
          currentIndex = (currentIndex + 1) % textArray.length;
        }, 3000);
    
        return () => clearInterval(intervalId);  
        
    
      }, []);

  return (
    <div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {displayText} 🙏🏻 I&apos;m <Link href='https://github.com/Sukrit3007' className='underline'>Sukrit</Link>, a passionate 
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
                intricacies but also aligning with the user&apos;s needs to deliver a product that stands out.<br/><br/>
                When I&apos;m not immersed in code, you can find me exploring new technologies, staying updated on industry trends, 
                and pushing the boundaries of what&apos;s possible in the digital space.Let&apos;s collaborate and turn your ideas into reality! Feel free to 
                <span><Link href='www.linkedin.com/in/sukrit37' className='text-blue-400'> get in touch </Link></span>
                if you have a project in mind 
                or just want to connect.<br/><br/>

                Happy coding! 🚀
            </p>
        </div>
    )
}

export default AboutMe
