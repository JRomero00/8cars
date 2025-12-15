import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-13',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Queries helpers
export async function getCars(limit?: number) {
  return client.fetch(
    `*[_type == "car" && status == "available"] | order(publishedAt desc) ${limit ? `[0...${limit}]` : ''}`,
  )
}

export async function getFeaturedCars() {
  return client.fetch(
    `*[_type == "car" && isFeatured == true && status == "available"] | order(publishedAt desc) [0...3]`,
  )
}

export async function getCarBySlug(slug: string) {
  return client.fetch(`*[_type == "car" && slug.current == $slug][0]`, {
    slug,
  })
}

export async function getPosts(limit?: number) {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) ${limit ? `[0...${limit}]` : ''} {
      ...,
      category->,
      relatedCar->
    }`,
  )
}

export async function getFeaturedPosts() {
  return client.fetch(
    `*[_type == "post" && isFeatured == true] | order(publishedAt desc) [0...3] {
      ...,
      category->,
      relatedCar->
    }`,
  )
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      ...,
      category->,
      relatedCar->
    }`,
    { slug },
  )
}