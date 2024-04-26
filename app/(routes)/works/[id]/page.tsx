'use client'

import { useParams } from "next/navigation"
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { work } from "@/data/work";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";


export default function works() {
    const { id } = useParams();
    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };
    const thiswork: any = work.find(item => item.id === id);
    return (
        <section>
            <motion.div
                className="flex flex-col gap-12"
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
                    className="flex flex-col gap-2 mt-12"
                >
                    <motion.h1
                        className=" text-left text-2xl font-bold md:text-3xl"
                        variants={FADE_UP_ANIMATION_VARIANTS}
                    >
                        {thiswork.name}
                    </motion.h1>
                    <motion.h1
                        className=" text-left text-md font-normal md:text-xl"
                        variants={FADE_UP_ANIMATION_VARIANTS}
                    >
                        {thiswork.title}
                    </motion.h1>
                    <motion.h1
                        className="flex flex-col gap-2 text-left text-sm font-normal md:text-md"
                        variants={FADE_UP_ANIMATION_VARIANTS}
                    >
                        {thiswork.type}
                    </motion.h1>

                </motion.div>
                <motion.div
                    variants={FADE_UP_ANIMATION_VARIANTS}
                    className="flex flex-col gap-2"
                >
                    <Separator />
                    <div className="flex flex-row gap-2">
                        <Button asChild variant={'link'} size={'sm'}><Link href={thiswork.links.viewdemoLink} >view demo <ArrowUpRight className='size-5' /> </Link></Button>
                        <Button asChild variant={'link'} size={'sm'}><Link href={thiswork.links.sourcecodeLink} >source code <ArrowUpRight className='size-5' /> </Link></Button>
                    </div>
                    <Separator />
                </motion.div>
                <motion.div
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    <Image
                        src={thiswork.image}
                        alt={thiswork.name}
                        width={500}
                        height={500}
                        className="object-contain aspect-video w-full"
                    />
                </motion.div>
                <Separator />
                <motion.h1
                    className="text-left text-md font-normal "
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >   
                    {thiswork.description}
                </motion.h1>

            </motion.div>
        </section>
    )
}