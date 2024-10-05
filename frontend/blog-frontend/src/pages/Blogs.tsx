import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../Hooks/Index"


export const Blogs = () => {


    const { Loading, Blogs } = useBlogs();

    if (Loading) {
        return <div className="flex flex-col items-center justify-center max-w-full">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
    }
    return (
        <div>
            <Appbar />
            <div className="flex flex-col mt-5 justify-center items-center gap-2 max-w-screen-2xl">
                {Blogs.map((blog) => (
                    <BlogCard authorName={"Vineet"}
                        id={blog.id}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={"3 October"} />
                ))}
            </div>
        </div>

    )
}