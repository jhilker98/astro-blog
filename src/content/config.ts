import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string({required_error: "A title is required for a blog post."}),
        draft: z.boolean({required_error: "Every post is either a draft or not."}).default(true),
        pubDate: z.date({required_error: "You need to have a date when the post was published."})
    })
})

export const collections = {
    "blog": blogCollection
}