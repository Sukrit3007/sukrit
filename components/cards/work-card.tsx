'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function WorkCard({ work }: { work: any }) {
    return (
        <Link href={`/works/${work.id}`}>
            <Card className="bg-purple-300 text-black">
                <CardHeader className="">
                    <div className="flex flex-col gap-2 ">
                        <CardTitle className="text-3xl">{work.title}</CardTitle>
                        <CardDescription className="text-black">{work.type}</CardDescription>
                    </div>
                </CardHeader>
                <div className="bg-white rounded-2xl p-6">
                    <Image
                        src={work.image}
                        alt={work.name}
                        height={100}
                        width={100}
                        className="w-full object-contain aspect-video"
                    />
                </div>
            </Card>
        </Link>

    )
}
