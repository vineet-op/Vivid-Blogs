import { useNavigate } from "react-router-dom"
import { Blog } from "../Hooks/Index"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"
import { SkipBack } from "lucide-react"
import ReactHtmlParser from 'react-html-parser';

export const FullBlog = ({ blog }: { blog: Blog }) => {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen  flex flex-col">
            <Appbar />
            <div className="flex justify-center flex-grow bg-gradient-to-r from-rose-400 to-orange-300">
                <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
                    <div className="col-span-8">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-white pt-2">
                            Post on 2nd December 2023
                        </div>
                        <div className="pt-5 pb-5">
                            <img
                                src={blog.imageURL}
                                className="w-full max-h-96 object-cover rounded-lg"
                                alt="Blog Image"
                            />
                        </div>

                        <div className="mt-5 font-medium text-md">
                            {ReactHtmlParser(blog.content)}
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex w-full">
                            <div className="pr-4 flex flex-col justify-center hidden lg:block">
                                <Avatar size="big" name={"Vineet"} />
                            </div>
                            <div>
                                <div className="text-xl font-bold hidden lg:block">
                                    {"Anonymous"}
                                </div>
                                <div className="pt-2 text-slate-500 hidden lg:block">
                                    Random catch phrase about the author's ability to grab the user's attention
                                </div>
                                <button

                                    onClick={() => navigate("/blogs")}
                                    className="mt-5 bg-cyan-700 w-40 text-center justify-center gap-2 items-center h-10 rounded-xl flex flex-row font-semibold text-white"
                                >
                                    <SkipBack />
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
