'use client'

import BackendCard from "@/components/cards/backend-card";
import FrontendCard from "@/components/cards/frontend-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { aboutinfo } from "@/data/about";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function about() {
    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };
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
                <motion.h1
                    className="text-left text-2xl font-normal md:text-3xl mt-12"
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    Sukrit is a <span className="italic font-semibold">Full Stack Developer</span> based in {aboutinfo.city} City.
                </motion.h1>
                <Separator />
                <motion.div
                    variants={FADE_UP_ANIMATION_VARIANTS}
                    className="grid grid-cols-2"
                >
                    <motion.div
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className="col-span-1"
                    >
                        <div className="flex flex-col gap-6 w-fit items-start justify-start">
                            <Button asChild variant={'link'} size={'sm'}><Link href={aboutinfo.links.email} >email <ArrowUpRight className='size-5' /> </Link></Button>
                            <Button asChild variant={'link'} size={'sm'}><Link href={aboutinfo.links.linkedin} >linkedin <ArrowUpRight className='size-5' /> </Link></Button>
                            <Button asChild variant={'link'} size={'sm'}><Link href={aboutinfo.links.github} >github <ArrowUpRight className='size-5' /> </Link></Button>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className="col-span-1"
                    >
                        {aboutinfo.description.para1}<br/><br/>{aboutinfo.description.para2}
                    </motion.div>
                </motion.div>
                <Separator />
                <motion.div
                    variants={FADE_UP_ANIMATION_VARIANTS}
                    className="text-4xl md:text-7xl font-bold"
                >
                    Here&apos;s what you can expect from me...
                </motion.div>
                <motion.div
                    variants={FADE_UP_ANIMATION_VARIANTS}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <FrontendCard />
                    <BackendCard />
                </motion.div>
            </motion.div>
        </section>
    )
}