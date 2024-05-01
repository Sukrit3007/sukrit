import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: "lhamcl3n",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, 
})

const builder = imageUrlBuilder(client);

export function urlForImage(source: any) {
  return builder.image(source);
}