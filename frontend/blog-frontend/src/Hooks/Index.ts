import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"



export interface Blog {
    id: string
    title: string,
    content: string,
    published: string,
    authorId: string
    imageURL: string
}


export const useBlog = ({ id }: { id: string }) => {
    const [Loading, setLoading] = useState(true)
    const [Blog, setBlog] = useState<Blog>()


    useEffect(() => {
        try {
            axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: localStorage.getItem('token'),
                }
            })
                .then(response => {
                    setBlog(response.data.blog)
                    setLoading(false)
                })
        } catch (error) {
            console.log("Error while getting Blogs", error);
            throw error
        }
    }, [id])

    return {
        Loading,
        Blog
    }
}





interface BlogsProps {
    id: string
    title: string,
    content: string,
    published: string,
    authorId: string
    imageURL: string
}

export const useBlogs = () => {

    const [Loading, setLoading] = useState(true)
    const [Blogs, setBlogs] = useState<BlogsProps[]>([])

    useEffect(() => {
        try {
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                headers: {
                    Authorization: localStorage.getItem('token'),
                }
            })
                .then(response => {
                    setBlogs(response.data.blogs)
                    setLoading(false)
                })
        } catch (error) {
            console.log("Error while getting Blogs", error);
            throw error
        }
    }, [])


    console.log("The Blogs:", Blogs);
    return {
        Loading,
        Blogs
    }

}


interface BlogsProps {
    id: string
    title: string,
    content: string,
    published: string,
    authorId: string
    imageURL: string
}



