import React from "react";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { ArrowUpRight } from "lucide-react";

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
                <CardFooter className=" justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute rounded-3xl bottom-1 w-[calc(100%_-_8px)] shadow-small m-2 z-10">
                    <div className="w-full flex items-start justify-start">
                        <p className="font-semibold text-white/80">
                            {work.title}
                        </p>
                    </div>
                    <Button onPress={onOpen} className="text-white" color="primary" radius="md" size="md">
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
                            <ModalHeader>{work.name}</ModalHeader>
                            <ModalBody>
                                <p>{work.description1}</p>
                                <p>{work.description2}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" variant="light" radius="full" endContent={<ArrowUpRight/>}>
                                    view demo
                                </Button>
                                <Button color="primary" variant="light" radius="full" endContent={<ArrowUpRight/>}>
                                    source code
                                </Button>
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
