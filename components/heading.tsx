
import { aboutinfo } from "@/data/about"

export default function Heading() {
    return (
        <div>
            <h1 className="text-left text-2xl font-normal md:text-3xl">
                Sukrit is a <span className="italic font-semibold">Full Stack Developer</span> based in {aboutinfo.city} City, seamlessly merging innovation with aesthetics.
            </h1>
        </div>

    )
}