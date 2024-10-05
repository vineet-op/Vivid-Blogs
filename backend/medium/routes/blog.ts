import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { createPostInput, updatePostInput } from "@vintech1000/medium-commonv1"


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: {
        userId: any
    }
}>();



blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || ""
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET)
        if (user) {
            c.set("userId", user.id)
            await next();
        }
        else {
            c.status(403)
            return c.json({ message: "Un-Authorized" })
        }
    } catch (error) {
        c.status(403)
        return c.json({
            message: "Un-Authorized",
            Error: error
        })
    }
})



blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const authorId = c.get("userId")
    const { success } = createPostInput.safeParse(body);

    if (!success) {
        c.status(403)
        return c.json({
            message: "Incorrect inputs while creating post"
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId
        }
    })

    return c.json({
        blogId: blog.id
    })
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json();

    const { success } = updatePostInput.safeParse(body);

    if (!success) {
        c.status(403)
        return c.json({
            message: "Incorrect inputs while updating post"
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    try {
        const blog = await prisma.post.update({
            where: {
                id: body.id,
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })
        return c.json({
            id: blog.id
        })

    } catch (error) {
        console.log(error);
        return c.json({
            message: error
        })
    }

})


blogRouter.get("/bulk", async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blogs = await prisma.post.findMany({
            select: {
                id: true,
                title: true,
                content: true
            }
        })
        console.log(blogs);
        return c.json({
            blogs
        })
    } catch (error) {
        return c.json({ Errorinbulk: error })
    }
})



blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.post.findFirst({
            where: {
                id: id
            },
            select: {
                title: true,
                content: true,
                id: true
            }
        })
        return c.json({
            blog
        })


    } catch (error) {
        c.status(411)
        return c.json({
            message: error
        })
    }


})




