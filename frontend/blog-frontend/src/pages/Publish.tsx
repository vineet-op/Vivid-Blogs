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

    // const publishBlog = async () => {
    //     setLoading(true)
    //     const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
    //         title,
    //         content
    //     }, {
    //         headers: {
    //             Authorization: localStorage.getItem("token")
    //         }
    //     })
    //     setLoading(false)
    //     console.log(response.data.id);
    //     navigate(`/blog/${response.data.blogId}`)
    // }

    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const publishBlog = async () => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            if (image) {
                formData.append('image', image);
            }

            const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: localStorage.getItem("token")
                    }
                }
            );
            console.log(response);
            navigate(`/blog/${response.data.blogId}`);
        } catch (error) {
            console.error('Error publishing blog:', error);
        } finally {
            setLoading(false);
        }
    };

    return <>
        <Appbar />
        {loading ? (
            <div>
                <Loader />
            </div>
        ) :
            (
                // <div className="flex flex-col gap-4 justify-center items-center max-w-[800px] mx-auto mt-8">
                //     <p className="text-4xl font-thin sm: text-center">What's on your mind ?</p>
                //     <input
                //         type="text"
                //         id="blog-title"
                //         aria-describedby="helper-text-explanation"
                //         className="bg-gray-50 p-5 text-gray-900 text-sm rounded-lg w-full"
                //         placeholder="Enter Blog Title"
                //         onChange={(e: any) => setTitle(e.target.value)}
                //     />
                //     <textarea
                //         id="blog-content"
                //         onChange={(e: any) => setContent(e.target.value)}
                //         rows={8}
                //         className="block w-full text-sm p-5 text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500"
                //         placeholder="Enter Blog Content">
                //     </textarea>


                //     <button onClick={publishBlog} className="bg-green-600 p-3 mt-5 text-white font-medium rounded-lg">Publish </button>
                // </div>


                <div className="flex flex-col gap-4 justify-center items-center max-w-[800px] mx-auto mt-8">
                    <p className="text-4xl font-thin sm: text-center">What's on your mind?</p>

                    {/* Image Upload Section */}
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">
                            Blog Image
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                {imagePreview ? (
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="mx-auto h-64 w-auto"
                                    />
                                ) : (
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                                <div className="flex text-sm text-gray-600">
                                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <span>Upload a file</span>
                                        <input
                                            type="file"
                                            className="sr-only"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                        />
                                    </label>
                                </div>
                                <p className="text-xs text-gray-500">
                                    PNG, JPG, GIF up to 10MB
                                </p>
                            </div>
                        </div>
                    </div>

                    <input
                        type="text"
                        id="blog-title"
                        className="bg-gray-50 p-5 text-gray-900 text-sm rounded-lg w-full"
                        placeholder="Enter Blog Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        id="blog-content"
                        onChange={(e) => setContent(e.target.value)}
                        rows={8}
                        className="block w-full text-sm p-5 text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500"
                        placeholder="Enter Blog Content"
                    />

                    <button
                        onClick={publishBlog}
                        className="bg-green-600 p-3 mt-5 text-white font-medium rounded-lg"
                    >
                        Publish
                    </button>
                </div>
            )}

    </>
}


