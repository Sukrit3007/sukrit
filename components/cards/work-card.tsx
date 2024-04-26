'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { motion } from "framer-motion";
import * as Craft from "@/components/craft";
import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowUpRight } from "lucide-react"
import { Separator } from "../ui/separator";

export default function WorkCard({ work }: { work: any }) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Card className="bg-purple-300 text-black">
                    <CardHeader>
                        <CardTitle>{work.title} </CardTitle>
                        <CardDescription className="text-black">{work.type}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                        <h1 className="text-9xl">
                            {work.image}
                        </h1>
                    </CardContent>
                    <CardFooter className="bg-white rounded-2xl p-4">
                        <p className="font-bold">{work.name}</p>
                    </CardFooter>
                </Card>
            </DrawerTrigger>
            <DrawerContent className="bg-lime-200 text-black">
                <DrawerInfo work={work} />
            </DrawerContent>
        </Drawer>
    )
}

function DrawerInfo({ work }: { work: any }) {
    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };
    return (
        <Craft.Section>
            <Craft.Container>
                <motion.div
                    className="flex flex-col gap-10 p-2 md:p-6"
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
                        className="flex flex-col gap-10 p-2 md:p-6"
                    >
                        <motion.div
                            variants={FADE_UP_ANIMATION_VARIANTS}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 "
                        >
                            <motion.div
                                variants={FADE_UP_ANIMATION_VARIANTS}
                                className="col-span-1"
                            >
                                <div className="flex flex-col gap-2">
                                <h1 className="text-left text-2xl font-semibold md:text-3xl">{work.name}</h1>
                                <h1 className="text-left text-md font-normal ">{work.title}</h1>
                                <h1 className="text-left text-xs font-normal">{work.type}</h1>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={FADE_UP_ANIMATION_VARIANTS}
                                className="col-span-1"
                            >
                                <div className="flex items-center justify-center">
                                    <h1 className="text-9xl">
                                        {work.image}
                                    </h1>
                                </div>
                            </motion.div>

                        </motion.div>

                        <motion.div
                            variants={FADE_UP_ANIMATION_VARIANTS}
                            className="flex flex-col gap-4"
                        >
                            <Separator />
                            <motion.div 
                            className="flex flex-row gap-4"
                            variants={FADE_UP_ANIMATION_VARIANTS}
                            >
                                <Button asChild  size={'sm'}><Link href={work.links.viewdemoLink} >view demo <ArrowUpRight className='size-5' /> </Link></Button>
                                <Button asChild  size={'sm'}><Link href={work.links.sourcecodeLink} >source code <ArrowUpRight className='size-5' /> </Link></Button>
                            </motion.div>
                            <Separator />
                        </motion.div>
                            <motion.div
                            className="max-h-32 md:max-h-64 overflow-y-auto bg-white text-black p-6 rounded-xl"
                            variants={FADE_UP_ANIMATION_VARIANTS}
                            >
                                <h1>{work.description}</h1>
                            </motion.div>
                    </motion.div>
                </motion.div>
            </Craft.Container>
        </Craft.Section>
    )
}