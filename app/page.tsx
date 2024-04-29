'use client'

import ContactButtons from "@/components/cards/contact-buttons";
import Heading from "@/components/heading";
import TechStack from "@/components/cards/tech-stack";
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
					<ContactButtons/>
				</motion.div>
				<Divider />
				<motion.div
					variants={FADE_UP_ANIMATION_VARIANTS}
				>
					<TechStack/>
				</motion.div>

			</motion.div>
		</section>
	);
}
