'use client'

import About from "@/components/cards/about";
import AboutInfo from "@/components/cards/about-info";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import { Divider } from "@nextui-org/divider";
import { motion } from "framer-motion";

export default function AboutPage() {
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
                    <About/>
                </motion.div>
                <Divider />
                <motion.div
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    <SubHeading/>
                </motion.div>
                <motion.div
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    <AboutInfo/>
                </motion.div>
            </motion.div>
        </section>
	);
}
