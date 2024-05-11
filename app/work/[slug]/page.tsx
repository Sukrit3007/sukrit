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
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@nextui-org/spinner";

export default function workpage() {
    const url = useParams();
    const slug = JSON.stringify(url?.slug);
    const query = `*[_type == 'mywork' && slug.current == ${slug} ]`

    const { data: work, isLoading } = useQuery<any>({
        queryKey: ['work', slug],
        queryFn: () =>
            client.fetch(query)
    })
    if (isLoading) {
        return (
            <div className="w-full flex items-start justify-start p-6">
                <Spinner />
            </div>
        )
    }

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
            {work.map((work: any) => (
                <motion.div
                    key={work._id}
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
                                    {work.name}
                                </h1>
                                <p className='text-md'>
                                    {work.title}
                                </p>
                                <Chip color="warning" variant="flat" size="sm">{work.type}</Chip>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={FADE_UP_ANIMATION_VARIANTS}
                    >
                        <div className="flex items-start justify-center">
                            <NextImage
                                src={urlForImage(work.image).url()}
                                alt={work.name}
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
                                href={work.sourcecodeLink}
                                as={Link}
                                target="_blank"
                                color="secondary"
                                showAnchorIcon
                                variant="flat"
                            >
                                Source code
                            </Button>
                            <Button
                                href={work.viewdemoLink}
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
                                <PortableText value={work.description} components={PortableTextImageComponent} />
                            </div>
                        </div>

                    </motion.div>
                </motion.div>

            ))}
        </section>
    );
}
