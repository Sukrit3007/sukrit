import React from 'react'
import {Card, CardBody} from "@nextui-org/card";
import { title } from '../primitives';

const MoreCard = () => {
  return (
    <Card className='bg-lime-300 text-black p-6'>
      <CardBody>
        <p className={title()}>Work in progress...</p>
      </CardBody>    
    </Card>
  )
}

export default MoreCard
 