'use client'


import MyWork from "@/components/cards/my-work";
import ContactButton from "@/components/contact-button";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import TechStack from "@/components/tech-stack";
import { Divider } from "@nextui-org/divider";
import { motion } from "framer-motion";


export default function Home() {
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
					<Heading />
				</motion.div>
				<Divider />
				<motion.div
					variants={FADE_UP_ANIMATION_VARIANTS}
				>
					<ContactButton/>
				</motion.div>
				<Divider />
				<motion.div
					variants={FADE_UP_ANIMATION_VARIANTS}
				>
					<MyWork />
				</motion.div>
			</motion.div>
		</section>
	);
}
