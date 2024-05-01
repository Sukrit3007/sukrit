import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Link } from "@nextui-org/link";
import { title } from "../primitives";
import RadialGradient from "../magicui/radial-gradient";
import LinearGradient from "../magicui/linear-gradient";
import Meteors from "../magicui/meteors";

const WorkCard = ({ work }: { work: any }) => {
    return (
        <Link href={`/work/${work.slug.current}`} className="w-full h-full">
            <Card
                isFooterBlurred
                radius="lg"
                className="border-none w-full h-full"
            >
                <div className="relative flex h-full w-full items-center justify-center bg-background pt-10 pb-32 px-10">
                    <div className="z-20 h-full w-full">
                        <p className={title()}>
                            {work.title}
                        </p>
                    </div>
                    <Meteors number={30} />
                    <LinearGradient />
                </div>
                <CardFooter className="absolute bg-primary-300 bottom-0 w-full md:px-10 z-50">
                    <div className="w-full flex items-start justify-start">
                        <p className="text-sm font-medium text-white/80">
                            {work.name}
                        </p>
                    </div>
                    <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="full" size="md">
                        Details
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    )
}
export default WorkCard
