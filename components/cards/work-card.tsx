import React from "react";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@nextui-org/link";
import Ripple from "../magicui/ripple";

const WorkCard = ({ work }: { work: any }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div >
            <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
            >
                <Image
                    src={work.image}
                    alt="image"
                    isZoomed
                    height={500}
                    width={500}
                    className="object-contain w-full h-full"
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden absolute rounded-full bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 mb-2 z-10">
                    <div className="w-full flex items-start justify-start">
                        <p className="font-semibold text-white/80">
                            {work.title}
                        </p>
                    </div>
                    <Button onPress={onOpen} className="text-white" color="primary" radius="full" size="md">
                        Learn more
                    </Button>
                </CardFooter>
            </Card>
            <Modal
                size="xl"
                isOpen={isOpen}
                backdrop={'blur'}
                placement={'bottom-center'}
                onOpenChange={onOpenChange}
                scrollBehavior={'inside'}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>

                                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-purple-300 p-20 md:shadow-xl">
                                    <p className="z-10 whitespace-pre-wrap text-center text-3xl font-medium tracking-tighter text-black">
                                        {work.name}
                                    </p>
                                    <Ripple />
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex flex-row gap-4">
                                    <Link color="primary" href={work.links.viewdemoLink} target="_blank">
                                        view demo <ArrowUpRight />
                                    </Link>
                                    <Link color="primary" href={work.links.sourcecodeLink} target="_blank">
                                        source code <ArrowUpRight />
                                    </Link>
                                </div>
                                <p>{work.description1}</p>
                                <p>{work.description2}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" radius="full" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default WorkCard
