import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string({required_error: "A title is required for a blog post."}),
        draft: z.boolean().default(true),
        pubDate: z.date()
    })
})

export const collections = {
    "blog": blogCollection
}