'use client'

import MoreCard from "@/components/cards/more-card";
import WorkCard from "@/components/cards/work-card";
import { Separator } from "@/components/ui/separator";
import { aboutinfo } from "@/data/about";
import { workinfo } from "@/data/work";
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <>
            {workinfo.map((info: any) =>
              <div key={info.id}>
                <WorkCard info={info} />
              </div>
            )}
            <MoreCard />
          </>
        </motion.div>
      </motion.div>

    </section>
  )
}
