'use client'

import MyWork from "@/components/cards/my-work";
import { Separator } from "@/components/ui/separator";
import { aboutinfo } from "@/data/about";
import { motion } from "framer-motion";

export default function IndexPage() {
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
          Sukrit is a <span className="italic font-semibold">Full Stack Developer</span> based in {aboutinfo.city} City, seamlessly merging innovation with aesthetics.
        </motion.h1>
        <Separator />
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-4xl font-bold"
        >
          Here&apos;s my work...
        </motion.div>
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <>
            <MyWork/>
          </>
        </motion.div>
      </motion.div>

    </section>
  )
}
