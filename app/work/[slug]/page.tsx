'use client'

import { client, urlForImage } from "@/lib/sanity";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";
import { Image as NextImage } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function workpage() {
    const url = useParams();
    const slug = JSON.stringify(url?.slug);
    const [work, setWork] = useState<any>([])

    useEffect(() => {
        const fetchData = async () => {
            const query = `*[_type == 'mywork' && slug.current == ${slug} ]`
            try {
                const data = await client.fetch(query);
                setWork(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const PortableTextImageComponent = {
        types: {
            image: ({ value }: { value: any }) => (
                <Image
                    src={urlForImage(value).url()}
                    alt="Image"
                    className="rounded-lg w-full object-contain aspect-auto"
                    width={800}
                    height={800}
                />
            ),
        },

    }

    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };

    return (
        <section>
            {work.length > 0 && (
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
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2 text-left ">
                                <h1 className="text-2xl font-semibold md:text-4xl">
                                    {work[0].name}
                                </h1>
                                <p className='text-md'>
                                    {work[0].title}
                                </p>
                                <Chip color="warning" variant="flat" size="sm">{work[0].type}</Chip>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={FADE_UP_ANIMATION_VARIANTS}
                    >
                        <div className="flex items-start justify-center">
                            <NextImage
                                src={urlForImage(work[0].image).url()}
                                alt={work[0].name}
                                width={1000}
                                height={500}
                                className="object-contain aspect-video h-full w-full rounded-xl"
                            />
                        </div>
                    </motion.div>
                    <Divider />
                    <motion.div
                        variants={FADE_UP_ANIMATION_VARIANTS}
                    >
                        <div className="flex flex-row gap-2">
                            <Button
                                href={work[0].sourcecodeLink}
                                as={Link}
                                target="_blank"
                                color="secondary"
                                showAnchorIcon
                                variant="flat"
                            >
                                Source code
                            </Button>
                            <Button
                                href={work[0].viewdemoLink}
                                as={Link}
                                target="_blank"
                                color="success"
                                showAnchorIcon
                                variant="flat"
                            >
                                View demo
                            </Button>
                        </div>
                    </motion.div>
                    <Divider />
                    <motion.div
                        variants={FADE_UP_ANIMATION_VARIANTS}
                    >
                        <div className="prose  prose-neutral prose-headings:2xl dark:prose-invert">
                            <div className="min-w-full ">
                                <PortableText value={work[0].description} components={PortableTextImageComponent} />
                            </div>
                        </div>

                    </motion.div>

                </motion.div>
            )}
        </section>
    );
}
