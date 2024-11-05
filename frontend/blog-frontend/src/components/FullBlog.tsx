import { useNavigate } from "react-router-dom"
import { Blog } from "../Hooks/Index"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const FullBlog = ({ blog }: { blog: Blog }) => {

    const navigate = useNavigate()

    const HandleDelete = async (id: any) => {
        try {
            const response = await axios.delete(`${BACKEND_URL}/api/v1/blog/${id}`)
            alert(response.data.message);
            navigate("/blogs"); // Redirect to blog list or another page
        } catch (error) {
            console.error("Error deleting blog:", error);
            alert("There was an error deleting this blog.");
        }
        console.log(blog.id);
    }

    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Post on 2nd December 2023
                    </div>
                    <div className="w-screen pt-5 pb-5">
                        <img src={blog.imageURL} className="max-w-screen-sm" aria-placeholder="Blog-Image" />
                    </div>

                    <div className="pt-4">
                        {blog.content}
                    </div>

                    <button className="bg-red-500 text-white text-md text-center p-2 rounded-3xl"
                        onClick={() => HandleDelete(blog.id)}

                    >
                        Delete Blog
                    </button>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size="big" name={"Vineet"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {"Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Randommm catch phrase about the author's ability to grab the user's attention
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
}