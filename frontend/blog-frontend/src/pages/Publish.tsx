import { useState } from "react"
import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Loader } from "../components/Loader";
import { useNavigate } from "react-router-dom";

export const Publish = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const publishBlog = async () => {
        setLoading(true)
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title,
            content
        }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        setLoading(false)
        console.log(response.data.id);
        navigate(`/blog/${response.data.blogId}`)
    }


    return <>
        <Appbar />
        {loading ? (
            <div>
                <Loader />
            </div>
        ) :
            (
                <div className="flex flex-col gap-4 justify-center items-center max-w-[800px] mx-auto mt-8">
                    <p className="text-4xl font-thin sm: text-center">What's on your mind ?</p>
                    <input
                        type="text"
                        id="blog-title"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 p-5 text-gray-900 text-sm rounded-lg w-full"
                        placeholder="Enter Blog Title"
                        onChange={(e: any) => setTitle(e.target.value)}
                    />
                    <textarea
                        id="blog-content"
                        onChange={(e: any) => setContent(e.target.value)}
                        rows={8}
                        className="block w-full text-sm p-5 text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500"
                        placeholder="Enter Blog Content">
                    </textarea>
                    {title} {content}
                    <button onClick={publishBlog} className="bg-green-600 p-3 mt-5 text-white font-medium rounded-lg">Publish </button>
                </div>

            )
        }
    </>
}
