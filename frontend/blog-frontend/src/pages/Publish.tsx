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
    const [content, setContent] = useState("");
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
                <div className="flex justify-center items-center h-screen">
                    <Loader />
                </div>
            ) : (
                <div className="bg-gradient-to-r from-rose-400 to-orange-300 min-h-screen px-4 py-8 flex items-center">
                    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-[800px] mx-auto">
                        <h1 className="text-5xl  text-center mb-4 font-extrabold ">What's on your mind ?</h1>
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 font-mono focus:ring-orange-400"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <ReactQuill
                                value={content}
                                onChange={handleContentChange}
                                className="h-40"
                            />
                            <input
                                type="file"
                                accept="image/*"
                                className="mt-6"
                                onChange={handleImageChange}
                            />
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="mt-2 size-52 h-auto object-cover rounded-md"
                                />
                            )}
                            <button
                                onClick={publishBlog}
                                className="bg-green-500 text-white rounded-md p-2 hover:bg-orange-600 transition-colors"
                            >
                                Publish
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
