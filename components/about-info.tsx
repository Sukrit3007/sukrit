import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { aboutinfo } from '@/data/about'
import { title } from "./primitives";


const AboutInfo = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
                <Card className="h-full bg-lime-400 text-black p-4">
                    <CardBody>
                        <p className={title()}>{aboutinfo.card.frontend}</p>
                    </CardBody>
                </Card>
            </div>
            <div className="col-span-1">
                <Card className="h-full bg-teal-300 text-black p-4">
                    <CardBody>
                        <p className={title()}>{aboutinfo.card.backend}</p>
                    </CardBody>
                </Card>
            </div>

        </div>
    )
}

export default AboutInfo
