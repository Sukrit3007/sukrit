import { aboutinfo } from '@/data/about'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { GithubIcon, LinkedinIcon, Mail, X } from 'lucide-react'
import React from 'react'


const ContactButton = () => {
    const buttonInfo = [
        {
            label: '',
            icons:''
        },
    ]

  return (
    <div className='flex flex-row flex-wrap gap-2'>
        <Button
      href={aboutinfo.links.email}
      as={Link}
      color="secondary"
      variant="flat"
      endContent={<Mail className='size-5'/>}
      >
      Email
    </Button>
    <Button
      href={aboutinfo.links.linkedin}
      as={Link}
      color="primary"
      variant="flat"
      endContent={<LinkedinIcon className='size-5'/>}
      >
      Linkdein
    </Button>
    <Button
      href={aboutinfo.links.github}
      as={Link}
      color="success"
      variant="flat"
      endContent={<GithubIcon className='size-5'/>}
    >
      Github
    </Button>
    </div>
  )
}

export default ContactButton
