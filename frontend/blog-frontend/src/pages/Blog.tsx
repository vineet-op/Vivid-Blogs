import { FullBlog } from "../components/FullBlog"
import { Skeleton } from "../components/Skeleton"
import { useBlog } from "../Hooks/Index"
import { useParams } from "react-router-dom"


export const Blog = () => {
    const { id } = useParams()
    const { Loading, Blog } = useBlog({
        id: id || ""
    })

    if (Loading) {
        return <div>
            <Skeleton />
        </div>
    }

    return <div>
        {/* @ts-ignore */}
        <FullBlog blog={Blog} />
    </div>
}