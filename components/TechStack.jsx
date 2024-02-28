import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import Image from 'next/image';
import html from '../public/Logos/html.svg';
import css from '../public/Logos/css.svg';
import javascript from '../public/Logos/javascript.svg';
import typescript from '../public/Logos/typescript.svg';
import react from '../public/Logos/react.svg';
import appwrite from '../public/Logos/appwrite.svg';
import php from '../public/Logos/php.svg';
import tailwindcss from '../public/Logos/tailwindcss.svg';
import git from '../public/Logos/git.svg';
import mongodb from '../public/Logos/mongodb.svg';
import sql from '../public/Logos/sql.svg';
import nodejs from '../public/Logos/nodejs.svg';
import express from '../public/Logos/express.svg';

const TechStack = () => {
  const icons = [
    { id: 1, icon: html, name: 'HTML', description: 'HyperText Markup Language' },
    { id: 2, icon: css, name: 'CSS', description: 'Cascading Style Sheets' },
    { id: 3, icon: javascript, name: 'JavaScript', description: 'The programming language of the web' },
    { id: 4, icon: typescript, name: 'TypeScript', description: 'A statically typed superset of JavaScript' },
    { id: 5, icon: react, name: 'React', description: 'A JavaScript library for building user interfaces' },
    { id: 6, icon: appwrite, name: 'Appwrite', description: 'An open-source backend server' },
    { id: 7, icon: php, name: 'PHP', description: 'A server-side scripting language' },
    { id: 8, icon: tailwindcss, name: 'Tailwind CSS', description: 'A utility-first CSS framework' },
    { id: 9, icon: git, name: 'Git', description: 'A distributed version control system' },
    { id: 10, icon: mongodb, name: 'MongoDB', description: 'A source-available cross-platform document-oriented database program' },
    { id: 11, icon: sql, name: 'SQL', description: 'A standard language for managing and manipulating databases' },
    { id: 12, icon: nodejs, name: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
    { id: 13, icon: express, name: 'Express.js', description: 'A web application framework for Node.js' },
  ];

  return (
    <Card className="w-full bg-inherit">
      <CardHeader className="flex gap-3">
        <CardDescription>tech-stack</CardDescription>
      </CardHeader>
      <CardContent >
        
        <div className="flex flex-row flex-wrap items-center gap-5 hover:cursor-pointer">
          {icons.map((item) => (
            <div key={item.id}>  
            <HoverCard>  
              <HoverCardTrigger><Image src={item.icon} alt="icon" width={40} height={40} /></HoverCardTrigger>
              <HoverCardContent>
                {item.name} : {item.description}
              </HoverCardContent>  
            </HoverCard>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechStack;
