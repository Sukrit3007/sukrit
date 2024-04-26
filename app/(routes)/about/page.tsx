'use client'

import About from "@/components/about";
import BackendCard from "@/components/cards/backend-card";
import FrontendCard from "@/components/cards/frontend-card";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
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
                > 
                <Heading/>
                </motion.div>
                <Separator />
                <motion.div
                    variants={FADE_UP_ANIMATION_VARIANTS}
                > 
                    <About/>
                </motion.div>
                <Separator />
                <motion.div
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    <SubHeading/>
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