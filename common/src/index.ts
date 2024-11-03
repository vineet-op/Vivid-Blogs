import z from "zod"

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export type SignUpSchema = z.infer<typeof signupInput> //using via package

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string(),
});

export type SignInSchema = z.infer<typeof signinInput>;

export const createPostInput = z.object({
    title: z.string(),

    content: z.string(),
});

export type CreatePostSchema = z.infer<typeof createPostInput>;

export const updatePostInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    id: z.string()
});

export type UpdatePostSchema = z.infer<typeof updatePostInput>;