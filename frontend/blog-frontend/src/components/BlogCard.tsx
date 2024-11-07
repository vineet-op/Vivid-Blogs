import { Link } from "react-router-dom"
import ReactHtmlParser from 'react-html-parser';


interface BlogCardProps {
    authorName: string,
    title: string
    content: string
    publishedDate: string
    id: string
    imageURL: string
}


export const BlogCard = ({ authorName, title, content, publishedDate, id, imageURL }: BlogCardProps) => {


    return <Link to={`/blog/${id}`}>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            {/* Image */}
            <img src={imageURL} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-yellow-400 transition-colors duration-300">{title}</h3>

            {/* Content */}
            <p className="text-gray-700 mb-4 line-clamp-4">
                {ReactHtmlParser(content)}
            </p>

            {/* Author and Published Date */}
            <div className="text-sm text-gray-500">
                <p className="font-semibold">By Author <span className="font-bold text-gray-700">{authorName}</span></p>
            </div>

            {/* Read more link */}
            <a href={`/blog/${id}`} className="text-yellow-400 font-medium  hover:text-yellow-500 transition-colors duration-300 mt-5">
                Read More
            </a>
        </div>

    </Link>

}

export function Circle() {
    return <div className="h-2 w-2 rounded-full bg-pink-600">

    </div>
}


export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-pink-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
            {name[0]}
        </span>
    </div>
}