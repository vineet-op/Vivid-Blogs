import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"

export const Signup = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
            <div>
                <Auth type="signup" />
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    </div>
}