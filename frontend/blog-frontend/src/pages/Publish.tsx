import { useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Loader } from "../components/Loader";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast, Bounce } from "react-toastify";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); // Still use useState for content
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleContentChange = (value: string) => {
        setContent(value);
    };

    const publishBlog = async () => {
        if (!title || !content || !image) {
            toast("Please fill all required fields", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }

        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content); // Send content as HTML
            if (image) {
                formData.append('image', image);
            }

            const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: localStorage.getItem("token") || "",
                    }
                }
            );
            console.log(response);
            navigate(`/blog/${response.data.blogId}`);
        } catch (error) {
            console.error('Error publishing blog:', error);
            toast.error('Failed to publish blog. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                theme: "dark"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Appbar />
            {loading ? (
                <div>
                    <Loader />
                </div>
            ) : (
                <div className="bg-gradient-to-r from-rose-400 to-orange-300 h-screen">
                    <div className="flex flex-col gap-4 justify-center items-center max-w-[800px] pt-2 mx-auto">
                        <p className="text-4xl font-thin text-center">What's on your mind?</p>

                        {/* Title Input */}
                        <input
                            type="text"
                            placeholder="Enter Blog Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border rounded"
                        />

                        {/* Rich Text Editor for Content */}
                        <ReactQuill
                            value={content}
                            onChange={handleContentChange}
                            placeholder="Write your content here..."
                            className="w-full h-80 bg-white"
                        />

                        {/* Image Upload Section */}
                        <div className="w-full mt-9">
                            <label className="block text-sm font-medium text-gray-700">
                                Blog Image
                            </label>
                            <input type="file" onChange={handleImageChange} className="mt-2" />
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="mt-4 max-h-max w-auto rounded"
                                />
                            )}
                        </div>

                        <button
                            onClick={publishBlog}
                            className="mt-4 bg-blue-600 w-32 h-10 rounded-lg text-white font-semibold"
                        >
                            Publish
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
