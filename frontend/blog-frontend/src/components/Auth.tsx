import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpSchema } from "@vintech1000/medium-commonv1";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Bounce, toast } from "react-toastify";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Prefilled values for demo purposes
    const [postInputs, setPostInputs] = useState<SignUpSchema>({
        email: "perry@dev.to",
        password: "123456"
    });

    async function sendRequest() {
        try {
            setLoading(true);
            const response = await axios.post(
                `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
                postInputs
            );
            const jwt = response.data;
            console.log(jwt);
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch (e) {
            toast("Error While Logging in", {
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
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-5xl font-extrabold">
                            Create an account
                        </div>
                        <div className="text-white text-center text-lg">
                            {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                            <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                                {type === "signin" ? "Sign up" : "Sign in"}
                            </Link>
                        </div>
                    </div>
                    <div className="pt-8">
                        <LabelledInput
                            label="Username"
                            placeholder="harkirat@gmail.com"
                            value={postInputs.email} // Add value prop to prefill
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    email: e.target.value
                                });
                            }}
                        />
                        <LabelledInput
                            label="Password"
                            type="password"
                            placeholder="123456"
                            value={postInputs.password} // Add value prop to prefill
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    password: e.target.value
                                });
                            }}
                        />
                        <button
                            onClick={sendRequest}
                            type="button"
                            className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            {loading ? "Loading..." : (type === "signup" ? "Sign up" : "Sign in")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface LabelledInputType {
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// LabelledInput component (add this below or in a separate file if needed)
const LabelledInput = ({ label, type = "text", placeholder, value, onChange }: LabelledInputType) => (
    <div className="mb-4">
        <label className="block text-md text-white font-bold text-gray-700">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        />
    </div>
);
