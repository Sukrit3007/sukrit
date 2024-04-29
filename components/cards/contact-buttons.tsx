
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { GithubIcon, LinkedinIcon, WorkflowIcon } from 'lucide-react'
import React, { useState } from 'react'
import { HeartFilledIcon, HeartIcon, X} from '../icons'
import { aboutinfo } from '../../data/about'



const ContactButtons = () => {
    const [heartFilled, setHeartFilled] = useState(false);

    const handleHeartClick = () => {
        setHeartFilled(!heartFilled);
    };

    return (

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className="flex flex-row gap-2 w-fit items-start justify-start font-bold">
                <Button
                    href={aboutinfo.links.linkedin}
                    target='_blank'
                    as={Link}
                    color="primary"
                    variant="flat"
                    endContent={<LinkedinIcon className='size-5' />}
                >
                    Linkdein
                </Button>
                <Button
                    href={aboutinfo.links.github}
                    target='_blank'
                    as={Link}
                    color="default"
                    variant="flat"
                    endContent={<GithubIcon className='size-5' />}
                >
                    Github
                </Button>
                <Button
                    href={aboutinfo.links.x}
                    target='_blank'
                    as={Link}
                    color="secondary"
                    variant="flat"
                    endContent={<X className='size-5' />}
                >
                    X
                </Button>
            </div>
            <div className='flex gap-2 items-center justify-start'>
                <Button
                    href={aboutinfo.links.email}
                    target='_blank'
                    as={Link}
                    color="success"
                    variant="flat"
                    startContent={<WorkflowIcon/> }
                >
                    Open to work
                </Button>
                <Button
                    as={Link}
                    color="danger"
                    variant="flat"
                    onClick={handleHeartClick}
                    startContent={heartFilled ? <HeartFilledIcon /> : <HeartIcon />}
                >
                     {heartFilled ? 'You gave heart' : 'Give me heart'}
                </Button>
            </div>
        </div>

    )
}

export default ContactButtons
