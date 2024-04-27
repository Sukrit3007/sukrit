'use client'

import { aboutinfo } from "@/data/about"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link";
import { ArrowUpRight } from "lucide-react"


export default function About() {
    return (
        <div className="grid grid-cols-2">
            <div className="col-span-1">
                <div className="flex flex-col gap-6 w-fit items-start justify-start">
                    <Link isExternal showAnchorIcon size="sm" href={aboutinfo.links.email} anchorIcon={<ArrowUpRight />}>email </Link>
                    <Link isExternal showAnchorIcon size="sm" href={aboutinfo.links.linkedin} anchorIcon={<ArrowUpRight />}>linkedin </Link>
                    <Link isExternal showAnchorIcon size="sm" href={aboutinfo.links.github} anchorIcon={<ArrowUpRight />}>github </Link>
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