import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    apiVersion:'2024-05-01',
    dataset: 'production',
    projectId: 'ys5uqv10',
    useCdn : false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}
