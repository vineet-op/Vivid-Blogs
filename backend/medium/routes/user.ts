import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput, signinInput } from "@vintech1000/medium-commonv1";



export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    }
}>();



userRouter.post('/signup', async (c) => {
    const body = await c.req.json()
    const { success } = signupInput.safeParse(body)

    if (!success) {
        c.status(411);
        return c.json({
            message: "Incorrect inputs While Signup"
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        })


        const token = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.text(token)

    } catch (error) {
        console.log("Signup", error);
        return c.status(403);

    }

})

userRouter.post('/signin', async (c) => {

    const body = await c.req.json();

    const { success } = signinInput.safeParse(body)

    if (!success) {
        c.status(411);
        return c.json({
            message: "Incorrect inputs while Signin"
        })
    }


    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const user = await prisma.user.findFirst({
            where: {
                email: body.email,
                password: body.password
            }
        });
        if (!user) {
            c.status(403)
            return c.json({ error: "User not found" })
        }
        const token = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.text(token)
    }
    catch (error) {
        return c.json({
            message: "Error While Signing In",
            Error: error
        })
    }
})
