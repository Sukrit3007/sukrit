'use client'

import * as React from "react"

import useMediaQuery from "@custom-react-hooks/use-media-query"

import { Button } from "@/components/ui/button"
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
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity"


export default function WorkCard({ work }: { work: any }) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Card className="cursor-pointer bg-indigo-300 ">
                        <CardHeader>
                            <CardTitle className="text-4xl font-bold">{work.name}</CardTitle>
                            <h1 className="text-sm">{work.type}</h1>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center bg-white rounded-2xl">
                                <Image
                                    src={work.image}
                                    alt="image"
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
                    <div className="p-4">
                        <MainCard work={work} />
                    </div>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Card className="cursor-pointer bg-indigo-300">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold">{work.name}</CardTitle>
                        <h1 className="text-sm">{work.type}</h1>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center bg-white rounded-2xl">
                        <Image
                            src={work.image}
                            alt="image"
                            width={300}
                            height={300}
                            className="object-contain rounded-md aspect-square"
                        />
                    </CardContent>
                </Card>
            </DrawerTrigger>
            <DrawerContent className="p-6">
                <DrawerHeader>
                    <DrawerTitle>{work.name}</DrawerTitle>
                    <DrawerDescription>{work.title}</DrawerDescription>
                </DrawerHeader>
                <div className="pt-6">
                    <MainCard work={work} />
                </div>
            </DrawerContent>
        </Drawer>
    )
}

function MainCard({ work }: { work: any }) {
    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };

    return (
        <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
        >
            <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="w-full flex items-center justify-center bg-white rounded-2xl"
            >
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
            </motion.div>
        </motion.div>
    )
}