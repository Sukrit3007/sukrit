'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

const LoadingScreen = () => {
    const variants1 = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };
    const sentence = "Sukrit.dev";
    const wordVariants = {
        hidden: { opacity: 0 },
        visible: (i: any) => ({ y: 0, opacity: 1, transition: { delay: i * 0.3 } }),
    };
    const words = sentence.split(" ");

    return (
        <main className="bg-primary w-screen h-screen flex items-center justify-center z-50">
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                variants={variants1}
            >
                <div className='flex flex-col gap-2 items-start justify-center'>
                    <Image
                        src='/logo.svg'
                        alt='logo'
                        height={50}
                        width={50}
                        className='w-full h-full'
                    />
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        className="text-primary-foreground font-semibold"
                    >
                        {words.map((word, i) => (
                            <motion.span key={word} variants={wordVariants} custom={i}>
                                {word}{" "}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>
            </motion.div>
        </main>
    )
}

export default LoadingScreen
