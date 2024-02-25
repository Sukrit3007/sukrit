import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    { id: 1, icon: html},
    { id: 2, icon: css},
    { id: 3, icon: javascript},
    { id: 4, icon: typescript},
    { id: 5, icon: react},
    { id: 6, icon: appwrite},
    { id: 7, icon: php},
    { id: 8, icon: tailwindcss},
    { id: 9, icon: git},
    { id: 10, icon: mongodb},
    { id: 11, icon: sql},
    { id: 12, icon: nodejs},
    { id: 13, icon: express},
  ];

  return (
    <Card className="w-full mb-4 bg-inherit border-0">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-small text-default-500">tech-stack</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row flex-wrap items-center gap-4">
          {icons.map((item) => (
            <div key={item.id}>     
              <Image src={item.icon} alt="icon" width={40} height={40} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechStack;
