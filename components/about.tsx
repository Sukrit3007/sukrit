'use client'

import { aboutinfo } from "@/data/about"
import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function About() {
    return (
        <div className="grid grid-cols-2">
            <div className="col-span-1"> 
                <div className="flex flex-col gap-6 w-fit items-start justify-start">
                    <Button asChild size={'sm'}><Link href={aboutinfo.links.email} >email <ArrowUpRight className='size-5' /> </Link></Button>
                    <Button asChild size={'sm'}><Link href={aboutinfo.links.linkedin} >linkedin <ArrowUpRight className='size-5' /> </Link></Button>
                    <Button asChild size={'sm'}><Link href={aboutinfo.links.github} >github <ArrowUpRight className='size-5' /> </Link></Button>
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