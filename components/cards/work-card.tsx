'use client'

import * as React from "react"

import useMediaQuery from "@custom-react-hooks/use-media-query"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerContent,
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
import { CardFooter } from "@material-tailwind/react"
import { motion } from "framer-motion";


export default function WorkCard({ info }: { info: any }) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Card className="cursor-pointer bg-indigo-300 ">
                        <CardHeader>
                            <CardTitle className="text-4xl font-bold">{info.name}</CardTitle>
                            <h1 className="text-sm">{info.type}</h1>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center bg-white rounded-2xl">
                                <Image
                                    src={info.image}
                                    alt="image"
                                    width={300}
                                    height={300}
                                    className="object-contain rounded-md aspect-square"
                                />
                        </CardContent>
                    </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[50%] pt-6">
                    <div className="p-4">
                        <MainCard info={info} />
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
                        <CardTitle className="text-4xl font-bold">{info.name}</CardTitle>
                        <h1 className="text-sm">{info.type}</h1>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center bg-white rounded-2xl">
                        <Image
                            src={info.image}
                            alt="image"
                            width={300}
                            height={300}
                            className="object-contain rounded-md aspect-square"
                        />
                    </CardContent>
                </Card>
            </DrawerTrigger>
            <DrawerContent className="p-6">
                <div className="pt-6">
                    <MainCard info={info} />
                </div>
            </DrawerContent>
        </Drawer>
    )
}

function MainCard({ info }: { info: any }) {
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
                <Image
                    src={info.image}
                    alt="image"
                    width={300}
                    height={300}
                    className="object-contain rounded-md aspect-square pt-6"
                />

            </motion.div>
            <motion.div
            >
                <motion.h1
                    className="text-left text-2xl font-bold md:text-3xl"
                >
                    {info.title}
                </motion.h1>
                <motion.h1
                    className="text-left text-xs font-normal"
                >
                    {info.type}
                </motion.h1>
            </motion.div>

            <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                <div className='flex items-center justify-start gap-4'>
                    <Button asChild size={'sm'} className='text-primary-foreground'><Link href={info.links.demolink} target='_blank' >view demo<ArrowUpRight className='w-5 h-5' /> </Link></Button>
                    <Button asChild size={'sm'} className='text-primary-foreground'><Link href={info.links.sourcelink} target='_blank' >source code <ArrowUpRight className='w-5 h-5' /> </Link></Button>
                </div>

            </motion.div>
            <motion.div
                className="w-full flex flex-col items-start justify-start rounded-2xl"
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                {info.description.map((item: { heading: string, para: string }, index: number) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold">{item.heading}</h3>
                        <p className="text-sm">{item.para}</p>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}
