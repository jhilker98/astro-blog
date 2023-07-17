import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string({required_error: "A title is required for a blog post."}),
        draft: z.boolean({required_error: "Every post is either a draft or not."}).default(true),
        pubDate: z.date({required_error: "You need to have a date when the post was published."}),
        tags: z.array(z.string()).optional(),
        categories: z.array(z.string()).optional(),
        lastModDate: z.date().optional(),
        series: z.object({
            name: z.string({required_error: "Any series must have a name."}),
            weight: z.number({required_error: "Any post in a series must have a weight to sort by in that series."}),
        }).optional(),
    })
})

export const collections = {
    "blog": blogCollection
}