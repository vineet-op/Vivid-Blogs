import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { createPostInput, updatePostInput } from "@vintech1000/medium-commonv1"
import { v2 as cloudinary } from 'cloudinary';






export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: {
        userId: any
    }
}>();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

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
    try {
        const formData = await c.req.formData();
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const image = formData.get('image') as File;
        const authorId = c.get("userId");

        let imageURL = '';

        if (image) {
            // Convert the file to base64
            const arrayBuffer = await image.arrayBuffer();
            const bytes = new Uint8Array(arrayBuffer);
            const base64Image = btoa(
                bytes.reduce((data, byte) => data + String.fromCharCode(byte), '')
            );

            // Upload to Cloudinary
            const uploadResponse = await fetch(
                `https://api.cloudinary.com/v1_1/dgcjzooxx/upload`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        file: `data:${image.type};base64,${base64Image}`,
                        api_key: 495285587171927,
                        upload_preset: 'ml_default',
                        folder: 'blog_images'
                    })
                }
            );

            const result: any = await uploadResponse.json();
            console.log(result);
            if (!uploadResponse.ok) {
                throw new Error('Image upload failed');
            }
            imageURL = result.secure_url;
        }

        // Create blog post with Prisma
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const blog = await prisma.post.create({
            data: {
                title,
                content,
                imageURL,
                authorId
            }
        });

        return c.json({
            blogId: blog.id,
            imageURL
        });

    } catch (error) {
        console.error('Error creating blog post:', error);
        return c.json({ error: 'Failed to create blog post' }, 500);
    }
});

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
                content: true,
                imageURL: true
            }
        })
        // console.log(blogs);
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
                imageURL: true,
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




// 

blogRouter.delete("/:id", async (c) => {

    const id = c.req.param("id");
    console.log(id);

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    try {
        const Blog = await prisma.post.delete({
            where: {
                id: id,
            },
        })
        return c.json({
            message: `Blog with ID ${id} deleted successfully.`,
        });

    } catch (error) {
        console.log("error while deleteing blog");
        return c.json({
            message: error
        })
    }

})