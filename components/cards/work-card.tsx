import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Link } from "@nextui-org/link";
import {  title } from "../primitives";
import RadialGradient from "../magicui/radial-gradient";
import LinearGradient from "../magicui/linear-gradient";

const WorkCard = ({ work }: { work: any }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div >
            <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
            >
                <div className=" relative flex h-full w-full items-center justify-center rounded-lg pt-10 pb-32 px-10 md:shadow-xl">
                    <div className="z-20 h-full w-full">
                        <p className={title()}>
                            {work.title}
                        </p>
                    </div>
                    {/* <RadialGradient /> */}
                    <LinearGradient/>
                </div>
                <CardFooter className="justify-between before:bg-white/10 border-white/20  overflow-hidden absolute bottom-0 w-full md:px-10 shadow-smal z-10">
                    <div className="w-full flex items-start justify-start">
                        <p className="text-sm font-medium text-white/80">
                            {work.name}
                        </p>
                    </div>
                    <Button onPress={onOpen} className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="full" size="md">
                        Details
                    </Button>
                </CardFooter>
            </Card>
            <Modal
                size="4xl"
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
                            </ModalHeader>

                            <ModalBody>
                                <ModalBodyContent work={work} />
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


function ModalBodyContent({ work }: any) {
    return (
        <div className="flex flex-col gap-8">

            <Card >
                <CardBody className="bg-lime-300 p-0">
                    <Image
                        src={work.image}
                        alt={work.name}
                        width={500}
                        height={500}
                        className="object-contain h-full w-full rounded-xl"
                    />
                </CardBody>
            </Card>

            <div className="flex flex-row gap-2">
                <Button
                    href={work.links.sourcecodeLink}
                    as={Link}
                    color="primary"
                    showAnchorIcon
                    variant="flat"
                >
                    Source code
                </Button>
                <Button
                    href={work.links.viewdemoLink}
                    as={Link}
                    color="primary"
                    showAnchorIcon
                    variant="flat"
                >
                    View demo
                </Button>
            </div>

            <Card>
                <CardBody>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold text-2xl">
                                    {work.name}
                            </h1>
                            <p className="text-sm font-light">
                                {work.title}
                            </p>
                            <Chip color="warning" variant="flat" size="sm">{work.type}</Chip>
                        </div>
                        <div>
                            <p>{work.description1}</p>
                        </div>
                    </div>
                </CardBody>
            </Card>

        </div>
    )
}
