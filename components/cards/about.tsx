'use client'

import { aboutinfo } from "@/data/about"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link";
import { ArrowUpRight, GithubIcon, LinkedinIcon, Mail } from "lucide-react"


export default function About() {
    return (
        <div className="grid grid-cols-2">
            <div className="col-span-1">
                <div className="flex flex-col gap-6 w-fit items-start justify-start font-bold">
                    <Button
                        href={aboutinfo.links.email}
                        target='_blank'
                        as={Link}
                        color="secondary"
                        variant="flat"
                        endContent={<Mail className='size-5' />}
                    >
                        Email
                    </Button>
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
                        color="success"
                        variant="flat"
                        endContent={<GithubIcon className='size-5' />}
                    >
                        Github
                    </Button>
                </div>
            </div>
            <div className="col-span-1">
                <h1 className="text-left text-md font-normal ">
                    {aboutinfo.description.para1}<br /><br />{aboutinfo.description.para2}
                </h1>
            </div>
        </div>

    )
}