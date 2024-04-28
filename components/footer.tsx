import { aboutinfo } from '@/data/about'
import { Link } from '@nextui-org/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full flex flex-col md:flex-row items-start  md:items-center p-6">
            <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href={aboutinfo.links.linkedin}
                title="nextui.org homepage"
            >
                <span className="text-default-600">Built by</span>
                <p className="text-primary underline ">Sukrit.</p>

            </Link>
            <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href={aboutinfo.links.linkedin}
                title="nextui.org homepage"
            >
                <span className="text-default-600" >The source code is available on</span>
                <p className="text-primary underline ">GitHub.</p>
            </Link>
        </footer>
    )
}

export default Footer
