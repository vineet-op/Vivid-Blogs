import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"

export const Signin = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
            <div>
                <Auth type="signin" />
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    </div>
}