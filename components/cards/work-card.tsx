'use client'

import * as React from "react"
import Image from "next/image";
import Link from "next/link";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { urlFor } from "@/lib/sanity";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import useMediaQuery from "@custom-react-hooks/use-media-query"

export default function WorkCard({ work }: { work: any }) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")


    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className="w-full" asChild>
                    <Card className="cursor-pointer bg-indigo-300 ">
                        <CardHeader className="text-left">
                            <CardTitle className="text-4xl font-bold ">{work.title}</CardTitle>
                            <h1 className="text-sm ">{work.type}</h1>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center bg-white rounded-2xl">
                            <Image
                                src={urlFor(work.image).url()}
                                alt={work.name}
                                width={300}
                                height={300}
                                className="object-contain rounded-md aspect-square"
                            />
                        </CardContent>
                    </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[50%] pt-6">
                    <DialogHeader >
                        <DialogTitle>{work.name}</DialogTitle>
                        <DialogDescription>{work.title}</DialogDescription>
                    </DialogHeader>
                    <div className="w-fit flex flex-row gap-2 items-start justify-start border rounded-3xl border-primary ">
                        <Button asChild variant={'link'} size={'sm'}><Link href={work.demolink} target="_blank">view demo <ArrowUpRight className='size-5' /> </Link></Button>
                        <Button asChild variant={'link'} size={'sm'}><Link href={work.sourcelink} target="_blank">source code <ArrowUpRight className='size-5' /> </Link></Button>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <Image
                            src={urlFor(work.image).url()}
                            alt={work.name}
                            width={500}
                            height={300}
                            className="object-contain rounded-md aspect-video"
                        />
                    </div>
                    <div className="mt-4 text-left">
                        {work.description}
                    </div>
                </DialogContent>
            </Dialog>
        )
    }
    return (
        <div>
            <Drawer>
                <DrawerTrigger className="w-full" asChild>
                    <Card className="cursor-pointer bg-indigo-300 ">
                        <CardHeader className="text-left">
                            <CardTitle className="text-4xl font-bold ">{work.title}</CardTitle>
                            <h1 className="text-sm ">{work.type}</h1>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center bg-white rounded-2xl">
                            <Image
                                src={urlFor(work.image).url()}
                                alt={work.name}
                                width={300}
                                height={300}
                                className="object-contain rounded-md aspect-square"
                            />
                        </CardContent>
                    </Card>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>{work.name}</DrawerTitle>
                        <DrawerDescription>{work.title}</DrawerDescription>
                    </DrawerHeader>
                    <div className="w-full flex items-center justify-center">
                        <Image
                            src={urlFor(work.image).url()}
                            alt={work.name}
                            width={300}
                            height={300}
                            className="object-contain rounded-md aspect-video"
                        />
                    </div>
                    <div className="w-full flex flex-row gap-6 items-center justify-center mt-4">
                        <Button asChild variant={'link'} size={'sm'}><Link href={work.demolink} target="_blank">view demo <ArrowUpRight className='size-5' /> </Link></Button>
                        <Button asChild variant={'link'} size={'sm'}><Link href={work.sourcelink} target="_blank">source code <ArrowUpRight className='size-5' /> </Link></Button>
                    </div>
                    <div className="px-6 mt-4 mb-6 text-left">
                        {work.description}
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}


