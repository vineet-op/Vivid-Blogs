import { useNavigate } from "react-router-dom";
import { Blog } from "../Hooks/Index";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";
import { SkipBack } from "lucide-react";
import parse from 'html-react-parser';

export const FullBlog = ({ blog }: { blog: Blog }) => {
    const navigate = useNavigate();
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0]; // Outputs in 'YYYY-MM-DD' format

    return (<>
        <Appbar />
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="flex justify-center flex-grow p-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-screen-xl bg-white rounded-xl shadow-lg p-6">
                    <div className="col-span-1 lg:col-span-8">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            {blog.title}
                        </h1>
                        <p className="text-sm text-gray-500 mb-4">
                            Published on: {formattedDate}
                        </p>
                        <div className="mb-6">
                            <img
                                src={blog.imageURL}
                                className="w-full max-h-96 object-cover rounded-lg shadow-md"
                                alt="Blog Image"
                            />
                        </div>
                        <div className="mt-4 text-gray-700 leading-relaxed">
                            {parse(blog.content)}
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-4 bg-gray-50 p-4 rounded-lg shadow-md">
                        <div className="flex flex-col items-center text-center lg:text-left">
                            <Avatar size="big" name={"Vineet"} />
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2 hidden lg:block">
                                {"Anonymous"}
                            </h2>
                            <p className="text-sm text-gray-600 mb-4 hidden lg:block">
                                Random catch phrase about the author's ability to grab the user's attention
                            </p>
                            <button
                                onClick={() => navigate("/blogs")}
                                className="mt-4 bg-cyan-600 hover:bg-cyan-700 transition-colors duration-200 w-full text-center flex justify-center items-center gap-2 h-10 rounded-lg font-semibold text-white"
                            >
                                <SkipBack />
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
