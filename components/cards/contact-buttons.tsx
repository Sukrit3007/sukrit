import { aboutinfo } from '@/data/about'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { GithubIcon, LinkedinIcon, Mail, WorkflowIcon } from 'lucide-react'
import React from 'react'
import { HeartFilledIcon, X} from '../icons'
import { confetti } from "@tsparticles/confetti";



const ContactButtons = () => {
    const handleClick = (event:any) => {
        const buttonRect = event.target.getBoundingClientRect(); // Get button's bounding rectangle
        const centerX = buttonRect.left + buttonRect.width / 2; // Calculate button's center X coordinate
        const centerY = buttonRect.top + buttonRect.height / 2; // Calculate button's center Y coordinate
    
        confetti("tsparticles", {
            count: 40,
            spread: 35,
            startVelocity: 15,
            decay: 0.9,
            gravity: 1,
            drift: 0,
            ticks: 200,
            colors: ["#ffffff", "#ff0000"],
            shapes: ["square", "circle"],
            scalar: 1,
            zIndex: 100,
            disableForReducedMotion: true,
            position: {
                x: (centerX / window.innerWidth) * 100,
                y: (centerY / window.innerHeight) * 100
            }
        });
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
                    startContent={<HeartFilledIcon/>}
                    onClick={handleClick} 
                >
                    Give me heart
                </Button>
            </div>
        </div>

    )
}

export default ContactButtons
