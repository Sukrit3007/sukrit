import React from 'react'
import {Card, CardBody} from "@nextui-org/card";
import { title } from '../primitives';
import Globe from '../magicui/globe';

const MoreCard = () => {
  return (
    <Card className='bg-lime-300 text-black p-6'>
      <div className='z-10'>
        <p className={title()}>Work in progress...</p>
      </div>
      <Globe className="top-28" />
    </Card>
  )
}

export default MoreCard
 