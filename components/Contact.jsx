import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

const Contact = () => {
  const contactLinks = [
    {
      label: 'email',
      url: 'mailto:sukrit37@gmail.com',
      icon: <ArrowTopRightIcon />,
    },
    {
      label: 'linkedin',
      url: 'https://www.linkedin.com/in/sukrit37/',
      icon: <ArrowTopRightIcon />,
    },
    {
      label: 'github',
      url: 'https://github.com/Sukrit3007',
      icon: <ArrowTopRightIcon />,
    },
  ];

  const renderContactLinks = () => {
    return contactLinks.map((link, index) => (
      <Button
        key={index}
        className="flex flex-row gap-2 items-center font-semibold px-5 rounded-full shadow-md"
        style={{ backgroundColor: '#1B1B1B' }}
      >
        <a href={link.url} className="flex flex-row gap-2 items-center text-white" target="_blank">
          {link.label} {link.icon}
        </a>
      </Button>
    ));
  };

  return (
    <Card className="w-full mb-4 bg-inherit border-0">
      <CardHeader>
        <CardTitle>contact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-4 flex-wrap">{renderContactLinks()}</div>
      </CardContent>
    </Card>
  );
};

export default Contact;