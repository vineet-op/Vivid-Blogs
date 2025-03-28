import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogCardSkeleton } from "../components/BlogCardSkeleton";
import { useBlogs } from "../Hooks/Index"
import { motion } from "framer-motion"

export const Blogs = () => {


    const { Loading, Blogs } = useBlogs();

    if (Loading) {
        return <BlogCardSkeleton />

    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <Appbar />
            <div className="container mx-auto px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-10">
                <div className="grid grid-cols-1 items-center p-2 justify-center sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {Blogs.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                        >
                            <BlogCard
                                authorName={"Vineet"}
                                id={blog.id}
                                title={blog.title}
                                content={blog.content}
                                // publishedDate={"3 October"}
                                imageURL={blog.imageURL}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>

    )
}