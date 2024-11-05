import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogCardSkeleton } from "../components/BlogCardSkeleton";
import { useBlogs } from "../Hooks/Index"


export const Blogs = () => {


    const { Loading, Blogs } = useBlogs();

    if (Loading) {
        return <BlogCardSkeleton />

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
                        publishedDate={"3 October"}
                        imageURL={blog.imageURL}
                    />
                ))}
            </div>
        </div>

    )
}