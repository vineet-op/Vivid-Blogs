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
            <div className="container mx-auto px-4 bg-gradient-to-r from-rose-400 to-orange-300 py-10">
                <div className="grid grid-cols-1 items-center p-2 justify-center sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {Blogs.map((blog) => (
                        <BlogCard authorName={"Vineet"}
                            id={blog.id}
                            title={blog.title}
                            content={blog.content}
                            // publishedDate={"3 October"}
                            imageURL={blog.imageURL}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}